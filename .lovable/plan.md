## LogRocket Integration Plan

Integrate LogRocket session replay into the Vite + React app using a secure, production-ready pattern. The app ID is read from a Vite env var so it never lives in source.

### 1. Install

```
npm install logrocket
```

### 2. Environment variable

Vite exposes only vars prefixed with `VITE_` to the client. Since LogRocket app IDs are public (they ship in the browser bundle anyway), this is the correct mechanism.

Create a `.env` file at the project root (already gitignored by Vite defaults):

```
VITE_LOGROCKET_APP_ID=your-org/your-app
# Optional: force-enable in dev
VITE_LOGROCKET_ENABLE_IN_DEV=false
```

Note: In Lovable, `.env` files aren't used at runtime by the preview sandbox. For the deployed/published build, you'll either commit a `.env.production` with the public app ID or set `VITE_LOGROCKET_APP_ID` as a Build Secret in Workspace Settings → Build Secrets so it's injected at build time.

### 3. New file: `src/utils/logrocket.ts`

- `initLogRocket()` — guards: browser only (`typeof window !== 'undefined'`), env var present, `import.meta.env.PROD` true (or dev override flag set), and a module-level `initialized` flag to prevent double init. Wraps the dynamic `import('logrocket')` in try/catch so a failed load never crashes the app.
- `identifyUser(userId, name?, email?)` — no-ops if LogRocket isn't initialized or `userId` is missing; only forwards defined fields.
- Uses LogRocket's `requestSanitizer` / `responseSanitizer` to strip `Authorization` headers and common sensitive body fields (`password`, `token`, `secret`, `apiKey`) defensively.
- Async/non-blocking: uses dynamic import so LogRocket isn't in the critical path.

### 4. Wire into entry point

Edit `src/main.tsx` to call `initLogRocket()` once after `createRoot(...).render(...)`. Fire-and-forget; no `await`, no blocking.

### 5. Files touched

- `package.json` / lockfile (via `npm install`)
- `src/utils/logrocket.ts` (new)
- `src/main.tsx` (one import + one call)
- `.env.example` (new — documents the variable; the real `.env` is user-managed)

No other files change. No existing UI, routing, or styling is affected.

### Technical details

```ts
// src/utils/logrocket.ts
let initialized = false;
let lrInstance: typeof import('logrocket') | null = null;

const SENSITIVE_KEYS = ['password', 'token', 'secret', 'apikey', 'authorization'];

function scrub<T>(obj: T): T {
  if (!obj || typeof obj !== 'object') return obj;
  const clone: any = Array.isArray(obj) ? [...obj] : { ...obj };
  for (const k of Object.keys(clone)) {
    if (SENSITIVE_KEYS.includes(k.toLowerCase())) clone[k] = '[REDACTED]';
    else if (typeof clone[k] === 'object') clone[k] = scrub(clone[k]);
  }
  return clone;
}

export async function initLogRocket(): Promise<void> {
  if (initialized) return;
  if (typeof window === 'undefined') return;

  const appId = import.meta.env.VITE_LOGROCKET_APP_ID;
  const enableInDev = import.meta.env.VITE_LOGROCKET_ENABLE_IN_DEV === 'true';
  if (!appId) return;
  if (!import.meta.env.PROD && !enableInDev) return;

  try {
    const mod = await import('logrocket');
    const LogRocket = mod.default;
    LogRocket.init(appId, {
      network: {
        requestSanitizer: (req) => {
          if (req.headers?.Authorization) req.headers.Authorization = '';
          if (req.body) {
            try { req.body = JSON.stringify(scrub(JSON.parse(req.body))); } catch {}
          }
          return req;
        },
        responseSanitizer: (res) => {
          if (res.body) {
            try { res.body = JSON.stringify(scrub(JSON.parse(res.body))); } catch {}
          }
          return res;
        },
      },
    });
    lrInstance = mod;
    initialized = true;
  } catch (err) {
    console.warn('[LogRocket] failed to initialize', err);
  }
}

export function identifyUser(userId?: string, name?: string, email?: string): void {
  if (!initialized || !lrInstance || !userId) return;
  const traits: Record<string, string> = {};
  if (name) traits.name = name;
  if (email) traits.email = email;
  try {
    lrInstance.default.identify(userId, traits);
  } catch (err) {
    console.warn('[LogRocket] identify failed', err);
  }
}
```

```ts
// src/main.tsx (added lines only)
import { initLogRocket } from './utils/logrocket';
// ...after render:
initLogRocket();
```

```
# .env.example
VITE_LOGROCKET_APP_ID=
VITE_LOGROCKET_ENABLE_IN_DEV=false
```

### Example usage elsewhere

```ts
import { identifyUser } from '@/utils/logrocket';
identifyUser(user.id, user.name, user.email);
```
