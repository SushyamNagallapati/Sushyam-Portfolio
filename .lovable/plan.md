

## Add Live View for Movie Search Project

Two changes in `src/pages/Projects.tsx` for the Movie Search Web Application entry (id 10):

1. **Add `liveUrl` field** to the project data:
   ```ts
   liveUrl: "https://movie-application-inky.vercel.app/"
   ```

2. **Add a "Live View" button** in the action buttons row, alongside the existing GitHub button. Uses the same outline button style as the other action buttons (View more / Video / GitHub) with an `ExternalLink` icon from lucide-react for visual consistency.

3. **Make the project image clickable** when `liveUrl` exists — wrap the `<img>` in an `<a href={project.liveUrl} target="_blank" rel="noopener noreferrer">` with a subtle hover cursor. Image-only projects without a liveUrl remain non-clickable.

### Implementation notes
- Add `ExternalLink` to the existing `lucide-react` import.
- Render the Live View button conditionally (`{project.liveUrl && ...}`) so it only appears for projects that have a live deployment — future projects can opt in by adding `liveUrl`.
- Button order: View more → Live View → Video → GitHub.
- No theme, color, font, or layout changes. Only `src/pages/Projects.tsx` is modified.

