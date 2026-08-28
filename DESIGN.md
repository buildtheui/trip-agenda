---
name: Euro Trip Calendar
description: A trip itinerary as a station departure board on warm paper
colors:
  primary: "#c0562f"
  primary-deep: "#9c3f1e"
  board: "#0d0c0b"
  board-deep: "#080707"
  cell: "#1c1a17"
  flap-cream: "#f3eddf"
  paper: "#f0e9d9"
  sheet: "#f7f2e5"
  plate: "#faf8f1"
  ink: "#251f18"
  ink-soft: "#6e6252"
  rule: "#d9cdb6"
  rule-deep: "#c4b694"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 750
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 650
    letterSpacing: "0.12em"
rounded:
  focus: "2px"
  sm: "3px"
  md: "4px"
  chip: "6px"
  lg: "8px"
  xl: "12px"
  round: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  flap-cell:
    backgroundColor: "{colors.cell}"
    textColor: "{colors.flap-cream}"
    rounded: "{rounded.sm}"
    height: "2.1em"
  flap-cell-lit:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.board}"
    rounded: "{rounded.sm}"
    height: "2.1em"
  destination-plate:
    backgroundColor: "#faf8f1"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  board-panel:
    backgroundColor: "{colors.board}"
    rounded: "{rounded.xl}"
  paper-ledger:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
---

# Design System: Euro Trip Calendar

## Overview

**Creative North Star: "The Departure Board"**

The itinerary reads as a station departure board hung over a traveler's warm-paper desk. Days are rows of cream split-flap cells on matte black; the trip's numbers live in a paper ledger beside it, ruled by hairlines and dotted leaders. The whole system is the interface equivalent of squinting up at a Solari board in a lobby: dark machinery above, paper and ink for reading, one burnt-terracotta tag so your eye always lands on the day in hand.

The system refuses the purple-gradient card-grid that AI travel apps default to, and refuses the photo-hero travel-brochure. Everything is type, rules, and cells — no photography, no gradients, no glass. Density is deliberate and honest: the board rows stay tall enough to read at a glance and short enough to scan fifteen days like a departure list.

**Key Characteristics:**

- Station band on top: white trip plate (like a board header); the board's authority is the plate alone.
- Day rows = flap cells in cream on near-black, each row ending in weather + price; the city rides a white destination plate.
- One terracotta accent across the whole app: selected day, budget total, primary action. Nothing else gets it.
- Paper pages: warm ground, hairline rules, dotted leaders, tabular numerals.
- The day opens like a flap: the row flips up and a paper detail sheet unfolds with activities, climate, lodging, transport, tips.

## Colors

Warm paper field, near-black board, a single terracotta tag. The palette splits cleanly into two surfaces: the board (dark, mechanical, cream lettering) and the paper (warm, ink, ruled).

### Primary

- **Terracotta Tag** (#c0562f) + **Terracotta Deep** (#9c3f1e): the one accent. Used on the selected day's DÍA cell, the budget total, section icons, focus rings, map route, and primary buttons. Rare is the point.
- **Terracotta Soft** (#e08756): the same hue for text on black (the price cell on the board).

### Neutral

- **Board** (#0d0c0b) / **Board Deep** (#080707): the station band and board panel.
- **Cell** (#1c1a17): each flap tile's ground.
- **Flap Cream** (#f3eddf): lettering on the board and dark state text.
- **Paper** (#f0e9d9): the page ground.
- **Sheet** (#f7f2e5): raised paper surfaces (day sheet, ledger).
- **Destination Plate** (#faf8f1): white plate for the trip plate and city names.
- **Ink** (#251f18): primary text on paper.
- **Ink Soft** (#6e6252): secondary text on paper.
- **Rule** (#d9cdb6) / **Rule Deep** (#c4b694): hairline dividers and dotted leaders.

### Named Rules

**The One Tag Rule.** Terracotta marks exactly three things on any screen: the selected day, the budget total, and the primary action (the MAPA cell). If a fourth element wants the accent, the design is wrong.

**The Two-Surface Rule.** Everything is either board (dark, cream letters, tiny rounding) or paper (warm, ink, hairline rules). No third surface: no white floating cards, no tinted wells between the two.

## Typography

**Display Font:** Archivo (variable, with ui-sans-serif / system-ui fallback)
**Body Font:** Archivo
**Label Font:** Archivo (uppercase, tracked)

**Character:** One grotesque family doing everything — the board's compressed bold caps, the ledger's tabular numerals, the sheets' body copy. It's a working-station voice: no decorative serif, no mono for its own sake.

### Hierarchy

- **Board lettering** (750, 11-14px, caps or tabular): days, dates, cells, tags — the voice of the machinery.
- **Headline** (750, 20px, -0.01em): sheet titles, trip title.
- **Ledger digits** (750, 36px, tabular-nums): duration, budget total.
- **Body** (400, 13-14px, 1.5): activity notes, tips, transport lines.
- **Label** (650, 10.5px, +0.12em, uppercase): section eyebrows in the ledger and sheets.

### Named Rules

**The Tabular Rule.** Every numeral in a data position — budget, temperature, duration, clock — renders tabular and in the same family weight 650+. Numbers never wobble between rows.

## Layout

- Page: warm paper ground; the app is a single working column: band → board + ledger.
- Desktop: board and ledger sit in a 2-column grid (`1fr 330px`), ledger sticky. The board is generous: rows are 2.1em flap cells with 4-6px gaps, like panel margins on a real board.
- Mobile: single column — band (plate + clock wrap), then board rows (each row wraps to its own lines), then the ledger, then any open day sheet.
- Rhythm: tight groups, generous separation. Board rows separated by 6px; paper sections by hairline dividers with ~16px padding; more space above a section heading than below.
- The day sheet opens inside the board on a paper card with 8px radius, 18px padding, and grid gap `lg:grid-cols-2` for detail content.

## Elevation & Depth

Real depth is mostly absent by design, then earned in two places: the board floats over paper (a long soft shadow that says "hung on the wall"), and paper sheets slip under it. Flap cells get an inset sheen — a top catch-light and a bottom cast-shadow, split at the center line — instead of drop shadows, so they read as hinged tiles rather than buttons.

### Shadow Vocabulary

- **Board halo** (`0 30px 70px -24px rgba(32,22,10,0.45)`): every board panel.
- **Paper slip** (`0 14px 30px -16px rgba(20,14,8,0.5)`): the open day sheet.

### Named Rules

**The No-Glow Rule.** Nothing on the page glows: no gradient text, no ambient colored halos, no blurred accent shadows, no self-moving decorative elements.

## Shapes

Two roundings only: the board's 3px tile rounding and 12px panel rounding; paper's 8px card rounding, 6px chip rounding, and 4px plate rounding; 2px is reserved for focus rings; the single perfectly round element in the system is the Leaflet map marker (9999px). Everything else is square-ish — it is machinery and stationery, not plastic UI. Cells are 3px, plates 3px, the LED clock 4px, boards 12px.

Flap cells are the signature geometry: a tile with a horizontal split at 50%, a top-half highlight and a bottom-half shadow, so each cell reads as two hinged halves even when it isn't flipping.

## Components

### The Station Band (TripSelector)

- **Style:** full-width matte-black band (`border-bottom 1px #000`). Left: white trip plate (4px radius, subtle bottom-edge, plane glyph, chevron). The band is pure authority: plate on black, nothing else.
- **State:** plate hover brightens to white; dropdown (role listbox) opens under the band as a black panel with a white active row and flag + date-range + day-count rows.

### Flap Cell (DayFace row)

- **Style:** dark tile (3px radius) with center-split inset shading; cream 750-weight characters; the city renders as a white destination plate between date and weather.
- **State:** a row recedes (gate 42% opacity) when its day is past and the trip still has future days; "today" gets the terracotta lit DÍA cell. Selecting a row flips the whole face up (`rotateX -72deg`, 300ms) and unfolds the paper day sheet below (grid-rows transition, 320ms).

### The Day Sheet (Calendar detail)

- **Style:** paper card (8px radius, hairline border) with terracotta DÍA tag, title, city/date line, then a 2-column grid: activities (time chip + notes) and climate/lodging/transport/tips. Sections use 10.5px tracked uppercase labels with small terracotta icons.

### The Paper Ledger (TripSummary)

- **Style:** paper surface (8px radius, no glow) divided by hairlines. Headline numbers are 36px tabular. Dotted leaders connect labels to values. Chips: flat paper-chip, 6px, hairline border.
- **People counter:** stepper with − / + paper buttons and a bordered number input.
- **Time distribution:** single terracotta bar, segments at alternating opacity, legend rows with leader rules.

### Buttons & Map

- **MAPA cell:** board-styled cell (dark, 3px, cream 11px caps) — hover fills terracotta with black text.
- **Dialog (DayMapModal):** full-screen board; black band header with title + close cell; Leaflet map; terracotta dashed route; cream markers with dark or terracotta rings (hotel); paper popup cards.

## Do's and Don'ts

### Do:

- **Do** put every quantitative fact in tabular numerals (Archivo 650+, `font-variant-numeric: tabular-nums`).
- **Do** keep one terracotta tag per screen, and make it the selected day when one exists.
- **Do** render board content on the board surface and paper content on paper; never mix.
- **Do** gutter the day sheet on mobile (full width, 18px padding) and split it into two columns at `lg`.
- **Do** use the center-split inset treatment (top highlight + bottom shadow at 50%) on any board tile.
- **Do** run three radii maximum: 3px tiles, 8px paper, 12px board panels.

### Don't:

- **Don't** use gradients, purple, blue accent colors, or glass/backdrop blur — the prior rendition's look is the anti-reference.
- **Don't** give gray or shadow to paper text: secondary text on paper is Ink Soft (#6e6252), never gray.
- **Don't** animate anything beyond the single authorized moment: the flap-open; no scroll-glow, no per-element entrances, no self-running clocks or blinking indicators.
- **Don't** use rounded-full pills or floating white cards — the world is square tile and ruled paper.
- **Don't** colorize categories or countries with per-item hues; the accent is one, and the distribution bar shows tonal steps of it.
