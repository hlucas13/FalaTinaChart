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

export const WEEKS: string[] = [
  "W11",
  "W12",
  "W13",
  "W14",
  "W15",
  "W16",
  "W17",
];

export const PARTICIPANTS: Participant[] = [
  {
    name: "Nay",
    data: [2392, 2883, 2101, 1663, 1166, 1011, 589],
    hours: [74, 82, 75, 74, 50, 49, 41],
  },
  {
    name: "Thay",
    data: [283, 1666, 1853, 1234, 416, 1392, 356],
    hours: [null, 62, 72, 63, 33, 48, 35],
  },
  {
    name: "Cleber",
    data: [1033, 1301, 1719, 1202, 633, 765, 527],
    hours: [72, 68, 78, 85, 54, 65, 60],
  },
  {
    name: "Marc R.",
    data: [937, 1199, 974, 828, 165, 344, 129],
    hours: [55, 54, 51, 49, null, null, null],
  },
  {
    name: "H. Lucas",
    data: [900, 1171, 769, 1081, 868, 677, 460],
    hours: [73, 79, 63, 81, 63, 56, 56],
  },
  {
    name: "Fernanda",
    data: [838, 972, 796, 522, 397, 879, 352],
    hours: [84, 86, 77, 82, 63, 89, 58],
  },
  {
    name: "Domi",
    data: [730, 827, 512, 443, 182, 521, 77],
    hours: [50, 70, 58, 50, 22, 54, null],
  },
  {
    name: "Italo G.",
    data: [884, 405, 711, 785, 183, 561, 556],
    hours: [67, 45, 52, 56, 26, 65, 66],
  },
  {
    name: "Gabriel B.",
    data: [476, 440, 720, 545, 207, 326, 294],
    hours: [60, 51, 65, 56, 33, 42, 39],
  },
  {
    name: "Ivan F.",
    data: [486, 657, null, null, null, null, null],
    hours: [52, 44, null, null, null, null],
  },
  {
    name: "Lexi",
    data: [null, 607, 289, null, 194, 208, 98],
    hours: [null, 63, 41, null, 34, 38, 24],
  },
  {
    name: "Paolo P.",
    data: [412, 614, 349, 276, 131, 336, null],
    hours: [61, 82, 65, 52, 26, 64, null],
  },
  {
    name: "Leticia M.",
    data: [411, 542, 218, 394, 348, 516, 296],
    hours: [66, 52, null, 57, 53, 66, 51],
  },
  {
    name: "C",
    data: [null, 230, 509, 320, null, 257, null],
    hours: [null, null, 74, 51, null, 26, 19],
  },
  {
    name: "Jaime T.",
    data: [null, null, 405, 414, null, 137, null],
    hours: [null, null, 41, 54, 33, 27, null],
  },
  {
    name: "Ana C.",
    data: [407, null, 309, 707, 487, 502, 202],
    hours: [52, 36, 41, 80, 49, 61, 42],
  },
  {
    name: "Vitor V.",
    data: [591, null, null, null, null, null, null],
    hours: [45, null, null, null, null, null, null],
  },
  {
    name: "L E O N V R D X",
    data: [493, 443, 380, 432, 288, 233, 160],
    hours: [76, 64, 58, 68, 52, 50, 35],
  },
  {
    name: "Beatriz A.",
    data: [447, null, 170, null, null, null, null],
    hours: [39, null, null, null, null, null, null],
  },
  {
    name: "Kari",
    data: [434, 305, 247, 526, 245, 268, 176],
    hours: [null, 39, null, 57, 37, 34, null],
  },
  {
    name: "Delboni",
    data: [409, 343, null, null, null, null, null],
    hours: [46, 56, null, null, null, null, null],
  },
  {
    name: "Helena",
    data: [372, null, null, null, 159, null, null],
    hours: [56, 42, 36, 47, 40, 23, 30],
  },
  {
    name: "Claudio Z.",
    data: [322, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, null],
  },
  {
    name: "André",
    data: [null, 259, null, 220, 161, 331, 203],
    hours: [44, 41, 46, 39, 42, 47, 40],
  },
  {
    name: "Camila",
    data: [null, 213, 175, null, null, null, null],
    hours: [null, 38, 33, null, null, null, null],
  },
  {
    name: "Juan",
    data: [null, 194, null, null, null, null, null],
    hours: [null, null, null, null, null, null, null],
  },
  {
    name: "Jader T.",
    data: [null, null, 166, 261, null, null, null],
    hours: [44, null, 49, 46, 22, 34, 30],
  },
  {
    name: "Ricardo L.",
    data: [null, null, null, 722, 123, null, null],
    hours: [null, null, null, null, null, null, null],
  },
  {
    name: "Vic",
    data: [null, null, null, 349, 160, null, 85],
    hours: [null, null, null, 45, 20, null, 22],
  },
  {
    name: "BoTina",
    data: [null, null, null, null, null, null, null],
    hours: [67, null, null, null, null, null, null],
  },
  {
    name: "Lucas N.",
    data: [null, null, null, null, null, null, null],
    hours: [null, null, 47, null, null, null, null],
  },
  {
    name: "Narumi",
    data: [null, null, null, null, 224, null, null],
    hours: [null, null, null, null, 41, 41, 27],
  },
  {
    name: "Gabriel M.",
    data: [null, null, null, null, null, 261, 168],
    hours: [null, null, null, null, null, null, null],
  },
  {
    name: "Jessica",
    data: [null, null, null, null, null, 144, 178],
    hours: [null, null, null, null, null, null, null],
  },
  {
    name: "Fernando S.",
    data: [null, null, null, null, null, null, 155],
    hours: [null, null, null, null, null, null, null],
  },
  {
    name: "Guilherme",
    data: [null, null, null, null, null, null, 109],
    hours: [null, null, null, null, null, null, 24],
  },
  {
    name: "Bia",
    data: [null, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, 22],
  },
  {
    name: "Lucas",
    data: [null, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, 21],
  },
];
