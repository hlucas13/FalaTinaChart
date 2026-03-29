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
          descLight: "Verde \xB7 claro e escuro \xB7 padr\xE3o"
        },
        oceano: {
          name: "Oceano",
          dot: "#0ea5e9",
          descLight: "Azul \xB7 claro e escuro"
        },
        uva: {
          name: "Uva",
          dot: "#8b5cf6",
          descLight: "Roxo \xB7 claro e escuro"
        },
        posdosol: {
          name: "P\xF4r do Sol",
          dot: "#f97316",
          descLight: "Laranja \xB7 claro e escuro"
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
        { name: "Nay", color: "#f87171", data: [2392, 2883, 2101] },
        { name: "Thay", color: "#34d399", data: [283, 1666, 1853] },
        { name: "Cleber", color: "#fb923c", data: [1033, 1301, 1719] },
        { name: "Marc R.", color: "#fbbf24", data: [937, 1199, 974] },
        { name: "Lucas", color: "#84cc16", data: [900, 1171, 769] },
        { name: "Fernanda", color: "#10b981", data: [838, 972, 796] },
        { name: "Domi", color: "#14b8a6", data: [730, 827, 512] },
        { name: "Italo G.", color: "#22c55e", data: [884, 405, 711] },
        { name: "Gabriel B.", color: "#8b5cf6", data: [476, 440, 720] },
        { name: "Ivan F.", color: "#6366f1", data: [486, 657, null] },
        { name: "Lexi", color: "#2dd4bf", data: [null, 607, 289] },
        { name: "Paolo P.", color: "#f43f5e", data: [412, 614, 349] },
        { name: "Leticia M.", color: "#ef4444", data: [411, 542, 218] },
        { name: "C", color: "#60a5fa", data: [null, 230, 509] },
        { name: "Jaime T.", color: "#c084fc", data: [null, null, 405] },
        { name: "Ana C.", color: "#eab308", data: [407, null, 309] },
        { name: "Vitor V.", color: "#06b6d4", data: [591, null, null] },
        { name: "Leonardo", color: "#3b82f6", data: [493, 443, 380] },
        { name: "Beatriz A.", color: "#a855f7", data: [447, null, 170] },
        { name: "Kari", color: "#ec4899", data: [434, 305, 247] },
        { name: "Delboni", color: "#f97316", data: [409, 343, null] },
        { name: "Helena", color: "#a3e635", data: [372, null, null] },
        { name: "Claudio Z.", color: "#4ade80", data: [322, null, null] },
        { name: "Andr\xE9", color: "#22d3ee", data: [null, 259, null] },
        { name: "Camila", color: "#818cf8", data: [null, 213, 175] },
        { name: "Juan", color: "#a78bfa", data: [null, 194, null] },
        { name: "Jader T.", color: "#f472b6", data: [null, null, 166] }
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
      var SVG_MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      var SVG_SUN = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
      var settingsMenu = document.getElementById("settings-menu");
      var exportMenu = document.getElementById("export-menu");
      var themesMenu = document.getElementById("themes-menu");
      var hamburgerPanel = document.getElementById("hamburger-panel");
      var helpModal = document.getElementById("help-modal");
      var helpModalBackdrop = document.getElementById("help-modal-backdrop");
      var btnCloseHelp = document.getElementById("btn-close-help");
      var helpBody = document.getElementById("help-body");
      var btnSettings = document.getElementById("btn-settings");
      var btnExport = document.getElementById("btn-export");
      var btnThemes = document.getElementById("btn-themes");
      var btnHamburger = document.getElementById("btn-hamburger");
      var btnExportPng = document.getElementById("btn-export-png");
      var btnExportPdf = document.getElementById("btn-export-pdf");
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
      var allMenus = [settingsMenu, exportMenu, themesMenu, hamburgerPanel];
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
      btnHamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = !hamburgerPanel.classList.contains("visible");
        toggleMenu(hamburgerPanel, open);
        btnHamburger.setAttribute("aria-expanded", String(open));
      });
      hamburgerPanel.querySelectorAll("[data-delegates]").forEach((btn) => {
        btn.addEventListener("click", () => {
          closeAllMenus();
          document.getElementById(btn.dataset.delegates ?? "")?.click();
        });
      });
      document.addEventListener("click", (e) => {
        const target = e.target;
        const clickedInsideMenu = allMenus.some((m) => m.contains(target));
        const clickedDockBtn = !!target.closest(
          "#btn-settings, #btn-export, #btn-themes, #btn-hamburger"
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
      function applyAccentTheme(name, persist = true) {
        document.documentElement.dataset.accent = name;
        if (persist) localStorage.setItem("falatina-accent", name);
        document.querySelectorAll(".chart-theme-row").forEach((row) => {
          row.classList.toggle("active", row.dataset.accentTheme === name);
        });
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
        const color = dp.dataset.borderColor;
        chartTooltipTitle.innerHTML = `<span class="chart-tooltip-dot" style="background:${color}"></span>${dp.dataset.label}`;
        chartTooltipBody.textContent = `${dp.label}: ${dp.parsed.y.toLocaleString("pt-BR")} mensagens`;
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
      var hiddenDatasets = /* @__PURE__ */ new Set();
      var dimPlugin = {
        id: "dimPlugin",
        beforeDatasetDraw(ch, args) {
          if (highlightedIndex === null) return;
          if (args.index === highlightedIndex) return;
          ch.ctx.save();
          ch.ctx.globalAlpha = 0.07;
        },
        afterDatasetDraw(ch, args) {
          if (highlightedIndex === null) return;
          if (args.index === highlightedIndex) return;
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
        return PARTICIPANTS.map((p) => ({
          label: p.name,
          data: p.data,
          borderColor: p.color,
          backgroundColor: p.color + "22",
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 9,
          pointBackgroundColor: p.color,
          pointBorderColor: p.color,
          pointHoverBorderWidth: 2.5,
          pointHoverBorderColor: "#ffffff",
          tension: 0.35,
          spanGaps: true
        }));
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
            onHover: (_evt, elements) => {
              if (elements.length > 0) {
                const idx = elements[0].datasetIndex;
                if (highlightedIndex !== idx) {
                  highlightedIndex = idx;
                  chart?.update("none");
                  syncLegendHover(idx);
                }
              } else if (highlightedIndex !== null) {
                highlightedIndex = null;
                chart?.update("none");
                syncLegendHover(null);
              }
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
        opts.scales.x.grid.color = c.grid;
        opts.scales.x.ticks.color = c.text;
        opts.scales.y.grid.color = c.grid;
        opts.scales.y.ticks.color = c.text;
        chart.update("none");
      }
      function syncLegendHover(idx) {
        document.querySelectorAll(".legend-item").forEach((btn, i) => {
          if (idx === null) btn.classList.remove("legend-item--dimmed");
          else btn.classList.toggle("legend-item--dimmed", i !== idx);
        });
      }
      function buildLegend() {
        const legend = document.getElementById("legend");
        if (!legend || !chart) return;
        legend.innerHTML = "";
        chart.data.datasets.forEach((ds, i) => {
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
            syncLegendHover(null);
          });
          legend.appendChild(btn);
        });
      }
      function exportPng() {
        closeAllMenus();
        const canvas = document.getElementById("chart");
        const dark = document.documentElement.dataset.theme === "dark";
        const bg = dark ? "#0d1117" : "#f0f2f8";
        const fg = dark ? "#e6edf3" : "#111827";
        const datasets = chart?.data?.datasets ?? [];
        const DPR = window.devicePixelRatio || 1;
        const PAD = Math.round(20 * DPR);
        const COLS = 4;
        const ITEM_H = Math.round(28 * DPR);
        const DOT_R = Math.round(7 * DPR);
        const FONT_SZ = Math.round(13 * DPR);
        const legendRows = Math.ceil(datasets.length / COLS);
        const legendH = legendRows * ITEM_H + PAD * 2;
        const tmp = document.createElement("canvas");
        tmp.width = canvas.width;
        tmp.height = canvas.height + legendH;
        const ctx = tmp.getContext("2d");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, tmp.width, tmp.height);
        ctx.drawImage(canvas, 0, 0);
        ctx.font = `500 ${FONT_SZ}px Inter, -apple-system, sans-serif`;
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
          ctx.fillStyle = fg;
          ctx.fillText(ds.label, x + DOT_R * 2 + Math.round(6 * DPR), y);
        });
        const link = document.createElement("a");
        link.download = "fala-tina.png";
        link.href = tmp.toDataURL("image/png");
        link.click();
        showToast("Imagem PNG exportada!");
      }
      function exportPdf() {
        closeAllMenus();
        globalThis.print();
      }
      btnExportPng.addEventListener("click", exportPng);
      btnExportPdf.addEventListener("click", exportPdf);
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
        const iExport = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`;
        const iThemes = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>`;
        const iSettings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`;
        helpBody.innerHTML = [
          section(
            iChart,
            "Gr\xE1fico interativo",
            `<p class="help-p">Passe o mouse sobre qualquer linha para destac\xE1-la e ver o nome do participante e a quantidade de mensagens daquela semana. O foco sai quando o cursor \xE9 retirado.</p>`
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
            iExport,
            "Exportar",
            `<ul class="help-list">
                <li><strong>Salvar como PNG</strong> \u2014 imagem com gr\xE1fico e legenda de participantes abaixo, fundo do tema atual. Uma confirma\xE7\xE3o aparece brevemente ap\xF3s a exporta\xE7\xE3o.</li>
                <li><strong>Imprimir / PDF</strong> \u2014 caixa de di\xE1logo de impress\xE3o nativa do navegador com legenda inclusa abaixo do gr\xE1fico.</li>
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
             <p class="help-p" style="margin-top:4px">Cada tema altera o fundo do site, as cores de destaque e os tons das linhas do gr\xE1fico. Funciona nos modos claro e escuro.</p>`
          ),
          section(
            iSettings,
            "Configura\xE7\xF5es",
            `<ul class="help-list">
                <li><strong>Modo escuro</strong> \u2014 alterna entre tema claro e escuro; segue o sistema por padr\xE3o.</li>
                <li><strong>Vidro fosco</strong> \u2014 ativa o efeito de desfoque atr\xE1s dos pain\xE9is e da dock.</li>
                <li><strong>Mostrar legenda</strong> \u2014 exibe ou oculta a barra de participantes abaixo do gr\xE1fico.</li>
                <li><strong>Prefer\xEAncias salvas</strong> \u2014 todas as configura\xE7\xF5es s\xE3o guardadas no navegador e restauradas automaticamente na pr\xF3xima visita.</li>
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
      applyLegendVisibility(
        savedLegend === null ? true : savedLegend !== "0",
        false,
        savedLegend !== null
      );
    }
  });
  require_main();
})();
