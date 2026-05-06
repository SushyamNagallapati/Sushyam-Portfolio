import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initLogRocket } from "./utils/logrocket";

createRoot(document.getElementById("root")!).render(<App />);

// Fire-and-forget — never blocks render, never crashes on failure.
initLogRocket();
