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
  "W18",
  "W19",
  "W20",
  "W21",
];

export const PARTICIPANTS: Participant[] = [
  {
    name: "Nay",
    data: [2392, 2883, 2101, 1663, 1166, 1011, 589, 511, 929, 945, 432],
    hours: [74, 82, 75, 74, 50, 49, 41, 34, 38, 46, 40],
  },
  {
    name: "Thay",
    data: [283, 1666, 1853, 1234, 416, 1392, 356, 232, 773, 477, null],
    hours: [null, 62, 72, 63, 33, 48, 35, 27, 31, 19, null],
  },
  {
    name: "Cleber",
    data: [1033, 1301, 1719, 1202, 633, 765, 527, 254, 202, 440, 238],
    hours: [72, 68, 78, 85, 54, 65, 60, 32, 32, 39, 32],
  },
  {
    name: "Marc R.",
    data: [937, 1199, 974, 828, 165, 344, 129, 222, 167, 177, 121],
    hours: [55, 54, 51, 49, null, null, null, 21, null, 23, null],
  },
  {
    name: "H. Lucas",
    data: [900, 1171, 769, 1081, 868, 677, 460, 87, 193, 291, 154],
    hours: [73, 79, 63, 81, 63, 56, 56, 23, 28, 39, 23],
  },
  {
    name: "Fernanda",
    data: [838, 972, 796, 522, 397, 879, 352, 338, 542, 331, 353],
    hours: [84, 86, 77, 82, 63, 89, 58, 60, 69, 59, 42],
  },
  {
    name: "Domi",
    data: [730, 827, 512, 443, 182, 521, 77, null, null, null, null],
    hours: [50, 70, 58, 50, 22, 54, null, null, null, null, null],
  },
  {
    name: "Italo G.",
    data: [884, 405, 711, 785, 183, 561, 556, 251, 269, 197, 157],
    hours: [67, 45, 52, 56, 26, 65, 66, 42, 50, 34, 34],
  },
  {
    name: "Gabriel B.",
    data: [476, 440, 720, 545, 207, 326, 294, 116, null, null, null],
    hours: [60, 51, 65, 56, 33, 42, 39, 26, null, null, null],
  },
  {
    name: "Ivan F.",
    data: [486, 657, null, null, null, null, null, null, null, null, null],
    hours: [52, 44, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Lexi",
    data: [null, 607, 289, null, 194, 208, 98, 290, 162, 423, 89],
    hours: [null, 63, 41, null, 34, 38, 24, 34, 26, 35, 18],
  },
  {
    name: "Paolo P.",
    data: [412, 614, 349, 276, 131, 336, null, null, null, null, 109],
    hours: [61, 82, 65, 52, 26, 64, null, null, null, null, 28],
  },
  {
    name: "Leticia M.",
    data: [411, 542, 218, 394, 348, 516, 296, 94, 170, 143, 56],
    hours: [66, 52, null, 57, 53, 66, 51, 36, 53, 46, 16],
  },
  {
    name: "C",
    data: [null, 230, 509, 320, null, 257, null, null, null, null, null],
    hours: [null, null, 74, 51, null, 26, 19, null, null, null, null],
  },
  {
    name: "Jaime T.",
    data: [null, null, 405, 414, null, 137, null, null, null, null, 67],
    hours: [null, null, 41, 54, 33, 27, null, null, null, null, 21],
  },
  {
    name: "Ana C.",
    data: [407, null, 309, 707, 487, 502, 202, 123, 129, 160, 128],
    hours: [52, 36, 41, 80, 49, 61, 42, 20, 31, 25, 29],
  },
  {
    name: "Vitor V.",
    data: [591, null, null, null, null, null, null, null, null, null, null],
    hours: [45, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "L E O N V R D X",
    data: [493, 443, 380, 432, 288, 233, 160, null, null, null, null],
    hours: [76, 64, 58, 68, 52, 50, 35, null, null, null, null],
  },
  {
    name: "Beatriz A.",
    data: [447, null, 170, null, null, null, null, null, null, null, null],
    hours: [39, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Kari",
    data: [434, 305, 247, 526, 245, 268, 176, null, 402, 301, 226],
    hours: [null, 39, null, 57, 37, 34, null, null, 49, 37, 30],
  },
  {
    name: "Delboni",
    data: [409, 343, null, null, null, null, null, null, null, null, null],
    hours: [46, 56, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Helena",
    data: [372, null, null, null, 159, null, null, 71, 140, 119, 102],
    hours: [56, 42, 36, 47, 40, 23, 30, 29, 28, 35, 25],
  },
  {
    name: "Claudio Z.",
    data: [322, null, null, null, null, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "André",
    data: [null, 259, null, 220, 161, 331, 203, 124, 233, 282, 160],
    hours: [44, 41, 46, 39, 42, 47, 40, 34, 39, 45, 38],
  },
  {
    name: "Camila",
    data: [null, 213, 175, null, null, null, null, 50, null, null, null],
    hours: [null, 38, 33, null, null, null, null, null, null, null, 12],
  },
  {
    name: "Juan",
    data: [null, 194, null, null, null, null, null, 169, 196, 496, 233],
    hours: [null, null, null, null, null, null, null, null, null, 23, 23],
  },
  {
    name: "Jader T.",
    data: [null, null, 166, 261, null, null, null, 92, 156, 184, 77],
    hours: [44, null, 49, 46, 22, 34, 30, 35, 37, 45, 22],
  },
  {
    name: "Ricardo L.",
    data: [null, null, null, 722, 123, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Vic",
    data: [null, null, null, 349, 160, null, 85, null, null, null, null],
    hours: [null, null, null, 45, 20, null, 22, null, null, null, null],
  },
  {
    name: "BoTina",
    data: [null, null, null, null, null, null, null, null, null, null, null],
    hours: [67, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Lucas N.",
    data: [null, null, null, null, null, null, null, null, null, null, null],
    hours: [null, null, 47, null, null, null, null, null, null, null, 17],
  },
  {
    name: "Narumi",
    data: [null, null, null, null, 224, null, null, 59, null, null, 64],
    hours: [null, null, null, null, 41, 41, 27, 22, 29, 33, 36],
  },
  {
    name: "Gabriel M.",
    data: [null, null, null, null, null, 261, 168, null, null, null, null],
    hours: [null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Jessica",
    data: [null, null, null, null, null, 144, 178, null, null, 97, null],
    hours: [null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Fernando S.",
    data: [null, null, null, null, null, null, 155, null, 228, 285, 179],
    hours: [null, null, null, null, null, null, null, 19, 31, 38, 25],
  },
  {
    name: "Guilherme",
    data: [null, null, null, null, null, null, 109, null, null, null, null],
    hours: [null, null, null, null, null, null, 24, null, null, null, null],
  },
  {
    name: "Bia",
    data: [null, null, null, null, null, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, 22, null, null, null, null],
  },
  {
    name: "Lucas",
    data: [null, null, null, null, null, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, 21, 16, null, null, null],
  },
  {
    name: "Luigor L.",
    data: [null, null, null, null, null, null, null, 188, 198, 229, null],
    hours: [null, null, null, null, null, null, null, null, 24, 23, null],
  },
  {
    name: "Bernardo",
    data: [null, null, null, null, null, null, null, 111, 168, null, null],
    hours: [null, null, null, null, null, null, null, null, 31, null, null],
  },
  {
    name: "Rafael M.",
    data: [null, null, null, null, null, null, null, 53, null, 84, null],
    hours: [null, null, null, null, null, null, null, 20, 24, null, 12],
  },
  {
    name: "Renan",
    data: [null, null, null, null, null, null, null, null, null, null, null],
    hours: [null, null, null, null, null, null, null, 17, 18, 20, null],
  },
  {
    name: "Matheus B.",
    data: [null, null, null, null, null, null, null, null, 122, null, null],
    hours: [null, null, null, null, null, null, null, 16, 26, null, null],
  },
  {
    name: "I love u",
    data: [null, null, null, null, null, null, null, null, 254, null, null],
    hours: [null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: "Bader",
    data: [null, null, null, null, null, null, null, null, null, 171, 50],
    hours: [null, null, null, null, null, null, null, null, null, 20, null],
  },
  {
    name: "Melvino N.",
    data: [null, null, null, null, null, null, null, null, null, null, 100],
    hours: [null, null, null, null, null, null, null, null, null, null, null],
  },
];
