// LogRocket integration via CDN script — app ID is read from a build-time env
// variable (VITE_LOGROCKET_APP_ID) so it never appears as a literal string in
// source. Note: any client-side analytics ID is ultimately visible in the
// browser; secure it via the LogRocket dashboard's domain allowlist.

let initialized = false;

export function initLogRocket(): void {
  if (initialized) return;
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const appId = import.meta.env.VITE_LOGROCKET_APP_ID as string | undefined;
  const enableInDev = import.meta.env.VITE_LOGROCKET_ENABLE_IN_DEV === "true";

  if (!appId) return;
  if (!import.meta.env.PROD && !enableInDev) return;

  try {
    const script = document.createElement("script");
    script.src = "https://cdn.logr-in.com/LogRocket.min.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    script.onload = () => {
      const lr = (window as unknown as { LogRocket?: { init: (id: string) => void } }).LogRocket;
      if (lr && typeof lr.init === "function") {
        lr.init(appId);
      }
    };
    document.head.appendChild(script);
    initialized = true;
  } catch (err) {
    console.warn("[LogRocket] failed to initialize", err);
  }
}

export function identifyUser(userId?: string, name?: string, email?: string): void {
  if (!initialized || !userId) return;
  const lr = (window as unknown as {
    LogRocket?: { identify: (id: string, traits?: Record<string, string>) => void };
  }).LogRocket;
  if (!lr || typeof lr.identify !== "function") return;
  const traits: Record<string, string> = {};
  if (name) traits.name = name;
  if (email) traits.email = email;
  try {
    lr.identify(userId, traits);
  } catch (err) {
    console.warn("[LogRocket] identify failed", err);
  }
}
