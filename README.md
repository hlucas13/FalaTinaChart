# Fala Tina

Interactive line chart for the **Fala Tina** WhatsApp group's weekly message stats — built with a **Liquid Glass** aesthetic inspired by physical light refraction.

**[→ Open Fala Tina](https://hlucas13.github.io/FalaTinaChart/)**

---

## Features

- **Interactive line chart** — each participant is a coloured line; hover any point to see a liquid-glass tooltip showing the name and message count for that week
- **7 view tabs** — switch between different data perspectives:
  - **Messages** — line chart of total messages per week (default view)
  - **Active Hours** — line chart of active hours per week (counts distinct hours where the participant sent at least one message)
  - **Efficiency** — scatter plot of total messages (Y axis) vs total active hours (X axis), aggregated across all weeks per participant; higher and leftward points mean higher msg/h; tooltip shows name, totals, and average msg/h
  - **Intensity** — heatmap of msg/h per participant and week; warm colours indicate high rate, cool colours indicate low; "Average" column with the overall rate
  - **Proportion** — stacked horizontal bars showing active hours (coloured) vs inactive hours (grey) out of a 168-hour week
  - **Top 20 Summary** — single line with the total messages of the top 20 participants each week; ideal for comparing busy vs quiet weeks
  - **Cumulative** — running total lines per user week by week; gaps appear when a user has no data
- **msg/h metric** — messages-per-hour rate appears in the tooltip of Messages and Active Hours charts, in the Efficiency scatter plot, and in the ranking tables (Top 10 & Top 20) on every tab when both data points exist
- **Per-participant tooltip** — hovering the chart shows the tooltip only for the nearest line; all other lines remain visible
- **Click to focus** — click a chart point to lock the highlight on that line (others turn semi-transparent); click the same point or an empty area to restore full opacity
- **Clickable legend** — click a legend pill to show or hide a participant; hover it to highlight that participant alone
- **Liquid Glass tooltip** — the tooltip container uses the same physical glass effect as the dock and panels
- **Export PNG** — click **Export** in the dock to open the export menu; choose **With tables** (chart + legend + Top 10 & Top 20) or **Without tables** (chart + legend only); the PNG is saved with the current theme's background and colours; a brief confirmation appears after saving
- **Colour themes** — 4 accent palettes (WhatsApp green, Oceano blue, Uva purple, Pôr do Sol orange), each with 32 distinct chart-line colours ordered to contrast against the theme's background, in both light and dark mode
- **Dark / light mode** — full toggle with Liquid Glass animated transition; follows system preference automatically
- **Frosted glass** — enables the blur effect behind panels and the dock (Liquid Glass frosted)
- **Show / hide legend** — toggle in Settings to hide the participant bar and expand the chart
- **Saved preferences** — dark mode, frosted glass, colour palette, legend visibility, and ranking panel state are stored in the browser (`localStorage`) and restored automatically on next visit
- **Help & Wiki** — built-in panel in Settings with usage instructions
- **ESC key** — closes any open menu or the help panel without clicking
- **Export notification** — shows a brief confirmation after saving the PNG
- **Ranking tables** — right-side panel with **All-time Top 10** (total messages/hours + weekly average + msg/h) and **Weekly Top 20** in a navigable carousel with arrows; the Top 20 shows the change from the previous week, ▲/▼ position arrows, a **NEW** badge for new entries, and msg/h per row
- **Hide / show ranking** — button in the page header (visible only in landscape) to collapse and expand the ranking panel with a smooth animation
- **Responsive** — works on portrait screens; the ranking panel stacks below the chart in portrait
- **Static site** — runs on GitHub Pages with no server needed; 100% CDN

---

## Dock buttons

| Button       | Visibility | Action                                                                     |
| ------------ | ---------- | -------------------------------------------------------------------------- |
| **Export**   | Always     | Opens menu with **With tables** and **Without tables**; saves PNG directly |
| **Themes**   | Always     | Opens a 4-theme colour picker                                              |
| **Settings** | Always     | Dark mode, frosted glass, legend, Help                                     |

> **Panel button** — in the page header (landscape only) there is a double-panel button that collapses/expands the ranking sidebar with a smooth animation.

---

## How to update the data

1. Open `src/data.ts`
2. Add the new week to the `WEEKS` array:

   ```typescript
   export const WEEKS: string[] = ["W10", "W11", "W12", "W13"];
   ```

3. For each participant in `PARTICIPANTS`, add the new value to the `data` (messages) and `hours` (active hours) arrays, at the same position as `WEEKS`. Use `null` if the participant sent no messages or has no data for that week:

   ```typescript
   { name: 'Nay', data: [2392, 2883, 2101, 1980], hours: [74, 82, 75, 68] },
   ```

4. To add a new participant, append a new entry:

   ```typescript
   { name: 'New Participant', data: [null, null, null, 300], hours: [null, null, null, 20] },
   ```

5. **Active hours**: count one hour if the participant sent at least one message within the XX:00–XX:59 window. E.g. 2 msgs at 10:20 and 1 msg at 11:30 = 2 active hours (slots 10h–10h59 and 11h–11h59).

6. Commit and push to the `main` branch:

   ```bash
   git add src/data.ts
   git commit -m "feat(data): add W22"
   git push
   ```

7. **GitHub Actions** runs automatically:
   - **TypeScript check** (`tsc --noEmit`)
   - **Lint** (`eslint`)
   - **Tests** (`vitest run`)
   - **Build** (`vite build`)
   - **Deploy** to GitHub Pages

   > Track progress under **Actions** in the repository.

8. The site is published at `https://hlucas13.github.io/FalaTinaChart/` — no local build or bundle commit required.

---

## Tech Stack

### Runtime (CDN — no local installation)

| Library                              | Version | Purpose                            |
| ------------------------------------ | ------- | ---------------------------------- |
| [Chart.js](https://www.chartjs.org/) | 4       | Line chart with tooltip and legend |
| [GSAP](https://gsap.com/)            | 3       | Liquid Glass toggle animations     |

### Build & Dev tooling (local, not included in the bundle)

| Tool                                                                                  | Purpose                                                                      |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Vite](https://vitejs.dev/)                                                           | Dev server with HMR and production bundler                                   |
| [Vitest](https://vitest.dev/)                                                         | Unit testing (30 tests covering data integrity, business logic & themes)     |
| [TypeScript](https://www.typescriptlang.org/)                                         | Type checking (`tsc --noEmit`)                                               |
| [ESLint](https://eslint.org/) + [`@typescript-eslint`](https://typescript-eslint.io/) | Static analysis for all `.ts` files                                          |
| [Prettier](https://prettier.io/)                                                      | Code formatting                                                              |
| [Husky](https://typicode.github.io/husky/)                                            | Git hooks: lint-staged on `pre-commit`, commitlint on `commit-msg`           |
| [lint-staged](https://github.com/lint-staged/lint-staged)                             | On commit, runs ESLint + Prettier only on staged files                       |
| [commitlint](https://commitlint.js.org/)                                              | Enforces [Conventional Commits](https://www.conventionalcommits.org/) format |

---

## Liquid Glass

The UI (dock, menus, toggles and tooltip) is built on the same physics-based **Liquid Glass** system from [Prisma.md](https://github.com/hlucas13/Prisma.md).

The implementation follows the refraction principles described in **[Liquid Glass — CSS & SVG](https://kube.io/blog/liquid-glass-css-svg/)**:

- **Snell's refraction** — each glass-surface pixel displaces the background based on the refraction angle derived from the surface normal (refractive index 1.45).
- **Convex height profile** — the function `h(t) = √t` models a curved glass lens.
- **SVG displacement maps** — `<feImage>` + `<feDisplacementMap>` pipeline applies per-pixel displacement in real time.
- **Two filters** — `#glass-distortion-dock` (dock pill) and `#glass-distortion-panel` (menus and tooltip).

---

## Project Structure

```
FalaTina/
├── src/
│   ├── __tests__/
│   │   └── main.test.ts    # Vitest tests (data integrity, business logic, themes)
│   ├── chart-themes.ts      # Colour theme definitions (4 palettes)
│   ├── data.ts              # Dataset — weeks and participants
│   ├── glass-distortion.ts  # Liquid Glass engine (physical refraction)
│   ├── globals.d.ts         # Type declarations for CDN globals (Chart.js, GSAP)
│   └── main.ts              # Core logic — chart, dock, themes, export
├── dist/                    # Production build output (gitignored)
├── index.html
├── vite.config.ts           # Vite + Vitest configuration
├── style.css
├── package.json
├── tsconfig.json
├── eslint.config.cjs
├── commitlint.config.cjs
├── .github/
│   └── workflows/
│       ├── ci.yml           # CI: typecheck → lint → test → build
│       └── deploy.yml       # CD: typecheck → lint → test → build → deploy Pages
├── LICENSE
└── README.md
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Run tests
npm test

# Full pipeline (typecheck + lint + test)
npm run test:full

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions. Pushing to `main`:

1. The **Deploy** workflow triggers automatically
2. It runs typecheck, lint, tests, and build
3. The `dist/` folder is published to GitHub Pages

### One-time repository setup

1. Go to **Settings → Pages** of the `FalaTinaChart` repository
2. Under **Source**, select **GitHub Actions**
3. Done — subsequent pushes will trigger automatic deployment

> The site is available at `https://hlucas13.github.io/FalaTinaChart/`
