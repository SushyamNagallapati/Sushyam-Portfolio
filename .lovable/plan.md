

## Add HorusCast Image + Live View

Three changes for HorusCast (id 9) in `src/pages/Projects.tsx`:

1. **Add new image asset**: Copy `user-uploads://image-15.png` to `src/assets/horuscast.png` and import it as `horuscastImg`. Replace the current `image` value for HorusCast with this import.

2. **Add `liveUrl` field**: 
   ```ts
   liveUrl: "https://horus-cast-nasa-hackathon.vercel.app/"
   ```

3. **Live View button + clickable image**: Already wired generically — adding `liveUrl` automatically renders the "Live View" button and makes the project image clickable (opens in a new tab).

Only `src/pages/Projects.tsx` is modified, plus the new image file in `src/assets/`.

