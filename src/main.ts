// ── FalaTina — main application module ──
import {
    ACCENT_THEMES,
    THEME_NAMES,
    type AccentThemeName,
} from './chart-themes';
import { PARTICIPANTS, WEEKS } from './data';
import './glass-distortion';

// ── SVG icon paths ──
const SVG_MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
const SVG_SUN =
    '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';

// ── DOM element references ──
const settingsMenu = document.getElementById('settings-menu')!;
const exportMenu = document.getElementById('export-menu')!;
const themesMenu = document.getElementById('themes-menu')!;
const hamburgerPanel = document.getElementById('hamburger-panel')!;
const helpModal = document.getElementById('help-modal')!;
const helpModalBackdrop = document.getElementById('help-modal-backdrop')!;
const btnCloseHelp = document.getElementById('btn-close-help')!;
const helpBody = document.getElementById('help-body')!;

const btnSettings = document.getElementById('btn-settings')!;
const btnExport = document.getElementById('btn-export')!;
const btnThemes = document.getElementById('btn-themes')!;
const btnHamburger = document.getElementById('btn-hamburger')!;
const btnExportPng = document.getElementById('btn-export-png')!;
const btnExportPdf = document.getElementById('btn-export-pdf')!;
const btnHelp = document.getElementById('btn-help')!;

const toggleTheme = document.getElementById(
    'toggle-theme',
) as HTMLButtonElement;
const toggleGlass = document.getElementById(
    'toggle-glass',
) as HTMLButtonElement;
const toggleLegend = document.getElementById(
    'toggle-legend',
) as HTMLButtonElement;
const iconTheme = document.getElementById('icon-theme')!;
const toast = document.getElementById('toast')!;
const chartTooltipEl = document.getElementById('chart-tooltip')!;
const chartTooltipTitle = chartTooltipEl.querySelector<HTMLElement>(
    '.chart-tooltip-title',
)!;
const chartTooltipBody = chartTooltipEl.querySelector<HTMLElement>(
    '.chart-tooltip-body',
)!;

// ── Liquid Toggle helpers (GSAP-animated) ──
function syncLiquidToggle(el: HTMLElement, state: boolean) {
    el.setAttribute('aria-checked', String(state));
    el.style.setProperty('--complete', state ? '100' : '0');
}

function animateLiquidToggle(el: HTMLElement, toState: boolean) {
    (el as HTMLElement & { dataset: DOMStringMap }).dataset.active = 'true';
    gsap.to(el, {
        '--complete': toState ? 100 : 0,
        duration: 0.14,
        delay: 0.18,
        ease: 'power1.inOut',
        onComplete: () => {
            gsap.delayedCall(0.05, () => {
                delete (el as HTMLElement & { dataset: DOMStringMap }).dataset
                    .active;
                el.setAttribute('aria-checked', String(toState));
            });
        },
    });
}

// ── Menu management ──
const allMenus = [settingsMenu, exportMenu, themesMenu, hamburgerPanel];

function closeAllMenus() {
    for (const m of allMenus) {
        m.classList.remove('visible');
        m.setAttribute('inert', '');
    }
}

function toggleMenu(menu: HTMLElement, open: boolean) {
    for (const m of allMenus) {
        if (m !== menu) {
            m.classList.remove('visible');
            m.setAttribute('inert', '');
        }
    }
    menu.classList.toggle('visible', open);
    if (open) menu.removeAttribute('inert');
    else menu.setAttribute('inert', '');
}

btnSettings.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(settingsMenu, !settingsMenu.classList.contains('visible'));
});

btnExport.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(exportMenu, !exportMenu.classList.contains('visible'));
});

btnThemes.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(themesMenu, !themesMenu.classList.contains('visible'));
});

btnHamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !hamburgerPanel.classList.contains('visible');
    toggleMenu(hamburgerPanel, open);
    btnHamburger.setAttribute('aria-expanded', String(open));
});

// Hamburger panel delegates clicks to target buttons
hamburgerPanel
    .querySelectorAll<HTMLElement>('[data-delegates]')
    .forEach((btn) => {
        btn.addEventListener('click', () => {
            closeAllMenus();
            document.getElementById(btn.dataset.delegates ?? '')?.click();
        });
    });

document.addEventListener('click', (e) => {
    const target = e.target as Node;
    const clickedInsideMenu = allMenus.some((m) => m.contains(target));
    const clickedDockBtn = !!(target as HTMLElement).closest(
        '#btn-settings, #btn-export, #btn-themes, #btn-hamburger',
    );
    if (!clickedInsideMenu && !clickedDockBtn) closeAllMenus();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (helpModal.classList.contains('visible')) closeHelpModal();
        else closeAllMenus();
    }
});

// ── Dark mode ──
function applyTheme(dark: boolean, animate = false, persist = true) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    iconTheme.innerHTML = dark ? SVG_SUN : SVG_MOON;
    if (animate) animateLiquidToggle(toggleTheme, dark);
    else syncLiquidToggle(toggleTheme, dark);
    if (persist)
        localStorage.setItem('falatina-theme', dark ? 'dark' : 'light');
    updateChartTheme(dark);
}

toggleTheme.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    applyTheme(!isDark, true);
});

// ── Frosted glass style ──
function applyGlassStyle(frosted: boolean, animate = false, persist = true) {
    document.documentElement.dataset.glass = frosted ? 'frosted' : 'clear';
    if (animate) animateLiquidToggle(toggleGlass, frosted);
    else syncLiquidToggle(toggleGlass, frosted);
    if (persist)
        localStorage.setItem('falatina-glass', frosted ? 'frosted' : 'clear');
}

toggleGlass.addEventListener('click', () => {
    applyGlassStyle(document.documentElement.dataset.glass !== 'frosted', true);
});

// ── Accent colour / chart theme ──
function applyAccentTheme(name: AccentThemeName, persist = true) {
    document.documentElement.dataset.accent = name;
    if (persist) localStorage.setItem('falatina-accent', name);
    document
        .querySelectorAll<HTMLElement>('.chart-theme-row')
        .forEach((row) => {
            row.classList.toggle('active', row.dataset.accentTheme === name);
        });
}

function buildThemeRows() {
    const container = document.getElementById('themes-menu-rows')!;
    container.innerHTML = '';
    THEME_NAMES.forEach((key) => {
        const t = ACCENT_THEMES[key];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chart-theme-row';
        btn.dataset.accentTheme = key;
        btn.innerHTML = `
            <span class="pdf-theme-dot" style="background:${t.dot}"></span>
            <span class="platform-btn-text">
                <span class="platform-btn-name">${t.name}</span>
                <span class="platform-btn-desc">${t.descLight}</span>
            </span>
            <svg class="pdf-theme-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        `;
        btn.addEventListener('click', () => {
            applyAccentTheme(key);
            closeAllMenus();
        });
        container.appendChild(btn);
    });
}

// ── Legend visibility (settings liquid toggle) ──
let legendVisible = true;

function applyLegendVisibility(
    visible: boolean,
    animate = false,
    persist = true,
) {
    legendVisible = visible;
    const legendArea = document.querySelector<HTMLElement>('.legend-area');
    if (legendArea) legendArea.style.display = visible ? '' : 'none';
    const chartWrapper = document.querySelector<HTMLElement>('.chart-wrapper');
    if (chartWrapper) chartWrapper.style.flex = visible ? '' : '1';
    if (animate) animateLiquidToggle(toggleLegend, visible);
    else syncLiquidToggle(toggleLegend, visible);
    if (persist) localStorage.setItem('falatina-legend', visible ? '1' : '0');
}

toggleLegend.addEventListener('click', () => {
    applyLegendVisibility(!legendVisible, true);
});

// ── Chart.js external tooltip (Liquid Glass) ──
function externalTooltipHandler({ chart, tooltip }: any) {
    if (tooltip.opacity === 0 || !tooltip.dataPoints?.length) {
        chartTooltipEl.classList.remove('visible');
        return;
    }

    const dp = tooltip.dataPoints[0];
    const color: string = (dp.dataset as any).borderColor;
    chartTooltipTitle.innerHTML = `<span class="chart-tooltip-dot" style="background:${color}"></span>${dp.dataset.label as string}`;
    chartTooltipBody.textContent = `${dp.label as string}: ${(dp.parsed.y as number).toLocaleString('pt-BR')} mensagens`;

    const rect = chart.canvas.getBoundingClientRect();
    let x = rect.left + (tooltip.caretX as number) + 16;
    let y = rect.top + (tooltip.caretY as number) - 16;

    // Clamp inside the viewport
    const TW = chartTooltipEl.offsetWidth || 190;
    const TH = chartTooltipEl.offsetHeight || 72;
    if (x + TW > window.innerWidth - 12)
        x = rect.left + (tooltip.caretX as number) - TW - 16;
    if (y + TH > window.innerHeight - 12) y = window.innerHeight - TH - 12;
    if (y < 12) y = 12;

    chartTooltipEl.style.left = `${x}px`;
    chartTooltipEl.style.top = `${y}px`;
    chartTooltipEl.classList.add('visible');
}

// ── Chart.js ──
let chart: ReturnType<typeof buildChart> | null = null;
let highlightedIndex: number | null = null;

/** Per-dataset visibility overrides from legend pill clicks */
const hiddenDatasets = new Set<number>();

/** Plugin: dims every dataset except the highlighted one */
const dimPlugin = {
    id: 'dimPlugin',
    beforeDatasetDraw(ch: any, args: any) {
        if (highlightedIndex === null) return;
        if (args.index === highlightedIndex) return;
        ch.ctx.save();
        ch.ctx.globalAlpha = 0.07;
    },
    afterDatasetDraw(ch: any, args: any) {
        if (highlightedIndex === null) return;
        if (args.index === highlightedIndex) return;
        ch.ctx.restore();
    },
};

function getChartColors(dark: boolean) {
    return {
        grid: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
        text: dark ? '#8b949e' : '#6b7280',
    };
}

function buildDatasets() {
    return PARTICIPANTS.map((p) => ({
        label: p.name,
        data: p.data,
        borderColor: p.color,
        backgroundColor: p.color + '22',
        borderWidth: 2.5,
        pointRadius: 4,
        pointHoverRadius: 9,
        pointBackgroundColor: p.color,
        pointBorderColor: p.color,
        pointHoverBorderWidth: 2.5,
        pointHoverBorderColor: '#ffffff',
        tension: 0.35,
        spanGaps: true,
    }));
}

function buildChart() {
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    const dark = document.documentElement.dataset.theme === 'dark';
    const c = getChartColors(dark);

    return new Chart(canvas, {
        type: 'line',
        plugins: [dimPlugin],
        data: {
            labels: WEEKS,
            datasets: buildDatasets(),
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 400 },
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'xy',
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: false,
                    external: externalTooltipHandler,
                },
            },
            onHover: (_evt: any, elements: any[]) => {
                if (elements.length > 0) {
                    const idx = elements[0].datasetIndex;
                    if (highlightedIndex !== idx) {
                        highlightedIndex = idx;
                        chart?.update('none');
                        syncLegendHover(idx);
                    }
                } else if (highlightedIndex !== null) {
                    highlightedIndex = null;
                    chart?.update('none');
                    syncLegendHover(null);
                }
            },
            scales: {
                x: {
                    grid: { color: c.grid },
                    ticks: {
                        color: c.text,
                        font: {
                            family: 'Inter, sans-serif',
                            size: 13,
                            weight: '600',
                        },
                    },
                    border: { color: 'transparent' },
                },
                y: {
                    grid: { color: c.grid },
                    ticks: {
                        color: c.text,
                        font: { family: 'Inter, sans-serif', size: 12 },
                        maxTicksLimit: 8,
                    },
                    border: { color: 'transparent' },
                    beginAtZero: true,
                },
            },
        },
    });
}

function updateChartTheme(dark: boolean) {
    if (!chart) return;
    const c = getChartColors(dark);
    const opts = chart.options;
    opts.scales.x.grid.color = c.grid;
    opts.scales.x.ticks.color = c.text;
    opts.scales.y.grid.color = c.grid;
    opts.scales.y.ticks.color = c.text;
    chart.update('none');
}

// ── Legend ──
function syncLegendHover(idx: number | null) {
    document.querySelectorAll<HTMLElement>('.legend-item').forEach((btn, i) => {
        if (idx === null) btn.classList.remove('legend-item--dimmed');
        else btn.classList.toggle('legend-item--dimmed', i !== idx);
    });
}

function buildLegend() {
    const legend = document.getElementById('legend');
    if (!legend || !chart) return;
    legend.innerHTML = '';

    chart.data.datasets.forEach((ds: any, i: number) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'legend-item';
        btn.title = `Clique para mostrar/ocultar ${ds.label as string}`;

        const dot = document.createElement('span');
        dot.className = 'legend-dot';
        dot.style.background = ds.borderColor;

        const label = document.createElement('span');
        label.className = 'legend-label';
        label.textContent = ds.label;

        btn.appendChild(dot);
        btn.appendChild(label);

        btn.addEventListener('click', () => {
            const isHidden = hiddenDatasets.has(i);
            if (isHidden) {
                hiddenDatasets.delete(i);
                chart!.setDatasetVisibility(i, true);
            } else {
                hiddenDatasets.add(i);
                chart!.setDatasetVisibility(i, false);
            }
            chart!.update();
            btn.classList.toggle('legend-item--hidden', !isHidden);
        });

        btn.addEventListener('mouseenter', () => {
            if (hiddenDatasets.has(i)) return;
            highlightedIndex = i;
            chart!.update('none');
            syncLegendHover(i);
        });

        btn.addEventListener('mouseleave', () => {
            highlightedIndex = null;
            chart!.update('none');
            syncLegendHover(null);
        });

        legend.appendChild(btn);
    });
}

// ── Export PNG (chart + legend rendered below) ──
function exportPng() {
    closeAllMenus();
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    const dark = document.documentElement.dataset.theme === 'dark';
    const bg = dark ? '#0d1117' : '#f0f2f8';
    const fg = dark ? '#e6edf3' : '#111827';

    const datasets = chart?.data?.datasets ?? [];
    const DPR = window.devicePixelRatio || 1;
    const PAD = Math.round(20 * DPR);
    const COLS = 4;
    const ITEM_H = Math.round(28 * DPR);
    const DOT_R = Math.round(7 * DPR);
    const FONT_SZ = Math.round(13 * DPR);
    const legendRows = Math.ceil(datasets.length / COLS);
    const legendH = legendRows * ITEM_H + PAD * 2;

    const tmp = document.createElement('canvas');
    tmp.width = canvas.width;
    tmp.height = canvas.height + legendH;
    const ctx = tmp.getContext('2d')!;

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, tmp.width, tmp.height);
    ctx.drawImage(canvas, 0, 0);

    ctx.font = `500 ${FONT_SZ}px Inter, -apple-system, sans-serif`;
    ctx.textBaseline = 'middle';
    const colW = (canvas.width - PAD * 2) / COLS;

    datasets.forEach((ds: any, i: number) => {
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

    const link = document.createElement('a');
    link.download = 'fala-tina.png';
    link.href = tmp.toDataURL('image/png');
    link.click();
    showToast('Imagem PNG exportada!');
}

// ── Export PDF (browser print dialog) ──
function exportPdf() {
    closeAllMenus();
    globalThis.print();
}

btnExportPng.addEventListener('click', exportPng);
btnExportPdf.addEventListener('click', exportPdf);

// ── Help / Wiki Modal ──
function buildHelpBody() {
    const section = (icon: string, title: string, body: string) =>
        `<div class="help-section">
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
            'Gráfico interativo',
            `<p class="help-p">Passe o mouse sobre qualquer linha para destacá-la e ver o nome do participante e a quantidade de mensagens daquela semana. O foco sai quando o cursor é retirado.</p>`,
        ),
        section(
            iLegend,
            'Legenda de participantes',
            `<ul class="help-list">
                <li><strong>Clique</strong> em uma pílula para ocultar ou mostrar a linha correspondente.</li>
                <li><strong>Hover</strong> sobre a pílula para destacar apenas aquela linha.</li>
                <li>Visibilidade da legenda pode ser controlada em <em>Configurações → Mostrar legenda</em>.</li>
             </ul>`,
        ),
        section(
            iExport,
            'Exportar',
            `<ul class="help-list">
                <li><strong>Salvar como PNG</strong> — imagem com gráfico e legenda de participantes abaixo, fundo do tema atual. Uma confirmação aparece brevemente após a exportação.</li>
                <li><strong>Imprimir / PDF</strong> — caixa de diálogo de impressão nativa do navegador com legenda inclusa abaixo do gráfico.</li>
             </ul>`,
        ),
        section(
            iThemes,
            'Temas de cor',
            `<ul class="help-list">
                <li><strong>WhatsApp</strong> — verde · padrão</li>
                <li><strong>Oceano</strong> — azul · fundo azulado</li>
                <li><strong>Uva</strong> — roxo · fundo lilás</li>
                <li><strong>Pôr do Sol</strong> — laranja · fundo quente</li>
             </ul>
             <p class="help-p" style="margin-top:4px">Cada tema altera o fundo do site, as cores de destaque e os tons das linhas do gráfico. Funciona nos modos claro e escuro.</p>`,
        ),
        section(
            iSettings,
            'Configurações',
            `<ul class="help-list">
                <li><strong>Modo escuro</strong> — alterna entre tema claro e escuro; segue o sistema por padrão.</li>
                <li><strong>Vidro fosco</strong> — ativa o efeito de desfoque atrás dos painéis e da dock.</li>
                <li><strong>Mostrar legenda</strong> — exibe ou oculta a barra de participantes abaixo do gráfico.</li>
                <li><strong>Preferências salvas</strong> — todas as configurações são guardadas no navegador e restauradas automaticamente na próxima visita.</li>
             </ul>
             <p class="help-p" style="margin-top:4px">Pressione <strong>ESC</strong> para fechar qualquer menu ou este painel de ajuda.</p>`,
        ),
    ].join('');
}

function openHelpModal() {
    buildHelpBody();
    helpModal.classList.add('visible');
    helpModal.removeAttribute('inert');
    btnCloseHelp.focus();
}

function closeHelpModal() {
    helpModal.classList.remove('visible');
    helpModal.setAttribute('inert', '');
}

btnHelp.addEventListener('click', () => {
    closeAllMenus();
    openHelpModal();
});

helpModalBackdrop.addEventListener('click', closeHelpModal);
btnCloseHelp.addEventListener('click', closeHelpModal);

// ── Toast ──
let toastTimer: ReturnType<typeof setTimeout>;
function showToast(msg: string) {
    toast.textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 2400);
}

// ── Print styles (PDF export shows legend below chart) ──
const printStyle = document.createElement('style');
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

// ── Initialise ──
// Defaults (used when no localStorage value exists):
//   theme   → OS/browser preference  (light or dark)
//   glass   → clear
//   accent  → whatsapp
//   legend  → visible
// persist = false on first-visit so localStorage stays empty;
// the OS-change listener can then keep following the system.
const savedTheme = localStorage.getItem('falatina-theme');
const savedGlass = localStorage.getItem('falatina-glass');
const savedAccent = localStorage.getItem('falatina-accent');
const savedLegend = localStorage.getItem('falatina-legend');

const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)');
// Only persist if a value was explicitly stored before (user previously changed it)
applyTheme(
    savedTheme === null ? prefersDark.matches : savedTheme === 'dark',
    false,
    savedTheme !== null,
);

// Follow OS changes only while the user hasn't explicitly set a theme yet
prefersDark.addEventListener('change', (e: MediaQueryListEvent) => {
    if (localStorage.getItem('falatina-theme') === null)
        applyTheme(e.matches, false, false);
});

applyGlassStyle(savedGlass === 'frosted', false, savedGlass !== null);

buildThemeRows();
applyAccentTheme(
    (savedAccent ?? 'whatsapp') as AccentThemeName,
    savedAccent !== null,
);

chart = buildChart();
buildLegend();

applyLegendVisibility(
    savedLegend === null ? true : savedLegend !== '0',
    false,
    savedLegend !== null,
);
