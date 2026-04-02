// ── FalaTina — Weekly message dataset ──
//
// HOW TO ADD A NEW WEEK:
//   1. Append the new week label to the WEEKS array, e.g. 'W13'.
//   2. Append the new message count to each participant's `data` array,
//      in the same position — use `null` when the participant had no messages
//      recorded that week.
//   3. Append the new active-hours count to each participant's `hours` array.
//   4. Run `node build.js` and commit the updated app.bundle.js.

export interface Participant {
    name: string;
    /** Message counts per week, aligned with the WEEKS array. null = no data */
    data: (number | null)[];
    /** Active hours per week, aligned with the WEEKS array. null = no data */
    hours: (number | null)[];
}

export const WEEKS: string[] = ['W10', 'W11', 'W12'];

export const PARTICIPANTS: Participant[] = [
    { name: 'Nay', data: [2392, 2883, 2101], hours: [74, 82, 75] },
    { name: 'Thay', data: [283, 1666, 1853], hours: [null, 62, 72] },
    { name: 'Cleber', data: [1033, 1301, 1719], hours: [72, 68, 78] },
    { name: 'Marc R.', data: [937, 1199, 974], hours: [55, 54, 51] },
    { name: 'Lucas', data: [900, 1171, 769], hours: [73, 79, 63] },
    { name: 'Fernanda', data: [838, 972, 796], hours: [84, 86, 77] },
    { name: 'Domi', data: [730, 827, 512], hours: [50, 70, 58] },
    { name: 'Italo G.', data: [884, 405, 711], hours: [67, 45, 52] },
    { name: 'Gabriel B.', data: [476, 440, 720], hours: [60, 51, 65] },
    { name: 'Ivan F.', data: [486, 657, null], hours: [52, 44, null] },
    { name: 'Lexi', data: [null, 607, 289], hours: [null, 63, 41] },
    { name: 'Paolo P.', data: [412, 614, 349], hours: [61, 82, 65] },
    { name: 'Leticia M.', data: [411, 542, 218], hours: [66, 52, null] },
    { name: 'C', data: [null, 230, 509], hours: [null, null, 74] },
    { name: 'Jaime T.', data: [null, null, 405], hours: [null, null, 41] },
    { name: 'Ana C.', data: [407, null, 309], hours: [52, 36, 41] },
    { name: 'Vitor V.', data: [591, null, null], hours: [45, null, null] },
    { name: 'L E O N V R D X', data: [493, 443, 380], hours: [76, 64, 58] },
    { name: 'Beatriz A.', data: [447, null, 170], hours: [39, null, null] },
    { name: 'Kari', data: [434, 305, 247], hours: [null, 39, null] },
    { name: 'Delboni', data: [409, 343, null], hours: [46, 56, null] },
    { name: 'Helena', data: [372, null, null], hours: [56, 42, 36] },
    { name: 'Claudio Z.', data: [322, null, null], hours: [null, null, null] },
    { name: 'André', data: [null, 259, null], hours: [44, 41, 46] },
    { name: 'Camila', data: [null, 213, 175], hours: [null, 38, 33] },
    { name: 'Juan', data: [null, 194, null], hours: [null, null, null] },
    { name: 'Jader T.', data: [null, null, 166], hours: [44, null, 49] },
    { name: 'BoTina', data: [null, null, null], hours: [67, null, null] },
    { name: 'Lucas N.', data: [null, null, null], hours: [null, null, 47] },
];
