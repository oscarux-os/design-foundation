# Grid — oh.design

12-column grid on desktop, 6-column on mobile. Margins and gutters scale with the viewport. Max width 1440px — content centres beyond that.

**Contents:** [Scale](#grid-scale) · [Base structure](#base-structure) · [Column math](#column-math) · [Centering](#centering-content) · [Mobile breakpoints](#mobile-breakpoints----always-step-through) · [Rules](#rules)

---

## Grid scale

Five sizes from XS to XL. Margins and gutters grow with the viewport to maintain visual balance.

| Size | Viewport | Columns | Margin | Gutter | Tailwind |
|------|----------|---------|--------|--------|----------|
| **XS** | 320–479px | 6 | 20px | 12px | `px-5 gap-3` |
| **S** | 480–767px | 6 | 32px | 12px | `px-8 gap-3` |
| **M** | 768–991px | 12 | 40px | 16px | `px-10 gap-4` |
| **L** | 992–1199px | 12 | 80px | 28px | `px-20 gap-7` |
| **XL** | 1200–1440px | 12 | 100px | 32px | `px-24 gap-8` |
| **XXL** | 1440px+ | 12 | — | 32px | centred, `max-w-[1440px] mx-auto` |

---

## Base structure

The outer wrapper handles max-width and centring. The inner grid handles columns, margin and gutter — all responsive.

```tsx
// Outer container — always wrap pages in this
<div className="max-w-[1440px] mx-auto">

  // Inner grid — responsive margin and gutter
  <div className="
    grid grid-cols-6 md:grid-cols-12
    gap-3 md:gap-4 lg:gap-7 xl:gap-8
    px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24
  ">
    {/* content */}
  </div>

</div>
```

---

## Column math

Every row must fill all 12 columns. Never use `grid-cols-2` or `grid-cols-3` inside the 12-col layout — use explicit `col-span` per element.

| Items | col-span each |
|-------|--------------|
| 1 | `col-span-12` |
| 2 | `col-span-6` |
| 3 | `col-span-4` |
| 4 | `col-span-3` |
| asymmetric | `col-span-8` + `col-span-4` |

---

## Centering content

```
mobile  → col-span-6 (full width)
tablet  → md:col-start-2 md:col-span-10
desktop → lg:col-start-4 lg:col-span-6
```

```tsx
<div className="col-span-6 md:col-start-2 md:col-span-10 lg:col-start-4 lg:col-span-6">
  {/* centred content */}
</div>
```

---

## Mobile breakpoints — always step through

Never jump from 1-per-row directly to 3-per-row. Always step through breakpoints.

### 2 items: 1 → 2

```tsx
<div className="col-span-6 md:col-span-6">...</div>
<div className="col-span-6 md:col-span-6">...</div>
```

### 3 items: 1 → 2 → 3

```tsx
<div className="col-span-6 sm:col-span-3 md:col-span-4">...</div>
<div className="col-span-6 sm:col-span-3 md:col-span-4">...</div>
<div className="col-span-6 sm:col-span-3 md:col-span-4">...</div>
```

### 4 items: 1 → 2 → 4

```tsx
<div className="col-span-6 sm:col-span-3 md:col-span-3">...</div>
<div className="col-span-6 sm:col-span-3 md:col-span-3">...</div>
<div className="col-span-6 sm:col-span-3 md:col-span-3">...</div>
<div className="col-span-6 sm:col-span-3 md:col-span-3">...</div>
```

---

## Adapt to what you're building

The grid is a foundation, not a constraint. Depending on what a page or block needs, the grid may work differently:

- **Full-bleed sections** — some blocks (hero images, video, banners) intentionally break out of the margin and run edge-to-edge. Use negative margin or a separate full-width wrapper outside the grid.
- **Narrow content pages** — long-form text (articles, case studies) may want to stay centred at `col-span-6 lg:col-start-4` throughout rather than using the full 12 columns.
- **Dashboard or dense layouts** — tighter gutters or a different column count may make more sense. Deviate intentionally and document why.
- **Marketing blocks** — asymmetric layouts (`col-span-8` + `col-span-4`) often work better than equal splits for visual hierarchy.

When deviating from the base grid, keep the outer `max-w-[1440px] mx-auto` wrapper — that constraint should always stay.

---

## Rules

- **Always wrap pages in `max-w-[1440px] mx-auto`** — content must never exceed 1440px.
- **Margin and gutter are responsive** — use the full class string from the base structure above.
- **Never hardcode a fixed `gap-5` and `px-5`** — the scale is responsive now.
- **Never use `grid-cols-2` or `grid-cols-3`** inside the layout — always explicit `col-span`.
- **Content cards never narrower than ~280px on mobile** — force `col-span-6` if needed.
- **Never use `col-span-3` on mobile** for content cards.
- **Section separation** via spacing (`py-between-sections`) — not empty grid cells.
