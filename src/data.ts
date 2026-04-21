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

export const WEEKS: string[] = ["W11", "W12", "W13", "W14", "W15", "W16"];

export const PARTICIPANTS: Participant[] = [
  {
    name: "Nay",
    data: [2392, 2883, 2101, 1663, 1166, 1011],
    hours: [74, 82, 75, 74, 50, 49],
  },
  {
    name: "Thay",
    data: [283, 1666, 1853, 1234, 416, 1392],
    hours: [null, 62, 72, 63, 33, 48],
  },
  {
    name: "Cleber",
    data: [1033, 1301, 1719, 1202, 633, 765],
    hours: [72, 68, 78, 85, 54, 65],
  },
  {
    name: "Marc R.",
    data: [937, 1199, 974, 828, 165, 344],
    hours: [55, 54, 51, 49, null, null],
  },
  {
    name: "Lucas",
    data: [900, 1171, 769, 1081, 868, 677],
    hours: [73, 79, 63, 81, 63, 56],
  },
  {
    name: "Fernanda",
    data: [838, 972, 796, 522, 397, 879],
    hours: [84, 86, 77, 82, 63, 89],
  },
  {
    name: "Domi",
    data: [730, 827, 512, 443, 182, 521],
    hours: [50, 70, 58, 50, 22, 54],
  },
  {
    name: "Italo G.",
    data: [884, 405, 711, 785, 183, 561],
    hours: [67, 45, 52, 56, 26, 65],
  },
  {
    name: "Gabriel B.",
    data: [476, 440, 720, 545, 207, 326],
    hours: [60, 51, 65, 56, 33, 42],
  },
  {
    name: "Ivan F.",
    data: [486, 657, null, null, null, null],
    hours: [52, 44, null, null, null, null],
  },
  {
    name: "Lexi",
    data: [null, 607, 289, null, 194, 208],
    hours: [null, 63, 41, null, 34, 38],
  },
  {
    name: "Paolo P.",
    data: [412, 614, 349, 276, 131, 336],
    hours: [61, 82, 65, 52, 26, 64],
  },
  {
    name: "Leticia M.",
    data: [411, 542, 218, 394, 348, 516],
    hours: [66, 52, null, 57, 53, 66],
  },
  {
    name: "C",
    data: [null, 230, 509, 320, null, 257],
    hours: [null, null, 74, 51, null, 26],
  },
  {
    name: "Jaime T.",
    data: [null, null, 405, 414, null, 137],
    hours: [null, null, 41, 54, 33, 27],
  },
  {
    name: "Ana C.",
    data: [407, null, 309, 707, 487, 502],
    hours: [52, 36, 41, 80, 49, 61],
  },
  {
    name: "Vitor V.",
    data: [591, null, null, null, null, null],
    hours: [45, null, null, null, null, null],
  },
  {
    name: "L E O N V R D X",
    data: [493, 443, 380, 432, 288, 233],
    hours: [76, 64, 58, 68, 52, 50],
  },
  {
    name: "Beatriz A.",
    data: [447, null, 170, null, null, null],
    hours: [39, null, null, null, null, null],
  },
  {
    name: "Kari",
    data: [434, 305, 247, 526, 245, 268],
    hours: [null, 39, null, 57, 37, 34],
  },
  {
    name: "Delboni",
    data: [409, 343, null, null, null, null],
    hours: [46, 56, null, null, null, null],
  },
  {
    name: "Helena",
    data: [372, null, null, null, 159, null],
    hours: [56, 42, 36, 47, 40, 23],
  },
  {
    name: "Claudio Z.",
    data: [322, null, null, null, null, null],
    hours: [null, null, null, null, null, null],
  },
  {
    name: "André",
    data: [null, 259, null, 220, 161, 331],
    hours: [44, 41, 46, 39, 42, 47],
  },
  {
    name: "Camila",
    data: [null, 213, 175, null, null, null],
    hours: [null, 38, 33, null, null, null],
  },
  {
    name: "Juan",
    data: [null, 194, null, null, null, null],
    hours: [null, null, null, null, null, null],
  },
  {
    name: "Jader T.",
    data: [null, null, 166, 261, null, null],
    hours: [44, null, 49, 46, 22, 34],
  },
  {
    name: "Ricardo L.",
    data: [null, null, null, 722, 123, null],
    hours: [null, null, null, null, null, null],
  },
  {
    name: "Vic",
    data: [null, null, null, 349, 160, null],
    hours: [null, null, null, 45, 20, null],
  },
  {
    name: "BoTina",
    data: [null, null, null, null, null, null],
    hours: [67, null, null, null, null, null],
  },
  {
    name: "Lucas N.",
    data: [null, null, null, null, null, null],
    hours: [null, null, 47, null, null, null],
  },
  {
    name: "Narumi",
    data: [null, null, null, null, 224, null],
    hours: [null, null, null, null, 41, 41],
  },
  {
    name: "Gabriel M.",
    data: [null, null, null, null, null, 261],
    hours: [null, null, null, null, null, null],
  },
  {
    name: "Jessica",
    data: [null, null, null, null, null, 144],
    hours: [null, null, null, null, null, null],
  },
];
