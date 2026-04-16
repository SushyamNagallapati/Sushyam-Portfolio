

## Update Project Categories

Two small edits in `src/pages/Projects.tsx`:

1. **HorusCast** (id 9): change `categories` from `["Selected", "Web/Mobile Apps"]` to `["Web/Mobile Apps"]` — removes it from the Selected section.

2. **Reorder for Web/Mobile Apps**: Move the **Custom ChatBot** entry (id 5) above the **HorusCast** entry (id 9) in the `projects` array so it appears first when the "Web/Mobile Apps" filter is active. Movie Search (id 10) follows.

Final order in the array (top portion): Agentic Financial Claim Assistant → Custom ChatBot → HorusCast → Movie Search → rest unchanged.

Custom ChatBot keeps `["Web/Mobile Apps", "Selected"]` so it remains in Selected too.

Only `src/pages/Projects.tsx` is modified.

