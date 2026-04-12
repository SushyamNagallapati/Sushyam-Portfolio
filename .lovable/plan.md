

# Design Audit & Cleanup Plan

## Issues Found

**Desktop:** Profile card floats high in the left beige panel while hero content extends far below it (skills push well past the fold). The `min-h-[calc(100vh-64px)]` with `items-center` vertically centers only relative to the viewport, not the full content height, causing misalignment.

**Mobile:** Name "Sushyam Nagallapati" appears three times (header, profile card, hero heading) — redundant and heavy.

**Typography:** H1 at `5.5rem` on XL is oversized. Bio text uses non-standard `text-[0.95rem]`. Skills heading uses `text-lg/text-xl` which is too close to body size.

**Spacing:** Inconsistent gaps — `mb-4`, `mb-6`, `mb-8`, `mb-10` with no clear rhythm. Skills categories use `space-y-3` while badges use `gap-1.5` — slightly tight.

**Profile Card:** No border-radius (sharp square) while buttons are `rounded-full` — inconsistent shape language.

**Footer:** Contact labels (CALL/WRITE/FOLLOW) use non-standard `text-[10px]` and `text-[11px]`.

---

## Changes

### 1. `src/pages/Index.tsx` — Fix layout alignment
- Change `items-center` to `items-start` with `pt-8 lg:pt-16` so profile card and content start from the same top edge
- Remove `min-h-[calc(100vh-64px)]` — let content define height naturally with `min-h-screen`
- Normalize horizontal padding to `px-6 sm:px-8 lg:px-16`
- Tighten gap: `gap-10 lg:gap-16`

### 2. `src/components/HeroContent.tsx` — Typography & spacing rhythm
- Scale down H1: `text-4xl sm:text-5xl lg:text-6xl` (remove the xl:5.5rem)
- Standardize bio text: `text-sm sm:text-base` (drop `text-[0.95rem]`)
- Normalize spacing to 8px multiples: `mb-4` → `mb-3`, `mb-6` → `mb-6`, `mb-8` → `mb-8` (keep consistent)
- Set bio `leading-relaxed` explicitly, add `max-w-lg` (up from `max-w-md`)
- Skills heading: `text-base font-semibold` with `mb-5` and `mt-10`
- Skills categories: `space-y-4` for more breathing room, badges `gap-2`

### 3. `src/components/ProfileCard.tsx` — Shape consistency
- Add `rounded-2xl` to the card container for consistent rounding with the rest of the design
- Standardize inner padding from `p-8` to `p-6` (less cramped on smaller widths)

### 4. `src/components/Header.tsx` — Clean up nav spacing
- Normalize nav gap to `gap-8` consistently (remove `lg:gap-8` split)

### 5. `src/components/Footer.tsx` — Normalize font sizes
- Replace `text-[10px]` with `text-xs` and `text-[11px]` with `text-xs`
- Normalize gap from `gap-5 sm:gap-10` to `gap-6 sm:gap-8`

### 6. `src/index.css` — Heading letter-spacing
- Tighten heading letter-spacing from `-0.02em` to `-0.025em` for the larger sizes

### 7. `src/pages/Projects.tsx` — Consistent project image rounding
- Change `rounded-sm` on project images to `rounded-lg` for consistency with card aesthetic

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Fix hero layout alignment, normalize padding |
| `src/components/HeroContent.tsx` | Scale typography, normalize spacing rhythm |
| `src/components/ProfileCard.tsx` | Add border-radius, adjust padding |
| `src/components/Header.tsx` | Normalize nav gap |
| `src/components/Footer.tsx` | Fix non-standard font sizes |
| `src/index.css` | Tweak heading letter-spacing |
| `src/pages/Projects.tsx` | Consistent image rounding |

