Refactor my portfolio homepage to look more professional and distinctive. I'm applying for full-stack and frontend roles, so the homepage itself needs to demonstrate frontend craft. Only modify these files:

- src/pages/Index.tsx

- src/components/Header.tsx

- src/components/HeroContent.tsx

- src/components/ProfileCard.tsx

- src/components/Footer.tsx

- src/index.css

Do NOT touch any other files. Do NOT add new dependencies beyond what's already installed (lucide-react, react-router-dom, tailwind, shadcn components are available).

═════════════════════════════════════════

SECTION 1 — HEROCONTENT.TSX (highest priority)

═════════════════════════════════════════

Problem: The current hero feels like a generic AI-generated template. The eyebrow text uses primary blue which competes with the active nav link, and the skills section is a wall of 30+ beige pills that overwhelms everything.

Changes:

1. Eyebrow text: change color from text-primary to text-muted-foreground. Keep the tracking-widest uppercase styling but make it understated.

2. Bio rewrite: replace the current bio with this exact copy:

   "Frontend-focused full-stack engineer building polished web apps with React and TypeScript. Currently finishing my MEng at the University of Waterloo, with experience shipping production features across multi-agent AI systems, RAG pipelines, IoT, and the UIs that make them usable."

3. Skills section — drastically simplify. Remove the 5-category breakdown. Replace with a single compact "Tech Stack" row showing only these 8 items as small badges in one wrapping line:

   React · TypeScript · Next.js · Node.js · Python · FastAPI · PostgreSQL · LLM/RAG

   

   Use a more minimal badge style: transparent background, 1px border using border-border/60, text-xs, text-muted-foreground, rounded-full, px-3 py-1. NOT the heavy beige pills currently used. Label the section "TECH STACK" instead of "Skills" — small uppercase, text-foreground/60, tracking-wider, mb-3.

4. Add a small "Currently" line above the tech stack:

   A single line reading: "Currently — MEng @ Waterloo · Open to new grad roles"

   Style: text-xs, text-muted-foreground, with a small green pulsing dot before it (use a span with bg-green-500, w-1.5 h-1.5, rounded-full, animate-pulse).

5. Buttons: keep the two-button layout but tighten the styling. Reduce shadow intensity (shadow-md instead of shadow-lg/xl). Keep the rounded-full pill shape.

═════════════════════════════════════════

SECTION 2 — PROFILECARD.TSX

═════════════════════════════════════════

Problem: The photo floats with no visual anchor and feels disconnected from the rest of the page.

Changes:

1. Wrap the photo in a relative container. Add a decorative element BEHIND the photo: an absolutely-positioned div, same dimensions as the photo, offset by translate-x-3 translate-y-3, with bg-primary/10 (or use a subtle gradient: bg-gradient-to-br from-primary/20 to-primary/5), same rounded-2xl, -z-10. This creates a subtle layered/offset effect that adds visual interest without being gimmicky.

2. Reduce the photo shadow — replace shadow-2xl with shadow-xl. The offset background now does the heavy visual lifting.

3. On hover of the photo container, the offset background should shift slightly (translate-x-4 translate-y-4) with a transition-transform duration-500. Add `group` class to the wrapper and `group-hover:` modifier to the offset div.

═════════════════════════════════════════

SECTION 3 — HEADER.TSX

═════════════════════════════════════════

Problem: Active nav link uses primary blue which is too loud and competes with other elements.

Changes:

1. Change `.nav-link-active` styling so it does NOT use text-primary. Instead, the active state should be: text-foreground (full opacity) with a small underline. Update the CSS in src/index.css:

   

   .nav-link-active {

     @apply text-foreground relative;

   }

   .nav-link-active::after {

     content: '';

     @apply absolute -bottom-1 left-0 right-0 h-px bg-foreground;

   }

2. Inactive nav links should remain text-muted-foreground.

3. Keep the rest of the header structure (logo, mobile menu, theme toggle) unchanged.

═════════════════════════════════════════

SECTION 4 — FOOTER.TSX

═════════════════════════════════════════

Problem: The footer is fixed to the bottom, eating screen real estate and forcing awkward bottom padding on every page.

Changes:

1. Remove the `fixed bottom-0 left-0 right-0 z-50` classes. Make it a normal-flow footer at the bottom of the page (just keep `border-t border-border/50 bg-background`).

2. Remove the `backdrop-blur-xl` and `bg-background/80` — use solid `bg-background` since it's no longer overlaying content.

3. In src/pages/Index.tsx, remove the `pb-28 md:pb-20` from the main element since the footer no longer overlays it. Replace with `pb-12`.

═════════════════════════════════════════

SECTION 5 — INDEX.TSX (page composition)

═════════════════════════════════════════

1. Remove the `pb-28 md:pb-20` per the footer change above.

2. Add a subtle decorative background element to the main section: an absolutely-positioned, very low-opacity radial gradient or grid pattern behind the hero. Add this as a sibling div inside main, behind the content:

   <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />

   

   Make sure main has `relative` and the content div has appropriate z-index handling.

═════════════════════════════════════════

SECTION 6 — INDEX.CSS (small additions)

═════════════════════════════════════════

1. Update the .nav-link-active rule per Section 3.

2. Add a fade-in-up animation utility if not already present:

   @keyframes fade-in-up {

     from { opacity: 0; transform: translateY(8px); }

     to { opacity: 1; transform: translateY(0); }

   }

   .animate-fade-in {

     animation: fade-in-up 0.6s ease-out forwards;

     opacity: 0;

   }

═════════════════════════════════════════

CONSTRAINTS

═════════════════════════════════════════

- Do NOT change the routing, the theme toggle logic, or the SocialIcons component.

- Do NOT add new npm packages.

- Do NOT change the Header's mobile menu behavior.

- Keep all existing accessibility attributes (aria-label, alt text).

- Make sure dark mode still works correctly for all changes — test the offset gradient, badge borders, and active nav underline in both themes.

- Keep the layout responsive. The two-column desktop layout and stacked mobile layout should remain intact.

After making changes, give me a one-paragraph summary of what was changed in each file.