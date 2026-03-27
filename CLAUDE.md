# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc -b) then bundle for production
npm run preview   # Serve the production build locally
```

No linting or test commands are configured.

## Architecture

This is a single-page React + TypeScript application presenting an interactive academic project brief for an animated short film course ("Brief de Proyecto: Cortometraje Animado"). All UI content is in Spanish.

### Key layers

**Data (`src/data/brief.ts`)** — Single source of truth for all page content. Exports typed constants: `sections`, `deliverables`, `rubricCriteria`, `gradeScale`, `recommendations`, `technicalSpecs`, `courseInfo`. To change any visible text or structure, edit here.

**Types (`src/types.ts`)** — Six TypeScript interfaces used across the app: `BriefSection`, `Deliverable`, `RubricCriterion`, `Recommendation`, `GradeScale`, and the `LucideIcon` import alias.

**Root component (`src/App.tsx`)** — Owns all global state: dark/light theme (persisted to localStorage), mobile nav visibility, active section tracking via `IntersectionObserver`, reading progress percentage, and expanded accordion state. Renders all 7 page sections by mapping over the data layer.

**Components (`src/components/`)** — Eight presentational components that receive data and callbacks as props:
- `Section` — Generic wrapper with styled header
- `DeliverableCard` — Expandable accordion for each deliverable
- `RubricTable` / `MobileRubricCards` — Desktop table and mobile card views of the rubric (toggled by Tailwind breakpoints)
- `Sidebar` — Left nav with mobile slide-out overlay
- `ThemeToggle`, `PrintButton`, `ReadingProgress` — UI chrome

**Styling** — Tailwind CSS with a custom design system defined in `tailwind.config.js` (color tokens: `ink`, `navy`, `haze`, `warm`, `lime`, `midnight`; custom shadows and background patterns). Base CSS variables and animations are in `src/index.css`.

### Data flow

```
brief.ts → App.tsx (state + orchestration) → components (props only)
```

Components are stateless; all mutations happen in `App.tsx` and flow down as props. There are no API calls or external data sources.
