// ── FalaTina — Weekly message dataset ──
//
// HOW TO ADD A NEW WEEK:
//   1. Append the new week label to the WEEKS array, e.g. 'W13'.
//   2. Append the new message count to each participant's `data` array,
//      in the same position — use `null` when the participant had no messages
//      recorded that week.
//   3. Run `node build.js` and commit the updated app.bundle.js.

export interface Participant {
    name: string;
    /** Hex colour used for the participant's line and legend dot */
    color: string;
    /** Message counts per week, aligned with the WEEKS array. null = no data */
    data: (number | null)[];
}

export const WEEKS: string[] = ['W10', 'W11', 'W12'];

export const PARTICIPANTS: Participant[] = [
    { name: 'Nay', color: '#f87171', data: [2392, 2883, 2101] },
    { name: 'Thay', color: '#34d399', data: [283, 1666, 1853] },
    { name: 'Cleber', color: '#fb923c', data: [1033, 1301, 1719] },
    { name: 'Marc R.', color: '#fbbf24', data: [937, 1199, 974] },
    { name: 'Lucas', color: '#84cc16', data: [900, 1171, 769] },
    { name: 'Fernanda', color: '#10b981', data: [838, 972, 796] },
    { name: 'Domi', color: '#14b8a6', data: [730, 827, 512] },
    { name: 'Italo G.', color: '#22c55e', data: [884, 405, 711] },
    { name: 'Gabriel B.', color: '#8b5cf6', data: [476, 440, 720] },
    { name: 'Ivan F.', color: '#6366f1', data: [486, 657, null] },
    { name: 'Lexi', color: '#2dd4bf', data: [null, 607, 289] },
    { name: 'Paolo P.', color: '#f43f5e', data: [412, 614, 349] },
    { name: 'Leticia M.', color: '#ef4444', data: [411, 542, 218] },
    { name: 'C', color: '#60a5fa', data: [null, 230, 509] },
    { name: 'Jaime T.', color: '#c084fc', data: [null, null, 405] },
    { name: 'Ana C.', color: '#eab308', data: [407, null, 309] },
    { name: 'Vitor V.', color: '#06b6d4', data: [591, null, null] },
    { name: 'Leonardo', color: '#3b82f6', data: [493, 443, 380] },
    { name: 'Beatriz A.', color: '#a855f7', data: [447, null, 170] },
    { name: 'Kari', color: '#ec4899', data: [434, 305, 247] },
    { name: 'Delboni', color: '#f97316', data: [409, 343, null] },
    { name: 'Helena', color: '#a3e635', data: [372, null, null] },
    { name: 'Claudio Z.', color: '#4ade80', data: [322, null, null] },
    { name: 'André', color: '#22d3ee', data: [null, 259, null] },
    { name: 'Camila', color: '#818cf8', data: [null, 213, 175] },
    { name: 'Juan', color: '#a78bfa', data: [null, 194, null] },
    { name: 'Jader T.', color: '#f472b6', data: [null, null, 166] },
];
