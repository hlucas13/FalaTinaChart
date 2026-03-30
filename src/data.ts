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
    /** Message counts per week, aligned with the WEEKS array. null = no data */
    data: (number | null)[];
}

export const WEEKS: string[] = ['W10', 'W11', 'W12'];

export const PARTICIPANTS: Participant[] = [
    { name: 'Nay', data: [2392, 2883, 2101] },
    { name: 'Thay', data: [283, 1666, 1853] },
    { name: 'Cleber', data: [1033, 1301, 1719] },
    { name: 'Marc R.', data: [937, 1199, 974] },
    { name: 'Lucas', data: [900, 1171, 769] },
    { name: 'Fernanda', data: [838, 972, 796] },
    { name: 'Domi', data: [730, 827, 512] },
    { name: 'Italo G.', data: [884, 405, 711] },
    { name: 'Gabriel B.', data: [476, 440, 720] },
    { name: 'Ivan F.', data: [486, 657, null] },
    { name: 'Lexi', data: [null, 607, 289] },
    { name: 'Paolo P.', data: [412, 614, 349] },
    { name: 'Leticia M.', data: [411, 542, 218] },
    { name: 'C', data: [null, 230, 509] },
    { name: 'Jaime T.', data: [null, null, 405] },
    { name: 'Ana C.', data: [407, null, 309] },
    { name: 'Vitor V.', data: [591, null, null] },
    { name: 'Leonardo', data: [493, 443, 380] },
    { name: 'Beatriz A.', data: [447, null, 170] },
    { name: 'Kari', data: [434, 305, 247] },
    { name: 'Delboni', data: [409, 343, null] },
    { name: 'Helena', data: [372, null, null] },
    { name: 'Claudio Z.', data: [322, null, null] },
    { name: 'André', data: [null, 259, null] },
    { name: 'Camila', data: [null, 213, 175] },
    { name: 'Juan', data: [null, 194, null] },
    { name: 'Jader T.', data: [null, null, 166] },
];
