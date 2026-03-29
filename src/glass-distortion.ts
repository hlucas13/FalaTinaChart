// ── Physics-Based Liquid Glass Displacement Map ──
// Generates per-surface displacement maps based on Snell's-law refraction
// for a convex glass bezel, following the approach described in
// https://kube.io/blog/liquid-glass-css-svg/
//
// Two SVG filters are maintained:
//   #glass-distortion-dock  — pill-shaped floating dock (updated on resize)
//   #glass-distortion-panel — modals and menus (objectBoundingBox — scales to
//                             any panel size automatically)
//
// For Chromium browsers the filter is promoted into backdrop-filter via
// CSS @supports, applying refraction to the crisp background before
// blurring — matching how real glass works.

const GlassDistortion = {
    // Index of refraction of the glass (1.45 ≈ borosilicate / optical glass)
    IOR: 1.45,

    // Controls how steeply the convex surface rises from the outer edge.
    // Higher = more refraction.
    GLASS_THICKNESS: 0.72,

    // Bezel width relative to min(element_size) / 2.
    // Clamped against the corner radius so it never spills into the flat face.
    BEZEL_FRACTION: 0.38,

    // ── Signed-distance function for a rounded rectangle ──
    // Returns the distance from pixel (px,py) to the nearest boundary edge.
    // Positive  → pixel is inside the shape.
    // Negative  → pixel is outside.
    _innerDist(px, py, cx, cy, hw, hh, r) {
        const qx = Math.abs(px - cx) - (hw - r);
        const qy = Math.abs(py - cy) - (hh - r);
        const outer =
            Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) +
            Math.min(Math.max(qx, qy), 0) -
            r;
        return -outer; // positive inside
    },

    // ── Generate a 1×1 neutral displacement map data URL ──
    // Used as the placeholder until the first real map is computed,
    // so that SVG filters emit zero displacement instead of rendering
    // artefacts from an empty href.
    _neutralDataUrl() {
        const c = document.createElement('canvas');
        c.width = 2;
        c.height = 2;
        const ctx = c.getContext('2d');
        const id = ctx.createImageData(2, 2);
        for (let i = 0; i < 16; i += 4) {
            id.data[i] = id.data[i + 1] = id.data[i + 2] = 128;
            id.data[i + 3] = 255;
        }
        ctx.putImageData(id, 0, 0);
        return c.toDataURL('image/png');
    },

    // ── Build displacement map ──
    // Returns { dataUrl: string, scale: number (pixels), width, height }
    build(width, height, borderRadius) {
        const W = Math.max(Math.ceil(width), 2);
        const H = Math.max(Math.ceil(height), 2);
        const R = Math.min(borderRadius, Math.min(W, H) / 2);
        const cx = W / 2;
        const cy = H / 2;
        // Bezel width in pixels.
        // Upper bound R*0.85 ensures bezel never overshoots the corner curve.
        const bezelW = Math.min(
            Math.min(W, H) * this.BEZEL_FRACTION * 0.5,
            R * 0.85,
        );

        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d', { willReadFrequently: false });
        const imgData = ctx.createImageData(W, H);
        const d = imgData.data;

        const mags = new Float32Array(W * H);
        const dxArr = new Float32Array(W * H);
        const dyArr = new Float32Array(W * H);
        let maxMag = 0;

        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const px = x + 0.5;
                const py = y + 0.5;
                const dist = this._innerDist(px, py, cx, cy, W / 2, H / 2, R);
                const i = y * W + x;

                // Only pixels in the bezel ring [0, bezelW) refract.
                if (dist <= 0 || dist >= bezelW) continue;

                // t: 0 = outer boundary, 1 = inner bezel edge (start of flat face)
                const t = dist / bezelW;

                // Convex surface height function: h(t) = THICKNESS × √t
                // Derivative: h′(t) = THICKNESS × 0.5 / √(t + ε)
                // The square-root profile yields a steep slope at the very edge
                // (simulating a curved lens rim) that smoothly levels out.
                const slope =
                    (this.GLASS_THICKNESS * 0.5) / Math.sqrt(t + 0.001);

                // Angle of incidence θ₁ from the surface normal
                const sinT1 = slope / Math.sqrt(1 + slope * slope);
                const cosT1 = Math.sqrt(Math.max(0, 1 - sinT1 * sinT1));

                // Snell's law:  n₁·sin θ₁ = n₂·sin θ₂  (n₁ = 1 for air)
                const sinT2 = sinT1 / this.IOR;
                const cosT2 = Math.sqrt(Math.max(0, 1 - sinT2 * sinT2));

                // Lateral exit-point displacement for a ray crossing the glass layer
                const tanT1 = sinT1 / (cosT1 + 1e-9);
                const tanT2 = sinT2 / (cosT2 + 1e-9);
                const mag = Math.abs(tanT1 - tanT2) * bezelW;

                mags[i] = mag;
                if (mag > maxMag) maxMag = mag;

                // Displacement direction: toward the optical axis (element center).
                // A convex lens bends rays inward — the sampled background pixel
                // comes from slightly further toward the center.
                const nx = cx - px;
                const ny = cy - py;
                const len = Math.sqrt(nx * nx + ny * ny) + 1e-9;
                dxArr[i] = nx / len;
                dyArr[i] = ny / len;
            }
        }

        if (maxMag < 0.001) maxMag = 1;

        // Encode to R-G channels.
        // 128 = neutral (no displacement).
        // Pixel = 128 ± normalised_component × 127.
        for (let i = 0; i < W * H; i++) {
            const idx = i * 4;
            const mag = mags[i];
            if (mag > 0) {
                const n = mag / maxMag;
                d[idx] = Math.min(
                    255,
                    Math.max(0, (128 + dxArr[i] * n * 127 + 0.5) | 0),
                );
                d[idx + 1] = Math.min(
                    255,
                    Math.max(0, (128 + dyArr[i] * n * 127 + 0.5) | 0),
                );
            } else {
                d[idx] = 128;
                d[idx + 1] = 128;
            }
            d[idx + 2] = 128;
            d[idx + 3] = 255;
        }

        ctx.putImageData(imgData, 0, 0);
        return {
            dataUrl: canvas.toDataURL('image/png'),
            scale: maxMag,
            width: W,
            height: H,
        };
    },

    // ── Dock filter (pill) ──
    // Uses userSpaceOnUse pixel coordinates — updated to exact element size.
    _applyToDock(w, h) {
        const filter = document.getElementById('glass-distortion-dock');
        if (!filter) return;
        const feImg = filter.querySelector('feImage');
        const feDisp = filter.querySelector('feDisplacementMap');
        if (!feImg || !feDisp) return;

        const r = h / 2; // pill: border-radius = half height
        const { dataUrl, scale } = this.build(w, h, r);
        feImg.setAttribute('href', dataUrl);
        feImg.setAttribute('width', String(Math.ceil(w)));
        feImg.setAttribute('height', String(Math.ceil(h)));
        feDisp.setAttribute('scale', scale.toFixed(2));
    },

    // ── Panel filter (modals + menus) ──
    // Uses objectBoundingBox units so the image stretches to fill any element,
    // giving proportional edge-distortion regardless of panel dimensions.
    // The scale is expressed as a fraction of the reference image width.
    _applyToPanel() {
        const filter = document.getElementById('glass-distortion-panel');
        if (!filter) return;
        const feImg = filter.querySelector('feImage');
        const feDisp = filter.querySelector('feDisplacementMap');
        if (!feImg || !feDisp) return;

        const { dataUrl, scale, width } = this.build(580, 500, 20);
        feImg.setAttribute('href', dataUrl);
        // Scale as a bounding-box fraction: actual px = scale_bb × elementWidth
        feDisp.setAttribute('scale', (scale / width).toFixed(4));
    },

    // ── Init: dock ──
    initDock() {
        const dock = document.querySelector('.glass-dock');
        if (!dock) return;

        // Set neutral placeholder so the filter emits zero displacement immediately.
        const neutral = this._neutralDataUrl();
        const dockFilter = document.getElementById('glass-distortion-dock');
        if (dockFilter) {
            const fi = dockFilter.querySelector('feImage');
            const fd = dockFilter.querySelector('feDisplacementMap');
            if (fi) fi.setAttribute('href', neutral);
            if (fd) fd.setAttribute('scale', '0');
        }

        const refresh = (w, h) => {
            this._applyToDock(w, h);
        };

        const ro = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            if (width > 4 && height > 4) refresh(width, height);
        });
        ro.observe(dock);

        const rect = dock.getBoundingClientRect();
        if (rect.width > 4 && rect.height > 4) refresh(rect.width, rect.height);
    },

    // ── Init: panels ──
    initPanel() {
        // Set neutral placeholder first.
        const neutral = this._neutralDataUrl();
        const panelFilter = document.getElementById('glass-distortion-panel');
        if (panelFilter) {
            const fi = panelFilter.querySelector('feImage');
            const fd = panelFilter.querySelector('feDisplacementMap');
            if (fi) fi.setAttribute('href', neutral);
            if (fd) fd.setAttribute('scale', '0');
        }
        this._applyToPanel();
    },
};

GlassDistortion.initDock();
GlassDistortion.initPanel();
