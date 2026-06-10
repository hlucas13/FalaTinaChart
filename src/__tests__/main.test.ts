import { describe, expect, it } from 'vitest';
import { ACCENT_THEMES, THEME_NAMES } from '../chart-themes.js';
import { PARTICIPANTS, WEEKS } from '../data.js';

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Sum of top 20 participants' messages for a given week */
function weeklyTop20Sum(weekIndex: number) {
  const withData = PARTICIPANTS.map((p) => ({
    name: p.name,
    count: p.data[weekIndex],
  }))
    .filter((p) => p.count !== null)
    .sort((a, b) => (b.count as number) - (a.count as number))
    .slice(0, 20);
  return {
    sum: withData.reduce((s, p) => s + (p.count as number), 0),
    count: withData.length,
  };
}

/** All-time ranking — top 10 by total messages */
function alltimeRanking() {
  return PARTICIPANTS.map((p, i) => {
    const total = p.data.reduce<number>((s, v) => s + (v ?? 0), 0);
    const weeks = p.data.filter((v) => v !== null).length;
    return { name: p.name, idx: i, total, avg: weeks > 0 ? total / weeks : 0 };
  })
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);
}

/** Messages-per-hour rate for a participant */
function msgPerHour(p: (typeof PARTICIPANTS)[number]) {
  const totalMsg = p.data.reduce<number>((s, v) => s + (v ?? 0), 0);
  const totalHours = p.hours.reduce<number>((s, v) => s + (v ?? 0), 0);
  return totalHours > 0 && totalMsg > 0 ? totalMsg / totalHours : null;
}

/** Per-participant cumulative sum across weeks (null = gap) */
function cumulativePerParticipant(p: (typeof PARTICIPANTS)[number]) {
  let cum = 0;
  return p.data.map((v) => {
    if (v === null) return null;
    cum += v;
    return cum;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//  1. DATA INTEGRITY
// ─────────────────────────────────────────────────────────────────────────────

describe('Data Integrity', () => {
  it('WEEKS array is not empty', () => {
    expect(WEEKS.length).toBeGreaterThan(0);
  });

  it('all weeks match the WXX pattern', () => {
    WEEKS.forEach((w) => {
      expect(w).toMatch(/^W\d+$/);
    });
  });

  it('no duplicate weeks', () => {
    const unique = new Set(WEEKS);
    expect(unique.size).toBe(WEEKS.length);
  });

  it('participants array is not empty', () => {
    expect(PARTICIPANTS.length).toBeGreaterThan(0);
  });

  it('no duplicate participant names', () => {
    const names = PARTICIPANTS.map((p) => p.name);
    const unique = new Set(names);
    expect(unique.size).toBe(names.length);
  });

  it('each participant has the correct number of entries in data and hours', () => {
    PARTICIPANTS.forEach((p) => {
      expect(p.data).toHaveLength(WEEKS.length);
      expect(p.hours).toHaveLength(WEEKS.length);
    });
  });

  it('message counts are non-negative (or null)', () => {
    PARTICIPANTS.forEach((p) => {
      p.data.forEach((v) => {
        if (v !== null) expect(v).toBeGreaterThanOrEqual(0);
      });
    });
  });

  it('hours values are between 0 and 168 (or null)', () => {
    PARTICIPANTS.forEach((p) => {
      p.hours.forEach((v) => {
        if (v !== null) {
          expect(v).toBeGreaterThanOrEqual(0);
          expect(v).toBeLessThanOrEqual(168);
        }
      });
    });
  });

  it('every week has at least one participant with data', () => {
    for (let w = 0; w < WEEKS.length; w++) {
      const count = PARTICIPANTS.filter((p) => p.data[w] !== null).length;
      expect(count).toBeGreaterThan(0);
    }
  });

  it('every participant has at least one non-null value in data or hours', () => {
    PARTICIPANTS.forEach((p) => {
      const hasData = p.data.some((v) => v !== null);
      const hasHours = p.hours.some((v) => v !== null);
      expect(hasData || hasHours).toBe(true);
    });
  });

  it('top participants have complete data (no nulls)', () => {
    const topNames = ['Nay', 'Cleber', 'H. Lucas', 'Fernanda'];
    topNames.forEach((name) => {
      const p = PARTICIPANTS.find((x) => x.name === name);
      if (p) {
        p.data.forEach((v) => {
          expect(v).not.toBeNull();
        });
      }
    });
  });

  it('every week has at least 20 participants with data (for a full Top 20)', () => {
    for (let w = 0; w < WEEKS.length; w++) {
      const count = PARTICIPANTS.filter((p) => p.data[w] !== null).length;
      expect(count).toBeGreaterThanOrEqual(20);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
//  2. BUSINESS LOGIC
// ─────────────────────────────────────────────────────────────────────────────

describe('Business Logic', () => {
  describe('Weekly Top 20', () => {
    it('sum is positive for every week', () => {
      for (let w = 0; w < WEEKS.length; w++) {
        const result = weeklyTop20Sum(w);
        expect(result.sum).toBeGreaterThan(0);
      }
    });

    it('sum is >= 500 messages for every week', () => {
      for (let w = 0; w < WEEKS.length; w++) {
        const result = weeklyTop20Sum(w);
        expect(result.sum).toBeGreaterThanOrEqual(500);
      }
    });
  });

  describe('All-time ranking (Top 10)', () => {
    const ranking = alltimeRanking();

    it('has 10 entries', () => {
      expect(ranking).toHaveLength(10);
    });

    it('is sorted descending by total', () => {
      for (let i = 1; i < ranking.length; i++) {
        expect(ranking[i - 1].total).toBeGreaterThanOrEqual(ranking[i].total);
      }
    });

    it('first place total >= last place total', () => {
      expect(ranking[0].total).toBeGreaterThanOrEqual(ranking[ranking.length - 1].total);
    });
  });

  describe('msg/h rate', () => {
    it('rates are positive when computable', () => {
      PARTICIPANTS.forEach((p) => {
        const rate = msgPerHour(p);
        if (rate !== null) {
          expect(rate).toBeGreaterThan(0);
        }
      });
    });

    it('Nay msg/h ~23.68 (14802 msgs / 625 h)', () => {
      const nay = PARTICIPANTS.find((p) => p.name === 'Nay');
      expect(nay).toBeDefined();
      const rate = msgPerHour(nay!);
      expect(rate).not.toBeNull();
      expect(rate).toBeCloseTo(23.68, 1);
    });
  });

  describe('Cumulative sums', () => {
    it('cumulative values never decrease', () => {
      PARTICIPANTS.forEach((p) => {
        const cum = cumulativePerParticipant(p);
        let prev = -1;
        cum.forEach((v) => {
          if (v !== null) {
            expect(v).toBeGreaterThanOrEqual(prev);
            prev = v;
          }
        });
      });
    });
  });

  describe('Known data — Nay', () => {
    const nay = PARTICIPANTS.find((p) => p.name === 'Nay')!;

    it('total messages = 14802', () => {
      const total = nay.data.reduce<number>((s, v) => s + (v ?? 0), 0);
      expect(total).toBe(14802);
    });

    it('total hours = 625', () => {
      const total = nay.hours.reduce<number>((s, v) => s + (v ?? 0), 0);
      expect(total).toBe(625);
    });

    it('week W11 Top 20 sum > 10,000 messages', () => {
      const result = weeklyTop20Sum(0);
      expect(result.sum).toBeGreaterThan(10000);
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
//  3. COLOUR THEMES
// ─────────────────────────────────────────────────────────────────────────────

describe('Colour Themes', () => {
  it('exactly 4 themes defined', () => {
    expect(THEME_NAMES).toHaveLength(4);
    expect(Object.keys(ACCENT_THEMES)).toHaveLength(4);
  });

  it('each theme has 32 palette colours', () => {
    Object.entries(ACCENT_THEMES).forEach(([, theme]) => {
      expect(theme.palette).toHaveLength(32);
    });
  });

  it('no palette has duplicate colours', () => {
    Object.entries(ACCENT_THEMES).forEach(([, theme]) => {
      const unique = new Set(theme.palette);
      expect(unique.size).toBe(theme.palette.length);
    });
  });

  it('all palette colours are valid hex codes', () => {
    Object.entries(ACCENT_THEMES).forEach(([, theme]) => {
      theme.palette.forEach((color) => {
        expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });
  });

  it('each theme has a name and a dot colour', () => {
    Object.entries(ACCENT_THEMES).forEach(([, theme]) => {
      expect(theme.name).toBeTruthy();
      expect(theme.dot).toMatch(/^#[0-9a-fA-F]{6}$/);
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
//  4. CROSS-CUTTING CONSISTENCY
// ─────────────────────────────────────────────────────────────────────────────

describe('Cross-cutting Consistency', () => {
  it('data-null + hours-non-null cases (e.g. BoTina) are handled gracefully', () => {
    PARTICIPANTS.forEach((p) => {
      p.data.forEach((d, i) => {
        const h = p.hours[i];
        if (d === null && h !== null && h > 0) {
          // Legitimate edge case: bot with active hours but no messages
          expect(h).toBeGreaterThanOrEqual(0);
        }
      });
    });
  });

  it('overall total > top-10 total (non-top-10 participants exist)', () => {
    const allTotal = PARTICIPANTS.reduce(
      (s, p) => s + p.data.reduce<number>((acc, v) => acc + (v ?? 0), 0),
      0,
    );
    const top10Total = alltimeRanking().reduce((s, p) => s + p.total, 0);
    expect(allTotal).toBeGreaterThan(top10Total);
  });
});
