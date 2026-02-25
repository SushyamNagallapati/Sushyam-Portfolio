import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.85)",
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: "var(--pg-accent)",
      }}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 ease-out"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default BackToTop;
