// ── FalaTina — accent / colour themes ──

export type AccentThemeName = 'whatsapp' | 'oceano' | 'uva' | 'posdosol';

export interface AccentTheme {
    name: string;
    dot: string; // colour shown in the theme picker dot
    descLight: string; // flavour text shown in the row
    /**
     * 32 distinct colours for chart lines in this theme.
     * Ordered so the first positions (highest-message participants) contrast
     * well against the theme's background tint.
     */
    palette: string[];
}

/**
 * Each theme changes --accent CSS variables AND assigns a dedicated 32-colour
 * palette to the chart lines, so colours are always distinct and readable on
 * each theme's background — in both light and dark mode.
 */
export const ACCENT_THEMES: Record<AccentThemeName, AccentTheme> = {
    whatsapp: {
        name: 'WhatsApp',
        dot: '#25d366',
        descLight: 'Verde · claro e escuro · padrão',
        // Neutral background → full hue spread, warm tones first
        palette: [
            '#f87171',
            '#fb923c',
            '#fbbf24',
            '#a3e635',
            '#4ade80',
            '#34d399',
            '#2dd4bf',
            '#22d3ee',
            '#60a5fa',
            '#818cf8',
            '#a78bfa',
            '#c084fc',
            '#e879f9',
            '#f472b6',
            '#fb7185',
            '#ef4444',
            '#f97316',
            '#eab308',
            '#84cc16',
            '#22c55e',
            '#10b981',
            '#14b8a6',
            '#06b6d4',
            '#3b82f6',
            '#6366f1',
            '#8b5cf6',
            '#a855f7',
            '#d946ef',
            '#ec4899',
            '#f43f5e',
            '#38bdf8',
            '#facc15',
        ],
    },
    oceano: {
        name: 'Oceano',
        dot: '#0ea5e9',
        descLight: 'Azul · claro e escuro',
        // Blue background → warm + purple tones first, blues pushed to end
        palette: [
            '#f87171',
            '#fb923c',
            '#fbbf24',
            '#a3e635',
            '#a78bfa',
            '#c084fc',
            '#e879f9',
            '#f472b6',
            '#fb7185',
            '#ef4444',
            '#f97316',
            '#eab308',
            '#84cc16',
            '#22c55e',
            '#34d399',
            '#10b981',
            '#2dd4bf',
            '#14b8a6',
            '#d946ef',
            '#ec4899',
            '#f43f5e',
            '#4ade80',
            '#a855f7',
            '#8b5cf6',
            '#6366f1',
            '#818cf8',
            '#22d3ee',
            '#06b6d4',
            '#38bdf8',
            '#60a5fa',
            '#3b82f6',
            '#facc15',
        ],
    },
    uva: {
        name: 'Uva',
        dot: '#8b5cf6',
        descLight: 'Roxo · claro e escuro',
        // Purple background → warm + teal + blue tones first, purples pushed to end
        palette: [
            '#f87171',
            '#fb923c',
            '#fbbf24',
            '#4ade80',
            '#34d399',
            '#2dd4bf',
            '#22d3ee',
            '#38bdf8',
            '#60a5fa',
            '#f472b6',
            '#fb7185',
            '#ef4444',
            '#f97316',
            '#eab308',
            '#a3e635',
            '#84cc16',
            '#22c55e',
            '#10b981',
            '#14b8a6',
            '#06b6d4',
            '#3b82f6',
            '#6366f1',
            '#ec4899',
            '#f43f5e',
            '#facc15',
            '#818cf8',
            '#e879f9',
            '#d946ef',
            '#a855f7',
            '#c084fc',
            '#a78bfa',
            '#8b5cf6',
        ],
    },
    posdosol: {
        name: 'Pôr do Sol',
        dot: '#f97316',
        descLight: 'Laranja · claro e escuro',
        // Warm background → blues + greens + purples first, oranges/yellows pushed to end
        palette: [
            '#60a5fa',
            '#38bdf8',
            '#22d3ee',
            '#2dd4bf',
            '#4ade80',
            '#34d399',
            '#818cf8',
            '#a78bfa',
            '#c084fc',
            '#a855f7',
            '#8b5cf6',
            '#6366f1',
            '#e879f9',
            '#d946ef',
            '#f472b6',
            '#ec4899',
            '#fb7185',
            '#f43f5e',
            '#f87171',
            '#ef4444',
            '#a3e635',
            '#84cc16',
            '#22c55e',
            '#10b981',
            '#14b8a6',
            '#06b6d4',
            '#3b82f6',
            '#facc15',
            '#eab308',
            '#fbbf24',
            '#fb923c',
            '#f97316',
        ],
    },
};

export const THEME_NAMES = Object.keys(ACCENT_THEMES) as AccentThemeName[];
