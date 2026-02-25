## Current State Analysis

The site currently uses:

- shadcn HSL CSS variables (`--background`, `--foreground`, `--primary`, etc.) mapped to Tailwind colors
- Blob animations and grid overlay in the hero
- A floating glass-morphism pill navbar
- Project cards with browser frames
- A simple footer with Call/Write/Follow columns
- No About section, no Experience section, no Contact section, no Back-to-top button

---

## Files to Create / Edit


| Action | File                                                                                       |
| ------ | ------------------------------------------------------------------------------------------ |
| Edit   | `src/index.css` — new color system, remove blobs, add dot-grid, Inter font, reduced-motion |
| Edit   | `tailwind.config.ts` — remove Playfair from fontFamily, set Inter as default sans          |
| Edit   | `src/components/HeroContent.tsx` — full rewrite                                            |
| Edit   | `src/components/Header.tsx` — full rewrite                                                 |
| Edit   | `src/components/Footer.tsx` — minimal rewrite                                              |
| Edit   | `src/pages/Projects.tsx` — card + filter updates + BackToTop                               |
| Edit   | `src/pages/Index.tsx` — assemble all new sections + BackToTop                              |
| Create | `src/components/AboutSection.tsx` — new                                                    |
| Create | `src/components/ExperienceSection.tsx` — new *(added)*                                     |
| Create | `src/components/ContactSection.tsx` — new                                                  |
| Create | `src/components/BackToTop.tsx` — new                                                       |
| Create | `src/hooks/useScrollAnimation.ts` — new (if not already present)                           |


---

## 1. Color System (`src/index.css` + `tailwind.config.ts`)

### Strategy

Keep shadcn HSL tokens intact so existing shadcn components (Button, Badge, etc.) don't break. Add a parallel set of semantic **hex** CSS variables for all new components. New components reference `var(--accent)` etc. via Tailwind arbitrary values.

### `src/index.css` — Full Changes

```css
/* ─── Font Import ──────────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* ─── Light Mode ───────────────────────────────────────────────── */
:root {
  /* New semantic hex variables */
  --bg:           #ffffff;
  --bg-subtle:    #f8fafc;
  --surface:      #f1f5f9;
  --border:       #e2e8f0;
  --text-primary: #0f172a;
  --text-muted:   #64748b;
  --accent:       #4f46e5;
  --accent-hover: #4338ca;

  /* Remap shadcn HSL tokens to match new palette */
  --background:  0 0% 100%;
  --foreground:  222 47% 11%;
  --primary:     239 84% 59%;
  --card:        0 0% 100%;
  --muted:       214 32% 91%;
  --border:      214 32% 91%;
}

/* ─── Dark Mode ────────────────────────────────────────────────── */
.dark {
  --bg:           #0a0a0f;
  --bg-subtle:    #0f0f17;
  --surface:      #13131e;
  --border:       #1e1e30;
  --text-primary: #f1f5f9;
  --text-muted:   #94a3b8;
  --accent:       #818cf8;
  --accent-hover: #a5b4fc;

  /* Remap shadcn tokens for dark */
  --background:  240 10% 4%;
  --foreground:  210 40% 96%;
  --primary:     234 89% 74%;
  --card:        240 10% 7%;
  --muted:       240 5% 15%;
  --border:      240 6% 18%;
}

/* ─── Typography — Inter only, no serif anywhere ───────────────── */
body { font-family: 'Inter', sans-serif; }
h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}

/* ─── Remove ────────────────────────────────────────────────────── */
/* DELETE: all blob @keyframes (blob, float, pulse-slow, etc.)      */
/* DELETE: .bg-grid-pattern definition                               */
/* DELETE: any @import for Playfair Display                          */

/* ─── Dot-Grid Pattern ─────────────────────────────────────────── */
.dot-grid {
  background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* ─── Scroll Reveal ────────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Hero Fade-Up Keyframe ────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fadeUp 0.5s ease-out forwards;
}

/* ─── Reduced Motion — disable everything ─────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}

```

### `tailwind.config.ts` — Changes

```ts
fontFamily: {
  sans: ['Inter', 'sans-serif'],  // ← replace Playfair + old sans stack
  // DELETE: serif / fontFamily.serif entries
}

```

---

## 2. Hero Section (`src/components/HeroContent.tsx`) — Full Rewrite

### Background

- Wrapper: `relative overflow-hidden bg-[var(--bg)] min-h-[90vh]`
- Radial glow: absolute div, top-right, `w-96 h-96 bg-indigo-500/6 dark:bg-indigo-500/12 rounded-full blur-3xl pointer-events-none`
- Dot-grid overlay: `absolute inset-0 dot-grid pointer-events-none`
- **REMOVE** all 3 blob divs and the grid-pattern div entirely

### Layout

```
flex flex-col lg:flex-row items-center gap-16 px-6 max-w-6xl mx-auto py-24

```

### Left Column (`lg:w-2/5`, centered, flex-col, gap-4)


| Element         | Spec                                                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Profile photo   | `w-40 h-40 rounded-full border-2 border-[var(--accent)] object-cover` — clean solid border, no animation                                                                                  |
| Stat pills (×3) | `"5+ Projects Built 🚀"` / `"Web · AI/ML Systems 💡"` / `"Open to Work ✅"`                                                                                                                |
| Stat pill style | `bg-[var(--surface)] border border-[var(--border)] rounded-full px-3 py-1 text-sm text-[var(--text-muted)]`                                                                               |
| Social buttons  | GitHub + LinkedIn — `w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors 200ms` |


### Right Column (`lg:w-3/5`, flex-col, gap-4)


| Element          | Spec                                                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Role label       | `"SOFTWARE DEVELOPER"` — `text-xs uppercase tracking-widest text-[var(--text-muted)]`                                                                    |
| "Hello, I'm"     | `text-5xl font-normal text-[var(--text-primary)]`                                                                                                        |
| Name             | `"Sushyam Nagallapati"` — `text-6xl font-bold text-[var(--accent)]` — **solid color, NO gradient**                                                       |
| Typing animation | Reuse existing `useTypingAnimation` hook — roles: `"System Design Engineer"`, `"AI/ML Developer"`, `"Full Stack Developer"` — blinking cursor            |
| Bio              | `text-[var(--text-muted)] text-base leading-relaxed max-w-lg` — max 2 lines                                                                              |
| Primary CTA      | `"View My Projects"` — `bg-[var(--accent)] text-white rounded-lg px-6 py-3 hover:bg-[var(--accent-hover)] transition-colors`                             |
| Secondary CTA    | `"Download Resume"` — `border border-[var(--accent)] text-[var(--accent)] rounded-lg px-6 py-3 hover:bg-[var(--accent)] hover:text-white transition-all` |


### Load Animations

- Wrap in `useEffect` — triggers once on mount
- Each element: `opacity: 0` → `animate-fade-up` class
- Stagger delay: `0ms, 120ms, 240ms, 360ms, 480ms, 600ms`

---

## 3. Navbar (`src/components/Header.tsx`) — Full Rewrite

**REMOVE** floating pill style (`mx-4 mt-3 rounded-2xl backdrop-blur` card)

### Structure

```
sticky top-0 z-50 h-16 w-full
bg-white/80 dark:bg-[#0a0a0f]/80
backdrop-blur-md
border-b border-[var(--border)]
transition-shadow duration-200

```

### Scroll Shadow (via `useEffect` + `useState`)

```ts
scrollY > 10 
  → add: shadow-[0_1px_12px_rgba(0,0,0,0.08)] 
  → dark: dark:shadow-[0_1px_12px_rgba(0,0,0,0.4)]

```

### Left Side

- Profile photo `w-7 h-7 rounded-full` + name `font-semibold text-sm` + `"Web · AI/ML Systems"` `text-xs text-[var(--text-muted)]`

### Right Side

- Nav links: `About`, `Resume`, `Projects` — `text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors`
- Active link: `text-[var(--text-primary)]` + `border-b-2 border-[var(--accent)] pb-0.5`
- ThemeToggle: keep existing component, clean icon button only

### Mobile

- Hamburger icon — opens a slide-down nav panel
- Panel: full-width, `bg-[var(--bg)] border-b border-[var(--border)]`, slide down `300ms ease`
- Each link: `text-lg py-4 border-b border-[var(--border)]`, closes panel on click
- Backdrop overlay behind panel

---

## 4. About Section (`src/components/AboutSection.tsx`) — NEW

### Layout

```
bg-[var(--bg-subtle)] py-24 px-6
grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto

```

Scroll-triggered fade via `useScrollAnimation` hook.

### Left Column — Bio


| Element    | Spec                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| Label      | `"ABOUT ME"` — `text-xs uppercase tracking-widest text-[var(--text-muted)]`                                        |
| Heading    | `"Building reliable software at the intersection of Web and AI"` — `text-3xl font-bold text-[var(--text-primary)]` |
| Para 1     | Your background: grad program, university, location                                                                |
| Para 2     | What you build: RAG systems, chat interfaces, data-driven workflows                                                |
| Para 3     | What you're looking for: roles, team types, goals                                                                  |
| Para style | `text-[var(--text-muted)] text-base leading-[1.7]`                                                                 |
| Button     | `"Download Resume"` — outlined style, same as hero secondary CTA                                                   |


> ⚠️ **Fill in real bio text before implementing.** Do not leave placeholder content.

### Right Column — Skills


| Element    | Spec                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Label      | `"SKILLS & TECHNOLOGIES"` — same label style                                                                                                    |
| Layout     | `flex flex-wrap gap-2`                                                                                                                          |
| Chip style | `bg-[var(--surface)] border border-[var(--border)] rounded-full px-3 py-1 text-sm text-[var(--text-muted)]`                                     |
| Groups     | Languages · Frontend · Backend · AI/ML · Databases · Tools                                                                                      |
| Skills     | Python, TypeScript, JavaScript · React, TailwindCSS · Node.js, FastAPI · LangChain, RAG, OpenAI API · PostgreSQL, MongoDB · Docker, Git, Vercel |


**No progress bars. Chips only.**

---

## 5. Experience Section (`src/components/ExperienceSection.tsx`) — NEW *(Added)*

This section is critical for recruiter trust. Add between About and Projects.

### Layout

```
bg-[var(--bg)] py-24 px-6 max-w-6xl mx-auto

```

### Header

- Label: `"EXPERIENCE & EDUCATION"` — same label style
- Heading: `"My Journey"` or `"Background"` — 32px bold

### Timeline Layout

- Left: vertical accent line `w-px bg-[var(--accent)]/20 absolute left-4`
- Each entry is a relative block with a dot marker `w-3 h-3 rounded-full bg-[var(--accent)] absolute left-[10px]`

### Each Entry Contains


| Field        | Spec                                                             |
| ------------ | ---------------------------------------------------------------- |
| Title        | Role or degree name — `font-semibold text-[var(--text-primary)]` |
| Organization | `text-[var(--accent)] text-sm font-medium`                       |
| Date range   | `text-[var(--text-muted)] text-xs`                               |
| Description  | 1–2 lines in `text-[var(--text-muted)] text-sm leading-relaxed`  |


### Suggested Entries (fill with real data)

1. Graduate Program — University Name, Start–Present
2. Any internship or work experience
3. Undergraduate degree or relevant certification

### Animation

- Scroll-triggered fade from left, 500ms ease, staggered 150ms per entry

---

## 6. Projects Section (`src/pages/Projects.tsx`) — Updates

### Section Header

```
text-4xl font-bold text-[var(--text-primary)] + 
subtitle: "Things I've built that I'm proud of" text-[var(--text-muted)]

```

### Filter Tabs

```
"All" | "Web" | "AI/ML" | "Full Stack"

```

- Pill style: `rounded-full px-4 py-1.5 text-sm font-medium border border-[var(--border)]`
- Active: `bg-[var(--accent)] text-white border-[var(--accent)]`
- Map to existing `ProjectCategory` values

### Card Updates


| Element     | Spec                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Thumbnail   | Gradient placeholder: `bg-gradient-to-br from-indigo-900/40 to-slate-800` with project name as text overlay — keep original URL in data for future use |
| Card bg     | `bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5`                                                                                    |
| Light hover | `hover:shadow-lg hover:-translate-y-1 transition-all duration-200`                                                                                     |
| Dark hover  | `dark:hover:border-[var(--accent)] dark:hover:shadow-[0_0_16px_rgba(129,140,248,0.2)]`                                                                 |
| Tech badges | `bg-[var(--accent)]/10 text-[var(--accent)] rounded-full px-2.5 py-0.5 text-xs`                                                                        |
| Live Demo   | Text link: `text-[var(--accent)] text-sm hover:underline` + `"→"`                                                                                      |
| GitHub      | Outlined small button: `border border-[var(--border)] rounded-md px-3 py-1 text-xs hover:border-[var(--accent)]`                                       |


> ⚠️ Each project card thumbnail should use a **unique gradient** — not the same indigo/slate for every card. Vary the color pairs (e.g. violet/slate, sky/indigo, emerald/slate) so cards feel distinct.

---

## 7. Contact Section (`src/components/ContactSection.tsx`) — NEW

### Layout

```
bg-[var(--bg-subtle)] py-24 px-6
max-w-[600px] mx-auto text-center

```

Scroll-triggered fade-up.

### Content


| Element          | Spec                                                                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Label            | `"GET IN TOUCH"` — `text-xs uppercase tracking-widest text-[var(--text-muted)]`                                                                     |
| Heading          | `"Let's Work Together"` — `text-4xl font-bold text-[var(--text-primary)]`                                                                           |
| Subtext          | `"I'm currently open to new opportunities — internships, full-time roles, or collaborations. Feel free to reach out."` — `text-[var(--text-muted)]` |
| Primary button   | `"Send me an Email"` — filled accent, links to `mailto:your@email.com?subject=Opportunity for Sushyam`                                              |
| Secondary button | `"Connect on LinkedIn"` — outlined accent                                                                                                           |
| Text links below | Email address + LinkedIn URL as plain `text-[var(--text-muted)] text-sm` links                                                                      |


---

## 8. Footer (`src/components/Footer.tsx`) — Minimal Rewrite

**REMOVE** Call/Write/Follow multi-column layout entirely.

### New Structure

```
border-t border-[var(--border)] py-6 px-6
flex flex-col sm:flex-row items-center justify-between gap-4

```


| Side  | Content                                                                                                                                  |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Left  | `"© 2025 Sushyam Nagallapati"` — `text-xs text-[var(--text-muted)]`                                                                      |
| Right | GitHub + LinkedIn icon-only links — `w-8 h-8 flex items-center justify-center rounded-full hover:text-[var(--accent)] transition-colors` |


---

## 9. Back-to-Top Button (`src/components/BackToTop.tsx`) — NEW

```tsx
// Behavior
useEffect: listen to window.scrollY > 400 → show button
onClick: window.scrollTo({ top: 0, behavior: 'smooth' })

// Style
fixed bottom-6 right-6 z-50
w-10 h-10 rounded-full
bg-[var(--accent)] text-white
flex items-center justify-center
shadow-lg

// Transition
opacity-0 scale-90 → opacity-100 scale-100
transition: opacity 200ms, transform 200ms ease

// Icon: ArrowUp from lucide-react (w-4 h-4)

```

---

## 10. Page Assembly (`src/pages/Index.tsx`)

```tsx
<Header />
<HeroContent />
<AboutSection />
<ExperienceSection />   {/* ← NEW — add between About and Projects */}
<ProjectsPreview />     {/* ← 2–3 featured cards with "View All" link */}
<ContactSection />
<Footer />
<BackToTop />

```

> Add a **Featured Projects preview** on the home page showing 2–3 cards with a `"View All Projects →"` link to `/projects`. This avoids the home page ending abruptly after the hero.

---

## 11. Projects Page (`src/pages/Projects.tsx`)

- Already has `<Header />` + `<Footer />`
- Add `<BackToTop />` at the bottom
- Apply all card + filter updates from Section 6

---

## Key Technical Decisions


| Decision                                         | Rationale                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Hex vars for new components, HSL for shadcn      | Shadcn uses HSL internally — mixing breaks it. Parallel system keeps both clean          |
| Inter only — no Playfair                         | Playfair is decorative/editorial. Inter reads as professional and modern to recruiters   |
| Solid accent color for name — no gradient text   | Gradient text has lower contrast and looks trendy rather than professional               |
| No progress bars in skills                       | Progress bars on skills are universally recognized as fake/arbitrary — chips are honest  |
| Gradient placeholders for project cards          | Keeps layout intact until real screenshots are added; each card gets a unique color pair |
| Mailto link with pre-filled subject              | Removes friction for recruiters emailing you                                             |
| `prefers-reduced-motion` guard on all animations | Accessibility requirement — users with vestibular disorders need motion disabled         |
| `useScrollAnimation` hook for all scroll reveals | Centralizes IntersectionObserver logic — don't repeat it per component                   |


---

## Implementation Order (Do This Exactly)

Run these in Lovable **one at a time**. Do not batch.

```
1. src/index.css              → color system, fonts, dot-grid, animations, reduced-motion
2. tailwind.config.ts         → Inter font, remove Playfair
3. src/components/Header.tsx  → full rewrite — verify navbar looks right before continuing
4. src/components/HeroContent.tsx → full rewrite — verify hero looks right
5. src/components/AboutSection.tsx → create new
6. src/components/ExperienceSection.tsx → create new
7. src/components/ContactSection.tsx → create new
8. src/components/BackToTop.tsx → create new
9. src/components/Footer.tsx  → minimal rewrite
10. src/pages/Projects.tsx    → card + filter updates + BackToTop
11. src/pages/Index.tsx       → assemble all sections in order

```

**Verify after step 4** (hero) before moving forward — it's the most complex rewrite and everything else builds on top of it.

---

## Pre-Implementation Checklist

Before sending any prompt to Lovable, have this ready:

- [ ] Real bio text — 3 short paragraphs (background, what you build, what you're looking for)
- [ ] Experience entries — grad program dates, any internships, undergrad degree
- [ ] Real email address for the mailto link
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL
- [ ] Resume PDF uploaded to `/public/resume.pdf` in the project so "Download Resume" works

---

*Plan version: Final — February 2026*