// ── FalaTina — accent / colour themes ──

export type AccentThemeName = 'whatsapp' | 'oceano' | 'uva' | 'posdosol';

export interface AccentTheme {
    name: string;
    dot: string; // colour shown in the theme picker dot
    descLight: string; // flavour text shown in the row
}

/**
 * Each theme only changes the --accent CSS variable (and a small glass tint
 * adjustment). Light vs. dark variants are handled entirely in CSS via
 * html[data-accent='…'] and html[data-accent='…'][data-theme='dark'].
 */
export const ACCENT_THEMES: Record<AccentThemeName, AccentTheme> = {
    whatsapp: {
        name: 'WhatsApp',
        dot: '#25d366',
        descLight: 'Verde · claro e escuro · padrão',
    },
    oceano: {
        name: 'Oceano',
        dot: '#0ea5e9',
        descLight: 'Azul · claro e escuro',
    },
    uva: {
        name: 'Uva',
        dot: '#8b5cf6',
        descLight: 'Roxo · claro e escuro',
    },
    posdosol: {
        name: 'Pôr do Sol',
        dot: '#f97316',
        descLight: 'Laranja · claro e escuro',
    },
};

export const THEME_NAMES = Object.keys(ACCENT_THEMES) as AccentThemeName[];
