

## Fix Index.tsx Layout Alignment

### What changes
Replace lines 17–30 in `src/pages/Index.tsx` — remove the extra wrapper `<div>` around the flex container, flatten the layout, and update the profile card and hero content wrappers per your spec.

### Before → After

**Remove**: The extra `<div className="w-full relative z-10">` wrapper (line 18/30).

**Replace the content area** (lines 17–30) with:

```tsx
{/* Content Area */}
<div className="w-full relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-6 sm:px-8 lg:px-0 py-12 lg:py-0">
  {/* Profile Card — centered within the beige panel on desktop */}
  <div className="flex-shrink-0 w-full max-w-[280px] mx-auto lg:mx-0 lg:w-[38%] lg:max-w-none lg:flex lg:justify-center">
    <ProfileCard />
  </div>

  {/* Hero Content */}
  <div className="w-full max-w-lg text-center lg:text-left lg:pl-10 xl:pl-14">
    <HeroContent />
  </div>
</div>
```

### Summary of changes
1. Flattened nested wrapper — flex properties moved to the outer content div
2. Profile card: single `max-w-[280px] mx-auto` on mobile; on desktop `lg:w-[38%]` with `lg:flex lg:justify-center` to center within the beige panel
3. Gap changed to `gap-10 lg:gap-0`; padding normalized to `px-6 sm:px-8`
4. Hero content gets `lg:pl-10 xl:pl-14` for breathing room

**Only `src/pages/Index.tsx` is modified. No other files touched.**

