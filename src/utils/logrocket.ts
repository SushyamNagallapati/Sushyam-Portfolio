// LogRocket integration — initialized only in production (or when explicitly
// enabled via env), client-side only, and resilient to load failures.

let initialized = false;
let lrInstance: { identify: (id: string, traits?: Record<string, string>) => void } | null = null;

const SENSITIVE_KEYS = ["password", "token", "secret", "apikey", "authorization"];

function scrub<T>(value: T): T {
  if (!value || typeof value !== "object") return value;
  const clone: any = Array.isArray(value) ? [...(value as any)] : { ...(value as any) };
  for (const key of Object.keys(clone)) {
    if (SENSITIVE_KEYS.includes(key.toLowerCase())) {
      clone[key] = "[REDACTED]";
    } else if (clone[key] && typeof clone[key] === "object") {
      clone[key] = scrub(clone[key]);
    }
  }
  return clone;
}

export async function initLogRocket(): Promise<void> {
  if (initialized) return;
  if (typeof window === "undefined") return;

  const appId = import.meta.env.VITE_LOGROCKET_APP_ID as string | undefined;
  const enableInDev = import.meta.env.VITE_LOGROCKET_ENABLE_IN_DEV === "true";

  if (!appId) return;
  if (!import.meta.env.PROD && !enableInDev) return;

  try {
    const mod = await import("logrocket");
    mod.default.init(appId, {
      network: {
        requestSanitizer: (request) => {
          if (request.headers && request.headers.Authorization) {
            request.headers.Authorization = "";
          }
          if (request.body) {
            try {
              request.body = JSON.stringify(scrub(JSON.parse(request.body as string)));
            } catch {
              /* non-JSON body — leave as-is */
            }
          }
          return request;
        },
        responseSanitizer: (response) => {
          if (response.body) {
            try {
              response.body = JSON.stringify(scrub(JSON.parse(response.body as string)));
            } catch {
              /* non-JSON body — leave as-is */
            }
          }
          return response;
        },
      },
    });
    lrInstance = mod.default;
    initialized = true;
  } catch (err) {
    // Never let analytics break the app.
    console.warn("[LogRocket] failed to initialize", err);
  }
}

export function identifyUser(userId?: string, name?: string, email?: string): void {
  if (!initialized || !lrInstance || !userId) return;
  const traits: Record<string, string> = {};
  if (name) traits.name = name;
  if (email) traits.email = email;
  try {
    lrInstance.identify(userId, traits);
  } catch (err) {
    console.warn("[LogRocket] identify failed", err);
  }
}
