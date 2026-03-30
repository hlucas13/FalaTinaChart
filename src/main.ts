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

const exportChoiceModal = document.getElementById('export-choice-modal')!;
const exportChoiceBackdrop = document.getElementById('export-choice-backdrop')!;
const btnCloseExportChoice = document.getElementById(
    'btn-close-export-choice',
)!;
const btnChoiceWithTables = document.getElementById('btn-choice-with-tables')!;
const btnChoiceWithoutTables = document.getElementById(
    'btn-choice-without-tables',
)!;
const exportChoiceTitleText = document.getElementById(
    'export-choice-title-text',
)!;
const exportChoiceWithDesc = document.getElementById(
    'export-choice-with-desc',
)!;
const exportChoiceWithoutDesc = document.getElementById(
    'export-choice-without-desc',
)!;

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
        if (exportChoiceModal.classList.contains('visible'))
            closeExportChoiceModal();
        else if (helpModal.classList.contains('visible')) closeHelpModal();
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
let currentAccent: AccentThemeName = 'whatsapp';

function applyAccentTheme(name: AccentThemeName, persist = true) {
    currentAccent = name;
    document.documentElement.dataset.accent = name;
    if (persist) localStorage.setItem('falatina-accent', name);
    document
        .querySelectorAll<HTMLElement>('.chart-theme-row')
        .forEach((row) => {
            row.classList.toggle('active', row.dataset.accentTheme === name);
        });
    // Update live chart colours if chart is already built
    if (chart) {
        const palette = ACCENT_THEMES[name].palette;
        chart.data.datasets.forEach((ds: any, i: number) => {
            const color = palette[i % palette.length];
            ds.borderColor = color;
            ds.backgroundColor = color + '22';
            ds.pointBackgroundColor = color;
            ds.pointBorderColor = color;
            ds.pointHoverBackgroundColor = color;
        });
        chart.update();
        buildLegend();
        updateRankingColors();
    }
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
let pinFocusIndex: number | null = null;

/** Per-dataset visibility overrides from legend pill clicks */
const hiddenDatasets = new Set<number>();

/** Plugin: dims every dataset except the pinned one (click-locked) */
const dimPlugin = {
    id: 'dimPlugin',
    beforeDatasetDraw(ch: any, args: any) {
        if (pinFocusIndex === null) return;
        if (args.index === pinFocusIndex) return;
        ch.ctx.save();
        ch.ctx.globalAlpha = 0.12;
    },
    afterDatasetDraw(ch: any, args: any) {
        if (pinFocusIndex === null) return;
        if (args.index === pinFocusIndex) return;
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
    const palette = ACCENT_THEMES[currentAccent].palette;
    return PARTICIPANTS.map((p, i) => {
        const color = palette[i % palette.length];
        return {
            label: p.name,
            data: p.data,
            borderColor: color,
            backgroundColor: color + '22',
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 9,
            pointBackgroundColor: color,
            pointBorderColor: color,
            pointHoverBorderWidth: 2.5,
            pointHoverBorderColor: '#ffffff',
            tension: 0.35,
            spanGaps: false,
        };
    });
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
            onHover: (evt: any, elements: any[]) => {
                if (evt.native?.target) {
                    (evt.native.target as HTMLElement).style.cursor =
                        elements.length > 0 ? 'pointer' : 'default';
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
            onClick: (evt: any, _elements: any[], ch: any) => {
                if (!evt.native) return;
                const hits = ch.getElementsAtEventForMode(
                    evt.native,
                    'nearest',
                    { intersect: true },
                    false,
                );
                if (hits.length > 0) {
                    const idx = hits[0].datasetIndex;
                    pinFocusIndex = pinFocusIndex === idx ? null : idx;
                } else {
                    pinFocusIndex = null;
                }
                ch.update('none');
                syncLegendHover(pinFocusIndex);
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
            syncLegendHover(pinFocusIndex);
        });

        legend.appendChild(btn);
    });
}

// ── Ranking tables ──
let carouselWeekIndex = 0;

function getParticipantColor(participantIndex: number): string {
    const palette = ACCENT_THEMES[currentAccent].palette;
    return palette[participantIndex % palette.length];
}

function buildRankingRow(
    pos: number,
    name: string,
    count: number,
    participantIndex: number,
    avg?: number,
    posDiff?: number,
    countDiff?: number,
): HTMLLIElement {
    const li = document.createElement('li');
    li.className = 'ranking-row';

    const posEl = document.createElement('span');
    posEl.className = 'ranking-pos';
    if (pos === 1) posEl.classList.add('gold');
    else if (pos === 2) posEl.classList.add('silver');
    else if (pos === 3) posEl.classList.add('bronze');
    posEl.textContent = String(pos);

    const dot = document.createElement('span');
    dot.className = 'ranking-dot';
    dot.style.background = getParticipantColor(participantIndex);

    const nameEl = document.createElement('span');
    nameEl.className = 'ranking-name';

    const nameTxt = document.createElement('span');
    nameTxt.className = 'ranking-name-text';
    nameTxt.textContent = name;
    nameEl.appendChild(nameTxt);

    if (posDiff !== undefined && posDiff !== 0) {
        const trendEl = document.createElement('span');
        trendEl.className = `ranking-trend ${posDiff > 0 ? 'up' : 'down'}`;
        trendEl.textContent = posDiff > 0 ? '\u25b2' : '\u25bc';
        nameEl.appendChild(trendEl);
    }

    const statsEl = document.createElement('span');
    statsEl.className = 'ranking-stats';

    const countEl = document.createElement('span');
    countEl.className = 'ranking-count';
    countEl.textContent = count.toLocaleString('pt-BR');
    statsEl.appendChild(countEl);

    if (avg !== undefined) {
        const avgEl = document.createElement('span');
        avgEl.className = 'ranking-avg';
        avgEl.textContent = `~${Math.round(avg).toLocaleString('pt-BR')}/sem`;
        statsEl.appendChild(avgEl);
    }

    if (countDiff !== undefined) {
        const diffEl = document.createElement('span');
        if (countDiff > 0) {
            diffEl.className = 'ranking-diff positive';
            diffEl.textContent = `+${countDiff.toLocaleString('pt-BR')}`;
        } else if (countDiff < 0) {
            diffEl.className = 'ranking-diff negative';
            diffEl.textContent = countDiff.toLocaleString('pt-BR');
        } else {
            diffEl.className = 'ranking-diff neutral';
            diffEl.textContent = '=';
        }
        statsEl.appendChild(diffEl);
    }

    li.appendChild(posEl);
    li.appendChild(dot);
    li.appendChild(nameEl);
    li.appendChild(statsEl);
    return li;
}

function buildAlltimeRanking() {
    const el = document.getElementById('ranking-alltime')!;
    el.innerHTML = '';
    const totals = PARTICIPANTS.map((p, i) => {
        const weeks = p.data.filter((v) => v !== null).length;
        const total = p.data.reduce<number>((s, v) => s + (v ?? 0), 0);
        return {
            name: p.name,
            idx: i,
            total,
            avg: weeks > 0 ? total / weeks : 0,
        };
    });
    totals.sort((a, b) => b.total - a.total);
    totals.slice(0, 10).forEach((p, rank) => {
        el.appendChild(
            buildRankingRow(rank + 1, p.name, p.total, p.idx, p.avg),
        );
    });
}

function buildWeeklyRanking() {
    const el = document.getElementById('ranking-weekly')!;
    const labelEl = document.getElementById('carousel-label')!;
    const prevBtn = document.getElementById(
        'carousel-prev',
    ) as HTMLButtonElement;
    const nextBtn = document.getElementById(
        'carousel-next',
    ) as HTMLButtonElement;

    el.innerHTML = '';
    labelEl.textContent = WEEKS[carouselWeekIndex];
    prevBtn.disabled = carouselWeekIndex === 0;
    nextBtn.disabled = carouselWeekIndex === WEEKS.length - 1;

    const weekData = PARTICIPANTS.map((p, i) => ({
        name: p.name,
        idx: i,
        count: p.data[carouselWeekIndex] ?? 0,
    })).filter((p) => p.count > 0);
    weekData.sort((a, b) => b.count - a.count);

    // Compute previous week maps for position and count deltas
    let prevRankMap: Map<string, number> | null = null;
    let prevCountMap: Map<string, number> | null = null;
    if (carouselWeekIndex > 0) {
        const prevData = PARTICIPANTS.map((p, i) => ({
            name: p.name,
            idx: i,
            count: p.data[carouselWeekIndex - 1] ?? 0,
        })).filter((p) => p.count > 0);
        prevData.sort((a, b) => b.count - a.count);
        prevRankMap = new Map(
            prevData.slice(0, 20).map((p, rank) => [p.name, rank + 1]),
        );
        prevCountMap = new Map(prevData.map((p) => [p.name, p.count]));
    }

    weekData.slice(0, 20).forEach((p, rank) => {
        const currentRank = rank + 1;
        let posDiff: number | undefined;
        let countDiff: number | undefined;
        if (prevRankMap !== null && prevCountMap !== null) {
            const prevRank = prevRankMap.get(p.name);
            const prevCount = prevCountMap.get(p.name) ?? 0;
            // Only show triangle if they had a rank before
            posDiff =
                prevRank !== undefined ? prevRank - currentRank : undefined;
            countDiff = p.count - prevCount;
        }
        el.appendChild(
            buildRankingRow(
                currentRank,
                p.name,
                p.count,
                p.idx,
                undefined,
                posDiff,
                countDiff,
            ),
        );
    });
}

function updateRankingColors() {
    // Rebuild both rankings so dots reflect the current palette
    buildAlltimeRanking();
    buildWeeklyRanking();
}

document.getElementById('carousel-prev')!.addEventListener('click', () => {
    if (carouselWeekIndex > 0) {
        carouselWeekIndex--;
        buildWeeklyRanking();
    }
});
document.getElementById('carousel-next')!.addEventListener('click', () => {
    if (carouselWeekIndex < WEEKS.length - 1) {
        carouselWeekIndex++;
        buildWeeklyRanking();
    }
});

// ── Export Choice Modal ──
let exportChoiceType: 'png' | 'pdf' | null = null;

function openExportChoiceModal(type: 'png' | 'pdf') {
    closeAllMenus();
    exportChoiceType = type;
    if (type === 'png') {
        exportChoiceTitleText.textContent = 'Exportar como PNG';
        exportChoiceWithDesc.textContent =
            'Gráfico + legenda + Top 10 e Top 20';
        exportChoiceWithoutDesc.textContent = 'Só gráfico e legenda';
    } else {
        exportChoiceTitleText.textContent = 'Exportar como PDF';
        exportChoiceWithDesc.textContent =
            'Gráfico + ranking lateral · landscape';
        exportChoiceWithoutDesc.textContent = 'Só gráfico · landscape';
    }
    exportChoiceModal.classList.add('visible');
    exportChoiceModal.removeAttribute('inert');
}

function closeExportChoiceModal() {
    exportChoiceModal.classList.remove('visible');
    exportChoiceModal.setAttribute('inert', '');
}

btnExportPng.addEventListener('click', () => openExportChoiceModal('png'));
btnExportPdf.addEventListener('click', () => openExportChoiceModal('pdf'));

btnCloseExportChoice.addEventListener('click', closeExportChoiceModal);
exportChoiceBackdrop.addEventListener('click', closeExportChoiceModal);

btnChoiceWithTables.addEventListener('click', () => {
    const type = exportChoiceType;
    closeExportChoiceModal();
    if (type === 'png') exportPng(true);
    else exportPdfWithOptions(true);
});

btnChoiceWithoutTables.addEventListener('click', () => {
    const type = exportChoiceType;
    closeExportChoiceModal();
    if (type === 'png') exportPng(false);
    else exportPdfWithOptions(false);
});

// ── Shared canvas builder (chart + legend + optional 2-column rankings) ──
function buildExportCanvas(withTables: boolean): HTMLCanvasElement {
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    const dark = document.documentElement.dataset.theme === 'dark';
    const bg = dark ? '#0d1117' : '#f0f2f8';
    const fg = dark ? '#e6edf3' : '#111827';
    const fgMuted = dark ? '#8b949e' : '#6b7280';
    const borderLine = dark ? '#30363d' : '#e5e7eb';
    const positiveColor = '#22c55e';
    const negativeColor = '#ef4444';

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
    const rankingH = withTables
        ? SEP_H + LABEL_H + CHEADER_H + rankingBodyH + Math.round(16 * DPR)
        : 0;

    const tmp = document.createElement('canvas');
    tmp.width = canvas.width;
    tmp.height = canvas.height + legendH + rankingH;
    const ctx = tmp.getContext('2d')!;

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, tmp.width, tmp.height);
    ctx.drawImage(canvas, 0, 0);

    // ── Legend ──
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
        ctx.font = `500 ${FONT_SZ}px Inter, -apple-system, sans-serif`;
        ctx.fillStyle = fg;
        ctx.fillText(ds.label, x + DOT_R * 2 + Math.round(6 * DPR), y);
    });

    if (!withTables) return tmp;

    // ── Two-column rankings ──
    const HALF_W = Math.floor((tmp.width - PAD * 3) / 2);
    const L_START = PAD;
    const L_END = PAD + HALF_W;
    const R_START = PAD * 2 + HALF_W;
    const R_END = tmp.width - PAD;

    let curY = canvas.height + legendH;

    // Horizontal separator
    ctx.strokeStyle = borderLine;
    ctx.lineWidth = Math.round(1 * DPR);
    ctx.beginPath();
    ctx.moveTo(PAD, curY + Math.round(12 * DPR));
    ctx.lineTo(tmp.width - PAD, curY + Math.round(12 * DPR));
    ctx.stroke();
    curY += SEP_H;

    // Vertical separator between columns
    const vsepX = PAD + HALF_W + Math.round(PAD / 2);
    ctx.beginPath();
    ctx.moveTo(vsepX, curY);
    ctx.lineTo(vsepX, curY + LABEL_H + CHEADER_H + rankingBodyH);
    ctx.stroke();

    const DOT_OFF = Math.round(6 * DPR);
    const RANK_OFF = Math.round(20 * DPR);
    const NAME_OFF = Math.round(46 * DPR);

    // ── Left column: Top 10 Geral ──
    const totals = PARTICIPANTS.map((p, idx) => {
        const weeks = p.data.filter((v) => v !== null).length;
        const total = p.data.reduce<number>((s, v) => s + (v ?? 0), 0);
        return { name: p.name, idx, total, avg: weeks > 0 ? total / weeks : 0 };
    }).sort((a, b) => b.total - a.total);

    let leftY = curY;

    ctx.fillStyle = fg;
    ctx.font = `600 ${Math.round(13 * DPR)}px Inter, -apple-system, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText('Top 10 Geral', L_START, leftY + LABEL_H / 2);
    leftY += LABEL_H;

    ctx.fillStyle = fgMuted;
    ctx.font = `500 ${Math.round(11 * DPR)}px Inter, -apple-system, sans-serif`;
    ctx.textAlign = 'left';
    ctx.fillText('Nome', L_START + NAME_OFF, leftY);
    ctx.textAlign = 'right';
    ctx.fillText('Total', L_END - Math.round(58 * DPR), leftY);
    ctx.fillText('~sem', L_END, leftY);
    leftY += CHEADER_H;

    totals.slice(0, TOP10).forEach((p, rank) => {
        if (rank % 2 === 0) {
            ctx.fillStyle = dark
                ? 'rgba(255,255,255,0.03)'
                : 'rgba(0,0,0,0.02)';
            ctx.fillRect(L_START, leftY - ROW_H * 0.45, HALF_W, ROW_H);
        }
        ctx.beginPath();
        ctx.arc(L_START + DOT_OFF, leftY, Math.round(5 * DPR), 0, Math.PI * 2);
        ctx.fillStyle = (datasets[p.idx] as any)?.borderColor ?? '#888';
        ctx.fill();

        ctx.font = `500 ${Math.round(12 * DPR)}px Inter, -apple-system, sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        ctx.fillStyle = fgMuted;
        ctx.fillText(String(rank + 1), L_START + RANK_OFF, leftY);
        ctx.fillStyle = fg;
        ctx.fillText(p.name, L_START + NAME_OFF, leftY);

        ctx.textAlign = 'right';
        ctx.fillStyle = fg;
        ctx.fillText(
            p.total.toLocaleString('pt-BR'),
            L_END - Math.round(58 * DPR),
            leftY,
        );
        ctx.fillStyle = fgMuted;
        ctx.fillText(p.avg.toFixed(0), L_END, leftY);

        leftY += ROW_H;
    });

    // ── Right column: Top 20 · current week ──
    const weekIdx = carouselWeekIndex;
    const weekLabel = WEEKS[weekIdx];

    const weekData = PARTICIPANTS.map((p, idx) => ({
        name: p.name,
        idx,
        count: p.data[weekIdx] ?? 0,
    }))
        .filter((p) => p.count > 0)
        .sort((a, b) => b.count - a.count);

    let prevCountMap: Map<string, number> | null = null;
    if (weekIdx > 0) {
        const prevData = PARTICIPANTS.map((p) => ({
            name: p.name,
            count: p.data[weekIdx - 1] ?? 0,
        })).filter((p) => p.count > 0);
        prevCountMap = new Map(prevData.map((p) => [p.name, p.count]));
    }

    let rightY = curY;

    ctx.fillStyle = fg;
    ctx.font = `600 ${Math.round(13 * DPR)}px Inter, -apple-system, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText(`Top 20 · ${weekLabel}`, R_START, rightY + LABEL_H / 2);
    rightY += LABEL_H;

    ctx.fillStyle = fgMuted;
    ctx.font = `500 ${Math.round(11 * DPR)}px Inter, -apple-system, sans-serif`;
    ctx.textAlign = 'left';
    ctx.fillText('Nome', R_START + NAME_OFF, rightY);
    ctx.textAlign = 'right';
    ctx.fillText('Msgs', R_END - Math.round(50 * DPR), rightY);
    if (prevCountMap) ctx.fillText('+/−', R_END, rightY);
    rightY += CHEADER_H;

    weekData.slice(0, TOP20).forEach((p, rank) => {
        if (rank % 2 === 0) {
            ctx.fillStyle = dark
                ? 'rgba(255,255,255,0.03)'
                : 'rgba(0,0,0,0.02)';
            ctx.fillRect(R_START, rightY - ROW_H * 0.45, HALF_W, ROW_H);
        }
        ctx.beginPath();
        ctx.arc(R_START + DOT_OFF, rightY, Math.round(5 * DPR), 0, Math.PI * 2);
        ctx.fillStyle = (datasets[p.idx] as any)?.borderColor ?? '#888';
        ctx.fill();

        ctx.font = `500 ${Math.round(12 * DPR)}px Inter, -apple-system, sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        ctx.fillStyle = fgMuted;
        ctx.fillText(String(rank + 1), R_START + RANK_OFF, rightY);
        ctx.fillStyle = fg;
        ctx.fillText(p.name, R_START + NAME_OFF, rightY);

        ctx.textAlign = 'right';
        ctx.fillStyle = fg;
        ctx.fillText(
            p.count.toLocaleString('pt-BR'),
            R_END - Math.round(50 * DPR),
            rightY,
        );

        if (prevCountMap) {
            const prev = prevCountMap.get(p.name) ?? 0;
            const diff = p.count - prev;
            ctx.fillStyle =
                diff > 0 ? positiveColor : diff < 0 ? negativeColor : fgMuted;
            ctx.fillText(
                diff > 0 ? `+${diff}` : String(diff || '='),
                R_END,
                rightY,
            );
        }

        rightY += ROW_H;
    });

    return tmp;
}

// ── Export PNG ──
function exportPng(withTables = false) {
    const tmp = buildExportCanvas(withTables);
    const link = document.createElement('a');
    link.download = 'fala-tina.png';
    link.href = tmp.toDataURL('image/png');
    link.click();
    showToast(
        withTables ? 'PNG com tabelas exportado!' : 'Imagem PNG exportada!',
    );
}

// ── Export PDF — renders via canvas (same output as PNG), opens print dialog ──
function exportPdfWithOptions(withTables: boolean) {
    const tmp = buildExportCanvas(withTables);
    const dataUrl = tmp.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (!win) {
        showToast('Permita pop-ups para exportar o PDF.');
        return;
    }
    const html = `<!doctype html><html><head>
<style>
*{box-sizing:border-box;margin:0;padding:0}
@page{size:auto;margin:0}
html,body{width:100%;background:#fff}
img{display:block;width:100%;height:auto}
</style>
</head><body>
<img src="${dataUrl}">
<script>
window.addEventListener('load',function(){
  window.addEventListener('afterprint',function(){ window.close(); });
  window.print();
});
</script>
</body></html>`;
    win.document.write(html);
    win.document.close();
}

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
    const iRanking = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`;
    const iExport = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`;
    const iThemes = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>`;
    const iSettings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`;

    helpBody.innerHTML = [
        section(
            iChart,
            'Gráfico interativo',
            `<p class="help-p">Passe o mouse sobre o gráfico para ver o tooltip do participante mais próximo do cursor — nome e quantidade de mensagens naquela semana. Todas as linhas permanecem visíveis durante o hover.</p>
             <p class="help-p" style="margin-top:4px"><strong>Clique num ponto</strong> para fixar o foco naquela linha: as demais ficam semi-transparentes. Clique novamente no mesmo ponto ou numa área vazia do gráfico para remover o foco e restaurar todas as linhas.</p>`,
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
            iRanking,
            'Ranking de participantes',
            `<ul class="help-list">
                <li><strong>Top 10 Geral</strong> — os 10 participantes com mais mensagens no período; exibe o total e a média semanal (calculada apenas sobre as semanas em que a pessoa enviou mensagens).</li>
                <li><strong>Top 20 por Semana</strong> — carrossel navegável pelas setas ‹ ›; exibe os 20 mais ativos em cada semana. Participantes sem mensagens naquela semana são omitidos.</li>
                <li>A partir da segunda semana, cada linha mostra a variação de mensagens em relação à semana anterior (<em>+XX</em> verde ou <em>−XX</em> vermelho) e uma seta <strong>▲</strong> verde ou <strong>▼</strong> vermelha à direita do nome indicando subida ou descida de posição no ranking.</li>
                <li>As cores dos pontos do ranking acompanham o tema de cor ativo.</li>
                <li>Na versão landscape, o botão de painel no cabeçalho oculta ou exibe o painel lateral; o estado é guardado no navegador.</li>
             </ul>`,
        ),
        section(
            iExport,
            'Exportar',
            `<ul class="help-list">
                <li><strong>Salvar como PNG</strong> e <strong>Imprimir / PDF</strong> — ao clicar em qualquer um dos botões de exportação, abre-se um seletor para escolher:</li>
                <li style="margin-left:16px"><strong>Com tabelas</strong> — inclui o gráfico, legenda e as duas tabelas de ranking lado a lado.</li>
                <li style="margin-left:16px"><strong>Sem tabelas</strong> — inclui apenas o gráfico e a legenda de participantes.</li>
                <li>A exportação usa o fundo e as cores do tema atual. Uma confirmação aparece brevemente após guardar o PNG.</li>
                <li>O PDF abre a caixa de diálogo de impressão nativa do navegador e a tab fecha-se automaticamente ao concluir ou cancelar.</li>
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
             <p class="help-p" style="margin-top:4px">Cada tema altera o fundo do site, as cores de destaque e a <strong>paleta completa de cores das linhas</strong> do gráfico — cada paleta tem 32 cores distintas, ordenadas para contrastar bem com o fundo do tema. Funciona nos modos claro e escuro.</p>`,
        ),
        section(
            iSettings,
            'Configurações',
            `<ul class="help-list">
                <li><strong>Modo escuro</strong> — alterna entre tema claro e escuro; segue o sistema por padrão.</li>
                <li><strong>Vidro fosco</strong> — ativa o efeito de desfoque atrás dos painéis e da dock.</li>
                <li><strong>Mostrar legenda</strong> — exibe ou oculta a barra de participantes abaixo do gráfico.</li>
                <li><strong>Preferências salvas</strong> — modo escuro, vidro fosco, paleta de cor, visibilidade da legenda e estado do painel de ranking são guardados no navegador e restaurados automaticamente na próxima visita.</li>
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

// ── Sidebar toggle (desktop only) ──
const SIDEBAR_KEY = 'falatina-sidebar';
const btnToggleSidebar = document.getElementById(
    'btn-toggle-sidebar',
) as HTMLButtonElement | null;
const rankingCol = document.querySelector<HTMLElement>('.ranking-col');

function applySidebarState(hidden: boolean, persist: boolean) {
    if (!rankingCol || !btnToggleSidebar) return;
    rankingCol.classList.toggle('hidden', hidden);
    const label = hidden ? 'Mostrar tabelas' : 'Ocultar tabelas';
    btnToggleSidebar.setAttribute('aria-pressed', String(!hidden));
    btnToggleSidebar.setAttribute('aria-label', label);
    btnToggleSidebar.title = label;
    if (persist)
        localStorage.setItem(SIDEBAR_KEY, hidden ? 'hidden' : 'visible');
}

// Restore from localStorage (default: visible)
applySidebarState(localStorage.getItem(SIDEBAR_KEY) === 'hidden', false);

if (btnToggleSidebar && rankingCol) {
    btnToggleSidebar.addEventListener('click', () => {
        const isHidden = rankingCol.classList.contains('hidden');
        applySidebarState(!isHidden, true);
    });
}

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
buildAlltimeRanking();
buildWeeklyRanking();

applyLegendVisibility(
    savedLegend === null ? true : savedLegend !== '0',
    false,
    savedLegend !== null,
);
