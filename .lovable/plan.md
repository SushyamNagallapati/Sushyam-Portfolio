## Plan: Continuous scrolling tech stack strip

Replace the static wrapped chip list in `HeroContent.tsx` with a continuous, infinitely-scrolling marquee strip of tech pills (icon + label), themed to match the existing site (semantic tokens, neobrutalist border + Tailwind), with edge fades and hover-to-pause.

### What changes

1. **New component** `src/components/TechStackStrip.tsx` (TypeScript port of the uploaded JSX)
   - Tech list (in user-specified order) using devicon CDN icons:
     React, TypeScript, JavaScript, Python, Node.js, FastAPI, LangGraph*, OpenAI API*, RAG*, Tailwind CSS, REST APIs*, SQLite
     - Items marked * have no devicon — render text-only pill (no icon) for those.
   - Duplicate array for seamless loop; `requestAnimationFrame` translateX animation; hover pauses.
   - Themed with Tailwind classes using existing semantic tokens (`bg-background`, `text-foreground`, `border-border`, `nb-border`, `shadow-shadow`) instead of inline hex colors.
   - Left/right gradient fades using `from-background to-transparent` so they blend with page bg in light & dark mode.
   - Width constrained to the hero column (`max-w-md`) to match the current "Tech Stack" section footprint.

2. **Edit** `src/components/HeroContent.tsx`
   - Remove the local `techStack` array and the `flex flex-wrap` chip block.
   - Keep the "Tech Stack" heading; render `<TechStackStrip />` underneath it.

### Technical notes

- Component is a client-side React component using `useRef` + `useEffect` + `requestAnimationFrame`. Cleanup cancels the frame and removes hover listeners.
- Icons loaded via `<img loading="lazy">` from `cdn.jsdelivr.net/gh/devicons/devicon` — no new dependencies.
- Pills: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card text-xs text-muted-foreground whitespace-nowrap shrink-0`.
- Strip: `flex gap-2 w-max will-change-transform`; viewport `overflow-hidden`.
- Fades: two absolutely-positioned 60px overlays, `bg-gradient-to-r/l from-background`.
- No business-logic or data changes outside the hero section.
