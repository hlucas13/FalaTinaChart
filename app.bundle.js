(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/chart-themes.ts
  var ACCENT_THEMES, THEME_NAMES;
  var init_chart_themes = __esm({
    "src/chart-themes.ts"() {
      ACCENT_THEMES = {
        whatsapp: {
          name: "WhatsApp",
          dot: "#25d366",
          descLight: "Verde \xB7 claro e escuro \xB7 padr\xE3o",
          // Neutral background → full hue spread, warm tones first
          palette: [
            "#f87171",
            "#fb923c",
            "#fbbf24",
            "#a3e635",
            "#4ade80",
            "#34d399",
            "#2dd4bf",
            "#22d3ee",
            "#60a5fa",
            "#818cf8",
            "#a78bfa",
            "#c084fc",
            "#e879f9",
            "#f472b6",
            "#fb7185",
            "#ef4444",
            "#f97316",
            "#eab308",
            "#84cc16",
            "#22c55e",
            "#10b981",
            "#14b8a6",
            "#06b6d4",
            "#3b82f6",
            "#6366f1",
            "#8b5cf6",
            "#a855f7",
            "#d946ef",
            "#ec4899",
            "#f43f5e",
            "#38bdf8",
            "#facc15"
          ]
        },
        oceano: {
          name: "Oceano",
          dot: "#0ea5e9",
          descLight: "Azul \xB7 claro e escuro",
          // Blue background → warm + purple tones first, blues pushed to end
          palette: [
            "#f87171",
            "#fb923c",
            "#fbbf24",
            "#a3e635",
            "#a78bfa",
            "#c084fc",
            "#e879f9",
            "#f472b6",
            "#fb7185",
            "#ef4444",
            "#f97316",
            "#eab308",
            "#84cc16",
            "#22c55e",
            "#34d399",
            "#10b981",
            "#2dd4bf",
            "#14b8a6",
            "#d946ef",
            "#ec4899",
            "#f43f5e",
            "#4ade80",
            "#a855f7",
            "#8b5cf6",
            "#6366f1",
            "#818cf8",
            "#22d3ee",
            "#06b6d4",
            "#38bdf8",
            "#60a5fa",
            "#3b82f6",
            "#facc15"
          ]
        },
        uva: {
          name: "Uva",
          dot: "#8b5cf6",
          descLight: "Roxo \xB7 claro e escuro",
          // Purple background → warm + teal + blue tones first, purples pushed to end
          palette: [
            "#f87171",
            "#fb923c",
            "#fbbf24",
            "#4ade80",
            "#34d399",
            "#2dd4bf",
            "#22d3ee",
            "#38bdf8",
            "#60a5fa",
            "#f472b6",
            "#fb7185",
            "#ef4444",
            "#f97316",
            "#eab308",
            "#a3e635",
            "#84cc16",
            "#22c55e",
            "#10b981",
            "#14b8a6",
            "#06b6d4",
            "#3b82f6",
            "#6366f1",
            "#ec4899",
            "#f43f5e",
            "#facc15",
            "#818cf8",
            "#e879f9",
            "#d946ef",
            "#a855f7",
            "#c084fc",
            "#a78bfa",
            "#8b5cf6"
          ]
        },
        posdosol: {
          name: "P\xF4r do Sol",
          dot: "#f97316",
          descLight: "Laranja \xB7 claro e escuro",
          // Warm background → blues + greens + purples first, oranges/yellows pushed to end
          palette: [
            "#60a5fa",
            "#38bdf8",
            "#22d3ee",
            "#2dd4bf",
            "#4ade80",
            "#34d399",
            "#818cf8",
            "#a78bfa",
            "#c084fc",
            "#a855f7",
            "#8b5cf6",
            "#6366f1",
            "#e879f9",
            "#d946ef",
            "#f472b6",
            "#ec4899",
            "#fb7185",
            "#f43f5e",
            "#f87171",
            "#ef4444",
            "#a3e635",
            "#84cc16",
            "#22c55e",
            "#10b981",
            "#14b8a6",
            "#06b6d4",
            "#3b82f6",
            "#facc15",
            "#eab308",
            "#fbbf24",
            "#fb923c",
            "#f97316"
          ]
        }
      };
      THEME_NAMES = Object.keys(ACCENT_THEMES);
    }
  });

  // src/data.ts
  var WEEKS, PARTICIPANTS;
  var init_data = __esm({
    "src/data.ts"() {
      WEEKS = ["W10", "W11", "W12"];
      PARTICIPANTS = [
        { name: "Nay", data: [2392, 2883, 2101], hours: [74, 82, 75] },
        { name: "Thay", data: [283, 1666, 1853], hours: [null, 62, 72] },
        { name: "Cleber", data: [1033, 1301, 1719], hours: [72, 68, 78] },
        { name: "Marc R.", data: [937, 1199, 974], hours: [55, 54, 51] },
        { name: "Lucas", data: [900, 1171, 769], hours: [73, 79, 63] },
        { name: "Fernanda", data: [838, 972, 796], hours: [84, 86, 77] },
        { name: "Domi", data: [730, 827, 512], hours: [50, 70, 58] },
        { name: "Italo G.", data: [884, 405, 711], hours: [67, 45, 52] },
        { name: "Gabriel B.", data: [476, 440, 720], hours: [60, 51, 65] },
        { name: "Ivan F.", data: [486, 657, null], hours: [52, 44, null] },
        { name: "Lexi", data: [null, 607, 289], hours: [null, 63, 41] },
        { name: "Paolo P.", data: [412, 614, 349], hours: [61, 82, 65] },
        { name: "Leticia M.", data: [411, 542, 218], hours: [66, 52, null] },
        { name: "C", data: [null, 230, 509], hours: [null, null, 74] },
        { name: "Jaime T.", data: [null, null, 405], hours: [null, null, 41] },
        { name: "Ana C.", data: [407, null, 309], hours: [52, 36, 41] },
        { name: "Vitor V.", data: [591, null, null], hours: [45, null, null] },
        { name: "L E O N V R D X", data: [493, 443, 380], hours: [76, 64, 58] },
        { name: "Beatriz A.", data: [447, null, 170], hours: [39, null, null] },
        { name: "Kari", data: [434, 305, 247], hours: [null, 39, null] },
        { name: "Delboni", data: [409, 343, null], hours: [46, 56, null] },
        { name: "Helena", data: [372, null, null], hours: [56, 42, 36] },
        { name: "Claudio Z.", data: [322, null, null], hours: [null, null, null] },
        { name: "Andr\xE9", data: [null, 259, null], hours: [44, 41, 46] },
        { name: "Camila", data: [null, 213, 175], hours: [null, 38, 33] },
        { name: "Juan", data: [null, 194, null], hours: [null, null, null] },
        { name: "Jader T.", data: [null, null, 166], hours: [44, null, 49] },
        { name: "BoTina", data: [null, null, null], hours: [67, null, null] },
        { name: "Lucas N.", data: [null, null, null], hours: [null, null, 47] }
      ];
    }
  });

  // src/glass-distortion.ts
  var require_glass_distortion = __commonJS({
    "src/glass-distortion.ts"() {
      var GlassDistortion = {
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
          const outer = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0) - r;
          return -outer;
        },
        // ── Generate a 1×1 neutral displacement map data URL ──
        // Used as the placeholder until the first real map is computed,
        // so that SVG filters emit zero displacement instead of rendering
        // artefacts from an empty href.
        _neutralDataUrl() {
          const c = document.createElement("canvas");
          c.width = 2;
          c.height = 2;
          const ctx = c.getContext("2d");
          const id = ctx.createImageData(2, 2);
          for (let i = 0; i < 16; i += 4) {
            id.data[i] = id.data[i + 1] = id.data[i + 2] = 128;
            id.data[i + 3] = 255;
          }
          ctx.putImageData(id, 0, 0);
          return c.toDataURL("image/png");
        },
        // ── Build displacement map ──
        // Returns { dataUrl: string, scale: number (pixels), width, height }
        build(width, height, borderRadius) {
          const W = Math.max(Math.ceil(width), 2);
          const H = Math.max(Math.ceil(height), 2);
          const R = Math.min(borderRadius, Math.min(W, H) / 2);
          const cx = W / 2;
          const cy = H / 2;
          const bezelW = Math.min(
            Math.min(W, H) * this.BEZEL_FRACTION * 0.5,
            R * 0.85
          );
          const canvas = document.createElement("canvas");
          canvas.width = W;
          canvas.height = H;
          const ctx = canvas.getContext("2d", { willReadFrequently: false });
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
              if (dist <= 0 || dist >= bezelW) continue;
              const t = dist / bezelW;
              const slope = this.GLASS_THICKNESS * 0.5 / Math.sqrt(t + 1e-3);
              const sinT1 = slope / Math.sqrt(1 + slope * slope);
              const cosT1 = Math.sqrt(Math.max(0, 1 - sinT1 * sinT1));
              const sinT2 = sinT1 / this.IOR;
              const cosT2 = Math.sqrt(Math.max(0, 1 - sinT2 * sinT2));
              const tanT1 = sinT1 / (cosT1 + 1e-9);
              const tanT2 = sinT2 / (cosT2 + 1e-9);
              const mag = Math.abs(tanT1 - tanT2) * bezelW;
              mags[i] = mag;
              if (mag > maxMag) maxMag = mag;
              const nx = cx - px;
              const ny = cy - py;
              const len = Math.sqrt(nx * nx + ny * ny) + 1e-9;
              dxArr[i] = nx / len;
              dyArr[i] = ny / len;
            }
          }
          if (maxMag < 1e-3) maxMag = 1;
          for (let i = 0; i < W * H; i++) {
            const idx = i * 4;
            const mag = mags[i];
            if (mag > 0) {
              const n = mag / maxMag;
              d[idx] = Math.min(
                255,
                Math.max(0, 128 + dxArr[i] * n * 127 + 0.5 | 0)
              );
              d[idx + 1] = Math.min(
                255,
                Math.max(0, 128 + dyArr[i] * n * 127 + 0.5 | 0)
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
            dataUrl: canvas.toDataURL("image/png"),
            scale: maxMag,
            width: W,
            height: H
          };
        },
        // ── Dock filter (pill) ──
        // Uses userSpaceOnUse pixel coordinates — updated to exact element size.
        _applyToDock(w, h) {
          const filter = document.getElementById("glass-distortion-dock");
          if (!filter) return;
          const feImg = filter.querySelector("feImage");
          const feDisp = filter.querySelector("feDisplacementMap");
          if (!feImg || !feDisp) return;
          const r = h / 2;
          const { dataUrl, scale } = this.build(w, h, r);
          feImg.setAttribute("href", dataUrl);
          feImg.setAttribute("width", String(Math.ceil(w)));
          feImg.setAttribute("height", String(Math.ceil(h)));
          feDisp.setAttribute("scale", scale.toFixed(2));
        },
        // ── Panel filter (modals + menus) ──
        // Uses objectBoundingBox units so the image stretches to fill any element,
        // giving proportional edge-distortion regardless of panel dimensions.
        // The scale is expressed as a fraction of the reference image width.
        _applyToPanel() {
          const filter = document.getElementById("glass-distortion-panel");
          if (!filter) return;
          const feImg = filter.querySelector("feImage");
          const feDisp = filter.querySelector("feDisplacementMap");
          if (!feImg || !feDisp) return;
          const { dataUrl, scale, width } = this.build(580, 500, 20);
          feImg.setAttribute("href", dataUrl);
          feDisp.setAttribute("scale", (scale / width).toFixed(4));
        },
        // ── Init: dock ──
        initDock() {
          const dock = document.querySelector(".glass-dock");
          if (!dock) return;
          const neutral = this._neutralDataUrl();
          const dockFilter = document.getElementById("glass-distortion-dock");
          if (dockFilter) {
            const fi = dockFilter.querySelector("feImage");
            const fd = dockFilter.querySelector("feDisplacementMap");
            if (fi) fi.setAttribute("href", neutral);
            if (fd) fd.setAttribute("scale", "0");
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
          const neutral = this._neutralDataUrl();
          const panelFilter = document.getElementById("glass-distortion-panel");
          if (panelFilter) {
            const fi = panelFilter.querySelector("feImage");
            const fd = panelFilter.querySelector("feDisplacementMap");
            if (fi) fi.setAttribute("href", neutral);
            if (fd) fd.setAttribute("scale", "0");
          }
          this._applyToPanel();
        }
      };
      GlassDistortion.initDock();
      GlassDistortion.initPanel();
    }
  });

  // src/main.ts
  var require_main = __commonJS({
    "src/main.ts"() {
      init_chart_themes();
      init_data();
      var import_glass_distortion = __toESM(require_glass_distortion());
      var currentMetric = "messages";
      var currentView = "messages";
      function getMetricValues(p) {
        return currentMetric === "messages" ? p.data : p.hours;
      }
      var SVG_MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      var SVG_SUN = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
      var settingsMenu = document.getElementById("settings-menu");
      var exportMenu = document.getElementById("export-menu");
      var themesMenu = document.getElementById("themes-menu");
      var helpModal = document.getElementById("help-modal");
      var helpModalBackdrop = document.getElementById("help-modal-backdrop");
      var btnCloseHelp = document.getElementById("btn-close-help");
      var helpBody = document.getElementById("help-body");
      var btnSettings = document.getElementById("btn-settings");
      var btnExport = document.getElementById("btn-export");
      var btnThemes = document.getElementById("btn-themes");
      var btnExportWithTables = document.getElementById("btn-export-with-tables");
      var btnExportWithoutTables = document.getElementById(
        "btn-export-without-tables"
      );
      var btnHelp = document.getElementById("btn-help");
      var toggleTheme = document.getElementById(
        "toggle-theme"
      );
      var toggleGlass = document.getElementById(
        "toggle-glass"
      );
      var toggleLegend = document.getElementById(
        "toggle-legend"
      );
      var iconTheme = document.getElementById("icon-theme");
      var toast = document.getElementById("toast");
      var chartTooltipEl = document.getElementById("chart-tooltip");
      var chartTooltipTitle = chartTooltipEl.querySelector(
        ".chart-tooltip-title"
      );
      var chartTooltipBody = chartTooltipEl.querySelector(
        ".chart-tooltip-body"
      );
      function syncLiquidToggle(el, state) {
        el.setAttribute("aria-checked", String(state));
        el.style.setProperty("--complete", state ? "100" : "0");
      }
      function animateLiquidToggle(el, toState) {
        el.dataset.active = "true";
        gsap.to(el, {
          "--complete": toState ? 100 : 0,
          duration: 0.14,
          delay: 0.18,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.delayedCall(0.05, () => {
              delete el.dataset.active;
              el.setAttribute("aria-checked", String(toState));
            });
          }
        });
      }
      var allMenus = [settingsMenu, exportMenu, themesMenu];
      function closeAllMenus() {
        for (const m of allMenus) {
          m.classList.remove("visible");
          m.setAttribute("inert", "");
        }
      }
      function toggleMenu(menu, open) {
        for (const m of allMenus) {
          if (m !== menu) {
            m.classList.remove("visible");
            m.setAttribute("inert", "");
          }
        }
        menu.classList.toggle("visible", open);
        if (open) menu.removeAttribute("inert");
        else menu.setAttribute("inert", "");
      }
      btnSettings.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(settingsMenu, !settingsMenu.classList.contains("visible"));
      });
      btnExport.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(exportMenu, !exportMenu.classList.contains("visible"));
      });
      btnThemes.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(themesMenu, !themesMenu.classList.contains("visible"));
      });
      document.addEventListener("click", (e) => {
        const target = e.target;
        const clickedInsideMenu = allMenus.some((m) => m.contains(target));
        const clickedDockBtn = !!target.closest(
          "#btn-settings, #btn-export, #btn-themes"
        );
        if (!clickedInsideMenu && !clickedDockBtn) closeAllMenus();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          if (helpModal.classList.contains("visible")) closeHelpModal();
          else closeAllMenus();
        }
      });
      function applyTheme(dark, animate = false, persist = true) {
        document.documentElement.dataset.theme = dark ? "dark" : "light";
        iconTheme.innerHTML = dark ? SVG_SUN : SVG_MOON;
        if (animate) animateLiquidToggle(toggleTheme, dark);
        else syncLiquidToggle(toggleTheme, dark);
        if (persist)
          localStorage.setItem("falatina-theme", dark ? "dark" : "light");
        updateChartTheme(dark);
      }
      toggleTheme.addEventListener("click", () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        applyTheme(!isDark, true);
      });
      function applyGlassStyle(frosted, animate = false, persist = true) {
        document.documentElement.dataset.glass = frosted ? "frosted" : "clear";
        if (animate) animateLiquidToggle(toggleGlass, frosted);
        else syncLiquidToggle(toggleGlass, frosted);
        if (persist)
          localStorage.setItem("falatina-glass", frosted ? "frosted" : "clear");
      }
      toggleGlass.addEventListener("click", () => {
        applyGlassStyle(document.documentElement.dataset.glass !== "frosted", true);
      });
      var currentAccent = "whatsapp";
      function applyAccentTheme(name, persist = true) {
        currentAccent = name;
        document.documentElement.dataset.accent = name;
        if (persist) localStorage.setItem("falatina-accent", name);
        document.querySelectorAll(".chart-theme-row").forEach((row) => {
          row.classList.toggle("active", row.dataset.accentTheme === name);
        });
        if (chart) {
          const palette = ACCENT_THEMES[name].palette;
          if (currentView === "messages" || currentView === "hours") {
            chart.data.datasets.forEach((ds, i) => {
              const color = palette[i % palette.length];
              ds.borderColor = color;
              ds.backgroundColor = color + "22";
              ds.pointBackgroundColor = color;
              ds.pointBorderColor = color;
              ds.pointHoverBackgroundColor = color;
            });
          } else if (currentView === "scatter") {
            chart.data.datasets.forEach((ds, i) => {
              const color = palette[i % palette.length];
              ds.backgroundColor = color;
              ds.borderColor = color;
            });
          }
          if (currentView === "proportion") {
            chart.destroy();
            chart = buildProportionChart();
          } else {
            chart.update();
          }
          buildLegend();
          updateRankingColors();
        }
        if (currentView === "heatmap") {
          buildHeatmap();
          updateRankingColors();
        }
      }
      function buildThemeRows() {
        const container = document.getElementById("themes-menu-rows");
        container.innerHTML = "";
        THEME_NAMES.forEach((key) => {
          const t = ACCENT_THEMES[key];
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "chart-theme-row";
          btn.dataset.accentTheme = key;
          btn.innerHTML = `
            <span class="pdf-theme-dot" style="background:${t.dot}"></span>
            <span class="platform-btn-text">
                <span class="platform-btn-name">${t.name}</span>
                <span class="platform-btn-desc">${t.descLight}</span>
            </span>
            <svg class="pdf-theme-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        `;
          btn.addEventListener("click", () => {
            applyAccentTheme(key);
            closeAllMenus();
          });
          container.appendChild(btn);
        });
      }
      var legendVisible = true;
      function applyLegendVisibility(visible, animate = false, persist = true) {
        legendVisible = visible;
        const legendArea = document.querySelector(".legend-area");
        if (legendArea) legendArea.style.display = visible ? "" : "none";
        const chartWrapper = document.querySelector(".chart-wrapper");
        if (chartWrapper) chartWrapper.style.flex = visible ? "" : "1";
        if (animate) animateLiquidToggle(toggleLegend, visible);
        else syncLiquidToggle(toggleLegend, visible);
        if (persist) localStorage.setItem("falatina-legend", visible ? "1" : "0");
      }
      toggleLegend.addEventListener("click", () => {
        applyLegendVisibility(!legendVisible, true);
      });
      function externalTooltipHandler({ chart: chart2, tooltip }) {
        if (tooltip.opacity === 0 || !tooltip.dataPoints?.length) {
          chartTooltipEl.classList.remove("visible");
          return;
        }
        const dp = tooltip.dataPoints[0];
        let color;
        let titleText;
        let bodyText;
        if (currentView === "scatter") {
          const ds = dp.dataset;
          color = ds.borderColor;
          titleText = ds.label;
          const x2 = dp.parsed.x;
          const y2 = dp.parsed.y;
          const mph = ds._mph ?? 0;
          const wks = ds._weeks;
          bodyText = `${y2.toLocaleString("pt-BR")} msgs \xB7 ${x2.toLocaleString("pt-BR")}h \xB7 ${mph > 0 ? mph.toFixed(1) : "\u2014"} msg/h (${wks} sem)`;
        } else if (currentView === "proportion") {
          const ds = dp.dataset;
          const dIdx = dp.dataIndex;
          const activeDs = chart2.data.datasets[0];
          const activeColor = Array.isArray(activeDs.borderColor) ? activeDs.borderColor[dIdx] : activeDs.borderColor;
          color = activeColor;
          titleText = dp.label;
          const hours = dp.parsed.x;
          const MAX_HOURS = 168;
          if (dp.datasetIndex === 0) {
            bodyText = `Ativas: ${hours.toFixed(1)}h (~${(hours / MAX_HOURS * 100).toFixed(1)}%)`;
          } else {
            const activeHours = chart2.data.datasets[0].data[dIdx];
            bodyText = `Ativas: ${activeHours.toFixed(1)}h \xB7 Inativas: ${hours.toFixed(1)}h`;
          }
        } else {
          color = dp.dataset.borderColor;
          titleText = dp.dataset.label;
          const pIdx = dp.datasetIndex;
          const wIdx = dp.dataIndex;
          const unit = currentMetric === "messages" ? "mensagens" : "horas";
          bodyText = `${dp.label}: ${dp.parsed.y.toLocaleString("pt-BR")} ${unit}`;
          const msgs = PARTICIPANTS[pIdx].data[wIdx];
          const hrs = PARTICIPANTS[pIdx].hours[wIdx];
          if (msgs !== null && hrs !== null && hrs > 0) {
            bodyText += ` \xB7 ${(msgs / hrs).toFixed(1)} msg/h`;
          }
        }
        chartTooltipTitle.innerHTML = `<span class="chart-tooltip-dot" style="background:${color}"></span>${titleText}`;
        chartTooltipBody.textContent = bodyText;
        const rect = chart2.canvas.getBoundingClientRect();
        let x = rect.left + tooltip.caretX + 16;
        let y = rect.top + tooltip.caretY - 16;
        const TW = chartTooltipEl.offsetWidth || 190;
        const TH = chartTooltipEl.offsetHeight || 72;
        if (x + TW > window.innerWidth - 12)
          x = rect.left + tooltip.caretX - TW - 16;
        if (y + TH > window.innerHeight - 12) y = window.innerHeight - TH - 12;
        if (y < 12) y = 12;
        chartTooltipEl.style.left = `${x}px`;
        chartTooltipEl.style.top = `${y}px`;
        chartTooltipEl.classList.add("visible");
      }
      var chart = null;
      var highlightedIndex = null;
      var pinFocusIndex = null;
      var hiddenDatasets = /* @__PURE__ */ new Set();
      var dimPlugin = {
        id: "dimPlugin",
        beforeDatasetDraw(ch, args) {
          if (pinFocusIndex === null) return;
          if (args.index === pinFocusIndex) return;
          ch.ctx.save();
          ch.ctx.globalAlpha = 0.12;
        },
        afterDatasetDraw(ch, args) {
          if (pinFocusIndex === null) return;
          if (args.index === pinFocusIndex) return;
          ch.ctx.restore();
        }
      };
      function getChartColors(dark) {
        return {
          grid: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)",
          text: dark ? "#8b949e" : "#6b7280"
        };
      }
      function buildDatasets() {
        const palette = ACCENT_THEMES[currentAccent].palette;
        return PARTICIPANTS.map((p, i) => {
          const color = palette[i % palette.length];
          return {
            label: p.name,
            data: getMetricValues(p),
            borderColor: color,
            backgroundColor: color + "22",
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 9,
            pointBackgroundColor: color,
            pointBorderColor: color,
            pointHoverBorderWidth: 2.5,
            pointHoverBorderColor: "#ffffff",
            tension: 0.35,
            spanGaps: false
          };
        });
      }
      function buildChart() {
        const canvas = document.getElementById("chart");
        const dark = document.documentElement.dataset.theme === "dark";
        const c = getChartColors(dark);
        return new Chart(canvas, {
          type: "line",
          plugins: [dimPlugin],
          data: {
            labels: WEEKS,
            datasets: buildDatasets()
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 400 },
            interaction: {
              mode: "nearest",
              intersect: false,
              axis: "xy"
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: false,
                external: externalTooltipHandler
              }
            },
            onHover: (evt, elements) => {
              if (evt.native?.target) {
                evt.native.target.style.cursor = elements.length > 0 ? "pointer" : "default";
              }
              if (elements.length > 0) {
                const idx = elements[0].datasetIndex;
                if (highlightedIndex !== idx) {
                  highlightedIndex = idx;
                  syncLegendHover(idx);
                }
              } else if (highlightedIndex !== null) {
                highlightedIndex = null;
                syncLegendHover(pinFocusIndex);
              }
            },
            onClick: (evt, _elements, ch) => {
              if (!evt.native) return;
              const hits = ch.getElementsAtEventForMode(
                evt.native,
                "nearest",
                { intersect: true },
                false
              );
              if (hits.length > 0) {
                const idx = hits[0].datasetIndex;
                pinFocusIndex = pinFocusIndex === idx ? null : idx;
              } else {
                pinFocusIndex = null;
              }
              ch.update("none");
              syncLegendHover(pinFocusIndex);
            },
            scales: {
              x: {
                grid: { color: c.grid },
                ticks: {
                  color: c.text,
                  font: {
                    family: "Inter, sans-serif",
                    size: 13,
                    weight: "600"
                  }
                },
                border: { color: "transparent" }
              },
              y: {
                grid: { color: c.grid },
                ticks: {
                  color: c.text,
                  font: { family: "Inter, sans-serif", size: 12 },
                  maxTicksLimit: 8
                },
                border: { color: "transparent" },
                beginAtZero: true
              }
            }
          }
        });
      }
      function updateChartTheme(dark) {
        if (!chart) return;
        const c = getChartColors(dark);
        const opts = chart.options;
        if (opts.scales?.x) {
          opts.scales.x.grid.color = c.grid;
          opts.scales.x.ticks.color = c.text;
          if (opts.scales.x.title) opts.scales.x.title.color = c.text;
        }
        if (opts.scales?.y) {
          opts.scales.y.grid.color = c.grid;
          opts.scales.y.ticks.color = c.text;
          if (opts.scales.y.title) opts.scales.y.title.color = c.text;
        }
        chart.update("none");
        if (currentView === "heatmap") buildHeatmap();
      }
      function syncLegendHover(idx) {
        document.querySelectorAll(".legend-item").forEach((btn, i) => {
          if (idx === null) btn.classList.remove("legend-item--dimmed");
          else btn.classList.toggle("legend-item--dimmed", i !== idx);
        });
      }
      function buildLegend() {
        const legend = document.getElementById("legend");
        if (!legend) return;
        legend.innerHTML = "";
        if (!chart) return;
        chart.data.datasets.forEach((ds, i) => {
          if (currentView === "proportion" && i > 0) return;
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "legend-item";
          btn.title = `Clique para mostrar/ocultar ${ds.label}`;
          const dot = document.createElement("span");
          dot.className = "legend-dot";
          dot.style.background = ds.borderColor;
          const label = document.createElement("span");
          label.className = "legend-label";
          label.textContent = ds.label;
          btn.appendChild(dot);
          btn.appendChild(label);
          btn.addEventListener("click", () => {
            const isHidden = hiddenDatasets.has(i);
            if (isHidden) {
              hiddenDatasets.delete(i);
              chart.setDatasetVisibility(i, true);
            } else {
              hiddenDatasets.add(i);
              chart.setDatasetVisibility(i, false);
            }
            chart.update();
            btn.classList.toggle("legend-item--hidden", !isHidden);
          });
          btn.addEventListener("mouseenter", () => {
            if (hiddenDatasets.has(i)) return;
            highlightedIndex = i;
            chart.update("none");
            syncLegendHover(i);
          });
          btn.addEventListener("mouseleave", () => {
            highlightedIndex = null;
            chart.update("none");
            syncLegendHover(pinFocusIndex);
          });
          legend.appendChild(btn);
        });
      }
      var carouselWeekIndex = 0;
      function getParticipantColor(participantIndex) {
        const palette = ACCENT_THEMES[currentAccent].palette;
        return palette[participantIndex % palette.length];
      }
      function buildRankingRow(pos, name, count, participantIndex, avg, posDiff, countDiff, isNew, msgPerH) {
        const li = document.createElement("li");
        li.className = "ranking-row";
        const posEl = document.createElement("span");
        posEl.className = "ranking-pos";
        if (pos === 1) posEl.classList.add("gold");
        else if (pos === 2) posEl.classList.add("silver");
        else if (pos === 3) posEl.classList.add("bronze");
        posEl.textContent = String(pos);
        const dot = document.createElement("span");
        dot.className = "ranking-dot";
        dot.style.background = getParticipantColor(participantIndex);
        const nameEl = document.createElement("span");
        nameEl.className = "ranking-name";
        const nameTxt = document.createElement("span");
        nameTxt.className = "ranking-name-text";
        nameTxt.textContent = name;
        nameEl.appendChild(nameTxt);
        if (isNew) {
          const newEl = document.createElement("span");
          newEl.className = "ranking-new";
          newEl.textContent = "NEW";
          nameEl.appendChild(newEl);
        } else if (posDiff !== void 0 && posDiff !== 0) {
          const trendEl = document.createElement("span");
          trendEl.className = `ranking-trend ${posDiff > 0 ? "up" : "down"}`;
          trendEl.textContent = posDiff > 0 ? "\u25B2" : "\u25BC";
          nameEl.appendChild(trendEl);
        }
        const statsEl = document.createElement("span");
        statsEl.className = "ranking-stats";
        const countEl = document.createElement("span");
        countEl.className = "ranking-count";
        countEl.textContent = count.toLocaleString("pt-BR");
        statsEl.appendChild(countEl);
        if (avg !== void 0) {
          const avgEl = document.createElement("span");
          avgEl.className = "ranking-avg";
          const avgUnit = currentMetric === "messages" ? "/sem" : "h/sem";
          avgEl.textContent = `~${Math.round(avg).toLocaleString("pt-BR")}${avgUnit}`;
          statsEl.appendChild(avgEl);
        }
        if (countDiff !== void 0) {
          const diffEl = document.createElement("span");
          if (countDiff > 0) {
            diffEl.className = "ranking-diff positive";
            diffEl.textContent = `+${countDiff.toLocaleString("pt-BR")}`;
          } else if (countDiff < 0) {
            diffEl.className = "ranking-diff negative";
            diffEl.textContent = countDiff.toLocaleString("pt-BR");
          } else {
            diffEl.className = "ranking-diff neutral";
            diffEl.textContent = "=";
          }
          statsEl.appendChild(diffEl);
        }
        if (msgPerH !== void 0 && msgPerH !== null) {
          const mphEl = document.createElement("span");
          mphEl.className = "ranking-msgh";
          mphEl.textContent = `${msgPerH.toFixed(1)} msg/h`;
          statsEl.appendChild(mphEl);
        }
        li.appendChild(posEl);
        li.appendChild(dot);
        li.appendChild(nameEl);
        li.appendChild(statsEl);
        return li;
      }
      function buildAlltimeRanking() {
        const el = document.getElementById("ranking-alltime");
        el.innerHTML = "";
        const totals = PARTICIPANTS.map((p, i) => {
          const values = getMetricValues(p);
          const weeks = values.filter((v) => v !== null).length;
          const total = values.reduce((s, v) => s + (v ?? 0), 0);
          const totalMsgs = p.data.reduce((s, v) => s + (v ?? 0), 0);
          const totalHours = p.hours.reduce((s, v) => s + (v ?? 0), 0);
          const msgPerH = totalHours > 0 && totalMsgs > 0 ? totalMsgs / totalHours : null;
          return {
            name: p.name,
            idx: i,
            total,
            avg: weeks > 0 ? total / weeks : 0,
            msgPerH
          };
        });
        totals.sort((a, b) => b.total - a.total);
        totals.slice(0, 10).forEach((p, rank) => {
          el.appendChild(
            buildRankingRow(
              rank + 1,
              p.name,
              p.total,
              p.idx,
              p.avg,
              void 0,
              void 0,
              void 0,
              p.msgPerH
            )
          );
        });
      }
      function buildWeeklyRanking() {
        const el = document.getElementById("ranking-weekly");
        const labelEl = document.getElementById("carousel-label");
        const prevBtn = document.getElementById(
          "carousel-prev"
        );
        const nextBtn = document.getElementById(
          "carousel-next"
        );
        el.innerHTML = "";
        labelEl.textContent = WEEKS[carouselWeekIndex];
        prevBtn.disabled = carouselWeekIndex === 0;
        nextBtn.disabled = carouselWeekIndex === WEEKS.length - 1;
        const weekData = PARTICIPANTS.map((p, i) => ({
          name: p.name,
          idx: i,
          count: getMetricValues(p)[carouselWeekIndex] ?? 0
        })).filter((p) => p.count > 0);
        weekData.sort((a, b) => b.count - a.count);
        let prevRankMap = null;
        let prevCountMap = null;
        if (carouselWeekIndex > 0) {
          const prevData = PARTICIPANTS.map((p, i) => ({
            name: p.name,
            idx: i,
            count: getMetricValues(p)[carouselWeekIndex - 1] ?? 0
          })).filter((p) => p.count > 0);
          prevData.sort((a, b) => b.count - a.count);
          prevRankMap = new Map(
            prevData.slice(0, 20).map((p, rank) => [p.name, rank + 1])
          );
          prevCountMap = new Map(prevData.map((p) => [p.name, p.count]));
        }
        weekData.slice(0, 20).forEach((p, rank) => {
          const currentRank = rank + 1;
          let posDiff;
          let countDiff;
          let isNew;
          if (prevRankMap !== null && prevCountMap !== null) {
            const prevRank = prevRankMap.get(p.name);
            const prevCount = prevCountMap.get(p.name) ?? 0;
            if (prevRank === void 0) {
              isNew = true;
            } else {
              posDiff = prevRank - currentRank;
            }
            countDiff = p.count - prevCount;
          }
          const msgs = PARTICIPANTS[p.idx].data[carouselWeekIndex];
          const hrs = PARTICIPANTS[p.idx].hours[carouselWeekIndex];
          const msgPerH = msgs !== null && hrs !== null && hrs > 0 ? msgs / hrs : null;
          el.appendChild(
            buildRankingRow(
              currentRank,
              p.name,
              p.count,
              p.idx,
              void 0,
              posDiff,
              countDiff,
              isNew,
              msgPerH
            )
          );
        });
      }
      function updateRankingColors() {
        buildAlltimeRanking();
        buildWeeklyRanking();
      }
      document.getElementById("carousel-prev").addEventListener("click", () => {
        if (carouselWeekIndex > 0) {
          carouselWeekIndex--;
          buildWeeklyRanking();
        }
      });
      document.getElementById("carousel-next").addEventListener("click", () => {
        if (carouselWeekIndex < WEEKS.length - 1) {
          carouselWeekIndex++;
          buildWeeklyRanking();
        }
      });
      function switchView(view) {
        if (currentView === view) return;
        currentView = view;
        document.body.classList.toggle("view-proportion", view === "proportion");
        if (view === "messages") currentMetric = "messages";
        else if (view === "hours" || view === "proportion") currentMetric = "hours";
        if (view === "scatter" || view === "heatmap") currentMetric = "messages";
        document.querySelectorAll(".metric-tab").forEach((tab) => {
          const isActive = tab.dataset.metric === view;
          tab.classList.toggle("active", isActive);
          tab.setAttribute("aria-selected", String(isActive));
        });
        const brandSub = document.querySelector(".brand-sub");
        const subtitles = {
          messages: "Mensagens por semana",
          hours: "Horas ativas por semana",
          scatter: "Efici\xEAncia \xB7 mensagens vs horas",
          heatmap: "Intensidade \xB7 msg/h por semana",
          proportion: "Propor\xE7\xE3o \xB7 horas ativas de 168h"
        };
        if (brandSub) brandSub.textContent = subtitles[view];
        if (chart) {
          chart.destroy();
          chart = null;
        }
        const canvas = document.getElementById("chart");
        const heatmapEl = document.getElementById("heatmap-container");
        const legendArea = document.querySelector(".legend-area");
        if (view === "heatmap") {
          canvas.style.display = "none";
          heatmapEl.style.display = "";
          if (legendArea) legendArea.style.display = "none";
          buildHeatmap();
        } else {
          canvas.style.display = "";
          heatmapEl.style.display = "none";
          heatmapEl.innerHTML = "";
          if (legendArea) legendArea.style.display = legendVisible ? "" : "none";
          if (view === "scatter") {
            chart = buildScatterChart();
          } else if (view === "proportion") {
            chart = buildProportionChart();
          } else {
            chart = buildChart();
          }
          buildLegend();
        }
        pinFocusIndex = null;
        highlightedIndex = null;
        buildAlltimeRanking();
        buildWeeklyRanking();
      }
      document.querySelectorAll(".metric-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          switchView(tab.dataset.metric);
        });
      });
      function buildScatterChart() {
        const canvas = document.getElementById("chart");
        const dark = document.documentElement.dataset.theme === "dark";
        const c = getChartColors(dark);
        const palette = ACCENT_THEMES[currentAccent].palette;
        const datasets = PARTICIPANTS.map((p, i) => {
          const color = palette[i % palette.length];
          let totalMsgs = 0;
          let totalHours = 0;
          let weeks = 0;
          for (let w = 0; w < WEEKS.length; w++) {
            const hrs = p.hours[w];
            const msgs = p.data[w];
            if (hrs !== null && msgs !== null) {
              totalMsgs += msgs;
              totalHours += hrs;
              weeks++;
            }
          }
          if (weeks === 0) return null;
          return {
            label: p.name,
            data: [{ x: totalHours, y: totalMsgs }],
            backgroundColor: color,
            borderColor: color,
            pointRadius: 7,
            pointHoverRadius: 11,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2.5,
            pointHoverBorderColor: "#ffffff",
            // store extra info for tooltip
            _mph: totalHours > 0 ? totalMsgs / totalHours : 0,
            _weeks: weeks
          };
        }).filter((d) => d !== null);
        return new Chart(canvas, {
          type: "scatter",
          plugins: [dimPlugin],
          data: { datasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 400 },
            interaction: { mode: "nearest", intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: false,
                external: externalTooltipHandler
              }
            },
            onHover: (evt, elements) => {
              if (evt.native?.target) {
                evt.native.target.style.cursor = elements.length > 0 ? "pointer" : "default";
              }
              if (elements.length > 0) {
                const idx = elements[0].datasetIndex;
                if (highlightedIndex !== idx) {
                  highlightedIndex = idx;
                  syncLegendHover(idx);
                }
              } else if (highlightedIndex !== null) {
                highlightedIndex = null;
                syncLegendHover(pinFocusIndex);
              }
            },
            onClick: (evt, _elements, ch) => {
              if (!evt.native) return;
              const hits = ch.getElementsAtEventForMode(
                evt.native,
                "nearest",
                { intersect: true },
                false
              );
              if (hits.length > 0) {
                const idx = hits[0].datasetIndex;
                pinFocusIndex = pinFocusIndex === idx ? null : idx;
              } else {
                pinFocusIndex = null;
              }
              ch.update("none");
              syncLegendHover(pinFocusIndex);
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Total de horas ativas",
                  color: c.text,
                  font: {
                    family: "Inter, sans-serif",
                    size: 12,
                    weight: "500"
                  }
                },
                grid: { color: c.grid },
                ticks: {
                  color: c.text,
                  font: { family: "Inter, sans-serif", size: 12 }
                },
                border: { color: "transparent" },
                beginAtZero: true
              },
              y: {
                title: {
                  display: true,
                  text: "Total de mensagens",
                  color: c.text,
                  font: {
                    family: "Inter, sans-serif",
                    size: 12,
                    weight: "500"
                  }
                },
                grid: { color: c.grid },
                ticks: {
                  color: c.text,
                  font: { family: "Inter, sans-serif", size: 12 },
                  maxTicksLimit: 8
                },
                border: { color: "transparent" },
                beginAtZero: true
              }
            }
          }
        });
      }
      function buildHeatmap() {
        const container = document.getElementById("heatmap-container");
        container.innerHTML = "";
        const rows = PARTICIPANTS.map((p, idx) => {
          const cells = WEEKS.map((_, w) => {
            const msgs = p.data[w];
            const hrs = p.hours[w];
            if (msgs === null || hrs === null || hrs === 0) return null;
            return msgs / hrs;
          });
          const validCells = cells.filter((c) => c !== null);
          const avg = validCells.length > 0 ? validCells.reduce((a, b) => a + b, 0) / validCells.length : 0;
          return { name: p.name, idx, cells, avg };
        }).filter((r) => r.cells.some((c) => c !== null)).sort((a, b) => b.avg - a.avg);
        const allValues = rows.flatMap(
          (r) => r.cells.filter((c) => c !== null)
        );
        const minVal = Math.min(...allValues);
        const maxVal = Math.max(...allValues);
        function heatColor(val) {
          const t = maxVal > minVal ? (val - minVal) / (maxVal - minVal) : 0.5;
          const hue = (1 - t) * 240;
          const sat = 70 + t * 20;
          const light = document.documentElement.dataset.theme === "dark" ? 25 + t * 20 : 85 - t * 40;
          return `hsl(${hue}, ${sat}%, ${light}%)`;
        }
        function textColor(val) {
          const t = maxVal > minVal ? (val - minVal) / (maxVal - minVal) : 0.5;
          const dark = document.documentElement.dataset.theme === "dark";
          if (dark) return t > 0.6 ? "#000" : "#fff";
          return t > 0.5 ? "#fff" : "#111";
        }
        const grid = document.createElement("div");
        grid.className = "heatmap-grid";
        grid.style.setProperty("--week-cols", String(WEEKS.length));
        const glassHeader = document.createElement("div");
        glassHeader.className = "heatmap-glass-header";
        const thName = document.createElement("div");
        thName.className = "heatmap-th heatmap-th-name";
        thName.textContent = "Participante";
        glassHeader.appendChild(thName);
        WEEKS.forEach((w) => {
          const th = document.createElement("div");
          th.className = "heatmap-th";
          th.textContent = w;
          glassHeader.appendChild(th);
        });
        const thAvg = document.createElement("div");
        thAvg.className = "heatmap-th";
        thAvg.textContent = "M\xE9dia";
        glassHeader.appendChild(thAvg);
        grid.appendChild(glassHeader);
        rows.forEach((r) => {
          const nameDiv = document.createElement("div");
          nameDiv.className = "heatmap-name";
          nameDiv.textContent = r.name;
          const dot = document.createElement("span");
          dot.className = "ranking-dot";
          dot.style.background = getParticipantColor(r.idx);
          dot.style.display = "inline-block";
          dot.style.marginRight = "6px";
          dot.style.verticalAlign = "middle";
          nameDiv.prepend(dot);
          grid.appendChild(nameDiv);
          r.cells.forEach((val) => {
            const cell = document.createElement("div");
            cell.className = "heatmap-cell";
            if (val === null) {
              cell.classList.add("no-data");
              cell.textContent = "\u2014";
            } else {
              cell.style.background = heatColor(val);
              cell.style.color = textColor(val);
              cell.textContent = val.toFixed(1);
              cell.title = `${val.toFixed(1)} msg/h`;
            }
            grid.appendChild(cell);
          });
          const avgCell = document.createElement("div");
          avgCell.className = "heatmap-cell";
          if (r.avg > 0) {
            avgCell.style.background = heatColor(r.avg);
            avgCell.style.color = textColor(r.avg);
            avgCell.textContent = r.avg.toFixed(1);
            avgCell.style.fontWeight = "700";
          } else {
            avgCell.classList.add("no-data");
            avgCell.textContent = "\u2014";
          }
          grid.appendChild(avgCell);
        });
        container.appendChild(grid);
      }
      function buildProportionChart() {
        const canvas = document.getElementById("chart");
        const dark = document.documentElement.dataset.theme === "dark";
        const c = getChartColors(dark);
        const palette = ACCENT_THEMES[currentAccent].palette;
        const data = PARTICIPANTS.map((p, idx) => {
          const validHours = p.hours.filter((h) => h !== null);
          const avg = validHours.length > 0 ? validHours.reduce((a, b) => a + b, 0) / validHours.length : 0;
          return { name: p.name, idx, avg };
        }).filter((d) => d.avg > 0).sort((a, b) => b.avg - a.avg);
        const MAX_HOURS = 168;
        const portrait = window.innerHeight > window.innerWidth;
        const barThickness = portrait ? 12 : void 0;
        const activeDs = {
          label: "Horas ativas",
          data: data.map((d) => d.avg),
          backgroundColor: data.map(
            (d) => palette[d.idx % palette.length] + "cc"
          ),
          borderColor: data.map((d) => palette[d.idx % palette.length]),
          borderWidth: 1.5,
          borderRadius: 4,
          borderSkipped: false,
          ...barThickness !== void 0 && { barThickness }
        };
        const inactiveDs = {
          label: "Horas inativas",
          data: data.map((d) => MAX_HOURS - d.avg),
          backgroundColor: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
          borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
          ...barThickness !== void 0 && { barThickness }
        };
        return new Chart(canvas, {
          type: "bar",
          data: {
            labels: data.map((d) => d.name),
            datasets: [activeDs, inactiveDs]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            animation: { duration: 400 },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: false,
                external: externalTooltipHandler
              }
            },
            scales: {
              x: {
                stacked: true,
                max: MAX_HOURS,
                title: {
                  display: true,
                  text: "Horas na semana (m\xE9dia)",
                  color: c.text,
                  font: {
                    family: "Inter, sans-serif",
                    size: 12,
                    weight: "500"
                  }
                },
                grid: { color: c.grid },
                ticks: {
                  color: c.text,
                  font: { family: "Inter, sans-serif", size: 11 }
                },
                border: { color: "transparent" }
              },
              y: {
                stacked: true,
                grid: { display: false },
                ticks: {
                  color: c.text,
                  font: {
                    family: "Inter, sans-serif",
                    size: portrait ? 10 : 11
                  },
                  autoSkip: false
                },
                border: { color: "transparent" }
              }
            }
          }
        });
      }
      btnExportWithTables.addEventListener("click", () => {
        closeAllMenus();
        exportPng(true);
      });
      btnExportWithoutTables.addEventListener("click", () => {
        closeAllMenus();
        exportPng(false);
      });
      function buildExportCanvas(withTables) {
        const canvas = document.getElementById("chart");
        const dark = document.documentElement.dataset.theme === "dark";
        const bg = dark ? "#0d1117" : "#f0f2f8";
        const fg = dark ? "#e6edf3" : "#111827";
        const fgMuted = dark ? "#8b949e" : "#6b7280";
        const borderLine = dark ? "#30363d" : "#e5e7eb";
        const positiveColor = "#22c55e";
        const negativeColor = "#ef4444";
        const datasets = chart?.data?.datasets ?? [];
        const DPR = window.devicePixelRatio || 1;
        const PAD = Math.round(20 * DPR);
        const COLS = 4;
        const ITEM_H = Math.round(28 * DPR);
        const DOT_R = Math.round(7 * DPR);
        const FONT_SZ = Math.round(13 * DPR);
        const ROW_H = Math.round(24 * DPR);
        const legendRows = Math.ceil(datasets.length / COLS);
        const legendH = legendRows * ITEM_H + PAD * 2;
        const SEP_H = Math.round(28 * DPR);
        const LABEL_H = Math.round(28 * DPR);
        const CHEADER_H = Math.round(20 * DPR);
        const TOP10 = 10;
        const TOP20 = 20;
        const rankingBodyH = TOP20 * ROW_H;
        const rankingH = withTables ? SEP_H + LABEL_H + CHEADER_H + rankingBodyH + Math.round(16 * DPR) : 0;
        const tmp = document.createElement("canvas");
        tmp.width = canvas.width;
        tmp.height = canvas.height + legendH + rankingH;
        const ctx = tmp.getContext("2d");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, tmp.width, tmp.height);
        ctx.drawImage(canvas, 0, 0);
        ctx.textBaseline = "middle";
        const colW = (canvas.width - PAD * 2) / COLS;
        datasets.forEach((ds, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const x = PAD + col * colW;
          const y = canvas.height + PAD + row * ITEM_H + ITEM_H / 2;
          ctx.beginPath();
          ctx.arc(x + DOT_R, y, DOT_R, 0, Math.PI * 2);
          ctx.fillStyle = ds.borderColor;
          ctx.fill();
          ctx.font = `500 ${FONT_SZ}px Inter, -apple-system, sans-serif`;
          ctx.fillStyle = fg;
          ctx.fillText(ds.label, x + DOT_R * 2 + Math.round(6 * DPR), y);
        });
        if (!withTables) return tmp;
        const HALF_W = Math.floor((tmp.width - PAD * 3) / 2);
        const L_START = PAD;
        const L_END = PAD + HALF_W;
        const R_START = PAD * 2 + HALF_W;
        const R_END = tmp.width - PAD;
        let curY = canvas.height + legendH;
        ctx.strokeStyle = borderLine;
        ctx.lineWidth = Math.round(1 * DPR);
        ctx.beginPath();
        ctx.moveTo(PAD, curY + Math.round(12 * DPR));
        ctx.lineTo(tmp.width - PAD, curY + Math.round(12 * DPR));
        ctx.stroke();
        curY += SEP_H;
        const vsepX = PAD + HALF_W + Math.round(PAD / 2);
        ctx.beginPath();
        ctx.moveTo(vsepX, curY);
        ctx.lineTo(vsepX, curY + LABEL_H + CHEADER_H + rankingBodyH);
        ctx.stroke();
        const DOT_OFF = Math.round(6 * DPR);
        const RANK_OFF = Math.round(20 * DPR);
        const NAME_OFF = Math.round(46 * DPR);
        const totals = PARTICIPANTS.map((p, idx) => {
          const values = getMetricValues(p);
          const weeks = values.filter((v) => v !== null).length;
          const total = values.reduce((s, v) => s + (v ?? 0), 0);
          return { name: p.name, idx, total, avg: weeks > 0 ? total / weeks : 0 };
        }).sort((a, b) => b.total - a.total);
        let leftY = curY;
        ctx.fillStyle = fg;
        ctx.font = `600 ${Math.round(13 * DPR)}px Inter, -apple-system, sans-serif`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.fillText("Top 10 Geral", L_START, leftY + LABEL_H / 2);
        leftY += LABEL_H;
        ctx.fillStyle = fgMuted;
        ctx.font = `500 ${Math.round(11 * DPR)}px Inter, -apple-system, sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText("Nome", L_START + NAME_OFF, leftY);
        ctx.textAlign = "right";
        ctx.fillText("Total", L_END - Math.round(58 * DPR), leftY);
        ctx.fillText("~sem", L_END, leftY);
        leftY += CHEADER_H;
        totals.slice(0, TOP10).forEach((p, rank) => {
          if (rank % 2 === 0) {
            ctx.fillStyle = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
            ctx.fillRect(L_START, leftY - ROW_H * 0.45, HALF_W, ROW_H);
          }
          ctx.beginPath();
          ctx.arc(L_START + DOT_OFF, leftY, Math.round(5 * DPR), 0, Math.PI * 2);
          ctx.fillStyle = datasets[p.idx]?.borderColor ?? "#888";
          ctx.fill();
          ctx.font = `500 ${Math.round(12 * DPR)}px Inter, -apple-system, sans-serif`;
          ctx.textBaseline = "middle";
          ctx.textAlign = "left";
          ctx.fillStyle = fgMuted;
          ctx.fillText(String(rank + 1), L_START + RANK_OFF, leftY);
          ctx.fillStyle = fg;
          ctx.fillText(p.name, L_START + NAME_OFF, leftY);
          ctx.textAlign = "right";
          ctx.fillStyle = fg;
          ctx.fillText(
            p.total.toLocaleString("pt-BR"),
            L_END - Math.round(58 * DPR),
            leftY
          );
          ctx.fillStyle = fgMuted;
          ctx.fillText(p.avg.toFixed(0), L_END, leftY);
          leftY += ROW_H;
        });
        const weekIdx = carouselWeekIndex;
        const weekLabel = WEEKS[weekIdx];
        const weekData = PARTICIPANTS.map((p, idx) => ({
          name: p.name,
          idx,
          count: getMetricValues(p)[weekIdx] ?? 0
        })).filter((p) => p.count > 0).sort((a, b) => b.count - a.count);
        let exportPrevCountMap = null;
        if (weekIdx > 0) {
          const prevData = PARTICIPANTS.map((p) => ({
            name: p.name,
            count: getMetricValues(p)[weekIdx - 1] ?? 0
          })).filter((p) => p.count > 0);
          exportPrevCountMap = new Map(prevData.map((p) => [p.name, p.count]));
        }
        let rightY = curY;
        ctx.fillStyle = fg;
        ctx.font = `600 ${Math.round(13 * DPR)}px Inter, -apple-system, sans-serif`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.fillText(`Top 20 \xB7 ${weekLabel}`, R_START, rightY + LABEL_H / 2);
        rightY += LABEL_H;
        const colLabel = currentMetric === "messages" ? "Msgs" : "Horas";
        ctx.fillStyle = fgMuted;
        ctx.font = `500 ${Math.round(11 * DPR)}px Inter, -apple-system, sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText("Nome", R_START + NAME_OFF, rightY);
        ctx.textAlign = "right";
        ctx.fillText(colLabel, R_END - Math.round(50 * DPR), rightY);
        if (exportPrevCountMap) ctx.fillText("+/\u2212", R_END, rightY);
        rightY += CHEADER_H;
        weekData.slice(0, TOP20).forEach((p, rank) => {
          if (rank % 2 === 0) {
            ctx.fillStyle = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
            ctx.fillRect(R_START, rightY - ROW_H * 0.45, HALF_W, ROW_H);
          }
          ctx.beginPath();
          ctx.arc(R_START + DOT_OFF, rightY, Math.round(5 * DPR), 0, Math.PI * 2);
          ctx.fillStyle = datasets[p.idx]?.borderColor ?? "#888";
          ctx.fill();
          ctx.font = `500 ${Math.round(12 * DPR)}px Inter, -apple-system, sans-serif`;
          ctx.textBaseline = "middle";
          ctx.textAlign = "left";
          ctx.fillStyle = fgMuted;
          ctx.fillText(String(rank + 1), R_START + RANK_OFF, rightY);
          ctx.fillStyle = fg;
          ctx.fillText(p.name, R_START + NAME_OFF, rightY);
          ctx.textAlign = "right";
          ctx.fillStyle = fg;
          ctx.fillText(
            p.count.toLocaleString("pt-BR"),
            R_END - Math.round(50 * DPR),
            rightY
          );
          if (exportPrevCountMap) {
            const prev = exportPrevCountMap.get(p.name) ?? 0;
            const diff = p.count - prev;
            ctx.fillStyle = diff > 0 ? positiveColor : diff < 0 ? negativeColor : fgMuted;
            ctx.fillText(
              diff > 0 ? `+${diff}` : String(diff || "="),
              R_END,
              rightY
            );
          }
          rightY += ROW_H;
        });
        return tmp;
      }
      function exportPng(withTables = false) {
        const tmp = buildExportCanvas(withTables);
        const link = document.createElement("a");
        link.download = "fala-tina.png";
        link.href = tmp.toDataURL("image/png");
        link.click();
        showToast(
          withTables ? "PNG com tabelas exportado!" : "Imagem PNG exportada!"
        );
      }
      function buildHelpBody() {
        const section = (icon, title, body) => `<div class="help-section">
            <div class="help-section-hd">
                <span class="help-section-icon">${icon}</span>
                <h3 class="help-section-title">${title}</h3>
            </div>
            <div class="help-section-body">${body}</div>
        </div>`;
        const iChart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`;
        const iLegend = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3" cy="6" r="1.2" fill="currentColor" stroke="none"/><circle cx="3" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="3" cy="18" r="1.2" fill="currentColor" stroke="none"/></svg>`;
        const iRanking = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`;
        const iExport = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`;
        const iThemes = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>`;
        const iSettings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`;
        helpBody.innerHTML = [
          section(
            iChart,
            "Gr\xE1fico interativo",
            `<p class="help-p">Passe o mouse sobre o gr\xE1fico para ver o tooltip do participante mais pr\xF3ximo do cursor \u2014 nome e quantidade de mensagens naquela semana. Todas as linhas permanecem vis\xEDveis durante o hover.</p>
             <p class="help-p" style="margin-top:4px"><strong>Clique num ponto</strong> para fixar o foco naquela linha: as demais ficam semi-transparentes. Clique novamente no mesmo ponto ou numa \xE1rea vazia do gr\xE1fico para remover o foco e restaurar todas as linhas.</p>`
          ),
          section(
            iChart,
            "Abas de visualiza\xE7\xE3o",
            `<ul class="help-list">
                <li><strong>Mensagens</strong> \u2014 gr\xE1fico de linhas com o total de mensagens por semana (vis\xE3o padr\xE3o).</li>
                <li><strong>Horas Ativas</strong> \u2014 gr\xE1fico de linhas com as horas ativas por semana. Uma hora \xE9 contada se o participante enviou pelo menos uma mensagem entre XX:00 e XX:59.</li>
                <li><strong>Efici\xEAncia</strong> \u2014 scatter plot de total de mensagens (eixo Y) vs total de horas ativas (eixo X), agregado em todas as semanas por participante. Pontos mais altos e \xE0 esquerda indicam maior efici\xEAncia (mais msg/h). O tooltip mostra nome, totais e msg/h m\xE9dio.</li>
                <li><strong>Intensidade</strong> \u2014 heatmap de msg/h por participante e semana. Cores quentes (vermelho) indicam alta taxa, frias (azul) indicam baixa. A coluna "M\xE9dia" mostra a taxa m\xE9dia geral.</li>
                <li><strong>Propor\xE7\xE3o</strong> \u2014 barras horizontais empilhadas mostrando horas ativas (colorido) vs inativas (cinza) de um total de 168h semanais. Exibe a m\xE9dia de todas as semanas de cada participante.</li>
             </ul>
             <p class="help-p" style="margin-top:4px">Todas as abas incluem <strong>msg/h</strong> no tooltip e nas tabelas de ranking quando ambos os dados existem.</p>`
          ),
          section(
            iLegend,
            "Legenda de participantes",
            `<ul class="help-list">
                <li><strong>Clique</strong> em uma p\xEDlula para ocultar ou mostrar a linha correspondente.</li>
                <li><strong>Hover</strong> sobre a p\xEDlula para destacar apenas aquela linha.</li>
                <li>Visibilidade da legenda pode ser controlada em <em>Configura\xE7\xF5es \u2192 Mostrar legenda</em>.</li>
             </ul>`
          ),
          section(
            iRanking,
            "Ranking de participantes",
            `<ul class="help-list">
                <li><strong>Top 10 Geral</strong> \u2014 os 10 participantes com mais mensagens (ou horas, conforme a aba) no per\xEDodo; exibe o total, a m\xE9dia semanal e a taxa msg/h.</li>
                <li><strong>Top 20 por Semana</strong> \u2014 carrossel naveg\xE1vel pelas setas \u2039 \u203A; exibe os 20 mais ativos em cada semana. Inclui msg/h quando dispon\xEDvel.</li>
                <li>A partir da segunda semana, cada linha mostra a varia\xE7\xE3o em rela\xE7\xE3o \xE0 semana anterior (<em>+XX</em> verde ou <em>\u2212XX</em> vermelho) e uma seta <strong>\u25B2</strong> verde ou <strong>\u25BC</strong> vermelha indicando subida ou descida de posi\xE7\xE3o. Participantes novos no top 20 exibem um badge <strong>NEW</strong> laranja.</li>
                <li>As cores dos pontos do ranking acompanham o tema de cor ativo.</li>
                <li>Na vers\xE3o landscape, o bot\xE3o de painel no cabe\xE7alho oculta ou exibe o painel lateral; o estado \xE9 guardado no navegador.</li>
             </ul>`
          ),
          section(
            iExport,
            "Exportar",
            `<ul class="help-list">
                <li>Clique em <strong>Exportar</strong> na dock para abrir o menu de exporta\xE7\xE3o.</li>
                <li><strong>Com tabelas</strong> \u2014 salva PNG com o gr\xE1fico, legenda e as duas tabelas de ranking lado a lado.</li>
                <li><strong>Sem tabelas</strong> \u2014 salva PNG com apenas o gr\xE1fico e a legenda de participantes.</li>
                <li>A exporta\xE7\xE3o usa o fundo e as cores do tema atual. Uma confirma\xE7\xE3o aparece brevemente ap\xF3s guardar.</li>
             </ul>`
          ),
          section(
            iThemes,
            "Temas de cor",
            `<ul class="help-list">
                <li><strong>WhatsApp</strong> \u2014 verde \xB7 padr\xE3o</li>
                <li><strong>Oceano</strong> \u2014 azul \xB7 fundo azulado</li>
                <li><strong>Uva</strong> \u2014 roxo \xB7 fundo lil\xE1s</li>
                <li><strong>P\xF4r do Sol</strong> \u2014 laranja \xB7 fundo quente</li>
             </ul>
             <p class="help-p" style="margin-top:4px">Cada tema altera o fundo do site, as cores de destaque e a <strong>paleta completa de cores das linhas</strong> do gr\xE1fico \u2014 cada paleta tem 32 cores distintas, ordenadas para contrastar bem com o fundo do tema. Funciona nos modos claro e escuro.</p>`
          ),
          section(
            iSettings,
            "Configura\xE7\xF5es",
            `<ul class="help-list">
                <li><strong>Modo escuro</strong> \u2014 alterna entre tema claro e escuro; segue o sistema por padr\xE3o.</li>
                <li><strong>Vidro fosco</strong> \u2014 ativa o efeito de desfoque atr\xE1s dos pain\xE9is e da dock.</li>
                <li><strong>Mostrar legenda</strong> \u2014 exibe ou oculta a barra de participantes abaixo do gr\xE1fico.</li>
                <li><strong>Prefer\xEAncias salvas</strong> \u2014 modo escuro, vidro fosco, paleta de cor, visibilidade da legenda e estado do painel de ranking s\xE3o guardados no navegador e restaurados automaticamente na pr\xF3xima visita.</li>
             </ul>
             <p class="help-p" style="margin-top:4px">Pressione <strong>ESC</strong> para fechar qualquer menu ou este painel de ajuda.</p>`
          )
        ].join("");
      }
      function openHelpModal() {
        buildHelpBody();
        helpModal.classList.add("visible");
        helpModal.removeAttribute("inert");
        btnCloseHelp.focus();
      }
      function closeHelpModal() {
        helpModal.classList.remove("visible");
        helpModal.setAttribute("inert", "");
      }
      btnHelp.addEventListener("click", () => {
        closeAllMenus();
        openHelpModal();
      });
      helpModalBackdrop.addEventListener("click", closeHelpModal);
      btnCloseHelp.addEventListener("click", closeHelpModal);
      var SIDEBAR_KEY = "falatina-sidebar";
      var btnToggleSidebar = document.getElementById(
        "btn-toggle-sidebar"
      );
      var rankingCol = document.querySelector(".ranking-col");
      function applySidebarState(hidden, persist) {
        if (!rankingCol || !btnToggleSidebar) return;
        rankingCol.classList.toggle("hidden", hidden);
        const label = hidden ? "Mostrar tabelas" : "Ocultar tabelas";
        btnToggleSidebar.setAttribute("aria-pressed", String(!hidden));
        btnToggleSidebar.setAttribute("aria-label", label);
        btnToggleSidebar.title = label;
        if (persist)
          localStorage.setItem(SIDEBAR_KEY, hidden ? "hidden" : "visible");
      }
      applySidebarState(localStorage.getItem(SIDEBAR_KEY) === "hidden", false);
      if (btnToggleSidebar && rankingCol) {
        btnToggleSidebar.addEventListener("click", () => {
          const isHidden = rankingCol.classList.contains("hidden");
          applySidebarState(!isHidden, true);
        });
      }
      var toastTimer;
      function showToast(msg) {
        toast.textContent = msg;
        toast.classList.remove("hidden");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.add("hidden"), 2400);
      }
      var printStyle = document.createElement("style");
      printStyle.textContent = `
@media print {
  body { background: #fff !important; }
  header, .glass-dock, .platform-menu, .help-modal, .toast { display: none !important; }
  main { display: block !important; }
  .chart-wrapper { flex: unset; padding: 20px !important; height: 70vh !important; }
  .legend-area { display: block !important; padding: 12px 20px !important; }
  canvas { max-width: 100% !important; max-height: 68vh !important; }
}`;
      document.head.appendChild(printStyle);
      var savedTheme = localStorage.getItem("falatina-theme");
      var savedGlass = localStorage.getItem("falatina-glass");
      var savedAccent = localStorage.getItem("falatina-accent");
      var savedLegend = localStorage.getItem("falatina-legend");
      var prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(
        savedTheme === null ? prefersDark.matches : savedTheme === "dark",
        false,
        savedTheme !== null
      );
      prefersDark.addEventListener("change", (e) => {
        if (localStorage.getItem("falatina-theme") === null)
          applyTheme(e.matches, false, false);
      });
      applyGlassStyle(savedGlass === "frosted", false, savedGlass !== null);
      buildThemeRows();
      applyAccentTheme(
        savedAccent ?? "whatsapp",
        savedAccent !== null
      );
      chart = buildChart();
      buildLegend();
      buildAlltimeRanking();
      buildWeeklyRanking();
      applyLegendVisibility(
        savedLegend === null ? true : savedLegend !== "0",
        false,
        savedLegend !== null
      );
    }
  });
  require_main();
})();
