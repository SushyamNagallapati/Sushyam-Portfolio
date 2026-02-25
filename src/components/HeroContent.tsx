import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "System Design Engineer",
  "AI/ML Developer",
  "Full Stack Developer",
];

const stats = [
  { label: "5+ Projects Built", emoji: "🚀" },
  { label: "Web · AI/ML Systems", emoji: "💡" },
  { label: "Open to Work", emoji: "✅" },
];

const HeroContent = () => {
  const typedText = useTypingAnimation(roles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // slight delay so CSS transition fires after mount
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
  });

  return (
    <section
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      style={{ backgroundColor: "var(--pg-bg)" }}
    >
      {/* Dot-grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />

      {/* Soft radial glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)" }}
      />
      {/* Dark mode glow handled via CSS opacity trick */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-0 dark:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col items-center gap-5 lg:w-2/5" style={fadeStyle(0)}>
          {/* Profile photo */}
          <img
            src={profilePhoto}
            alt="Sushyam Nagallapati"
            className="w-40 h-40 rounded-full object-cover"
            style={{ border: "2px solid var(--pg-accent)" }}
          />

          {/* Stat pills */}
          <div className="flex flex-col items-center gap-2 w-full max-w-xs">
            {stats.map((s) => (
              <span
                key={s.label}
                className="rounded-full px-3 py-1 text-sm w-full text-center"
                style={{
                  background: "var(--pg-surface)",
                  border: "1px solid var(--pg-border)",
                  color: "var(--pg-text-muted)",
                }}
              >
                {s.emoji} {s.label}
              </span>
            ))}
          </div>

          {/* Social icon buttons */}
          <div className="flex gap-3">
            <a
              href="https://github.com/SushyamNagallapati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{
                border: "1px solid var(--pg-border)",
                color: "var(--pg-text-muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--pg-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--pg-text-muted)";
              }}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sushyamnagallapati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{
                border: "1px solid var(--pg-border)",
                color: "var(--pg-text-muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--pg-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--pg-text-muted)";
              }}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-4 lg:w-3/5 text-center lg:text-left">
          {/* Role label */}
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--pg-text-muted)", ...fadeStyle(120) }}
          >
            Software Developer
          </p>

          {/* Greeting */}
          <div style={fadeStyle(240)}>
            <h1 className="leading-tight">
              <span
                className="text-5xl font-normal block"
                style={{ color: "var(--pg-text-primary)" }}
              >
                Hello, I'm
              </span>
              <span
                className="text-6xl font-bold block"
                style={{ color: "var(--pg-accent)" }}
              >
                Sushyam Nagallapati
              </span>
            </h1>
          </div>

          {/* Typing animation */}
          <div className="h-8" style={fadeStyle(360)}>
            <p className="text-lg" style={{ color: "var(--pg-text-muted)" }}>
              {typedText}
              <span
                className="inline-block w-0.5 h-5 ml-1 align-middle cursor-blink"
                style={{ backgroundColor: "var(--pg-accent)" }}
              />
            </p>
          </div>

          {/* Bio */}
          <p
            className="text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
            style={{ color: "var(--pg-text-muted)", ...fadeStyle(480) }}
          >
            Graduate student in System Design Engineering, building reliable software at the
            intersection of web applications and AI — from RAG pipelines to full-stack chat interfaces.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
            style={fadeStyle(600)}
          >
            <Link
              to="/projects"
              className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors duration-200"
              style={{ backgroundColor: "var(--pg-accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--pg-accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--pg-accent)")
              }
            >
              View My Projects
            </Link>
            <a
              href="/public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid var(--pg-accent)",
                color: "var(--pg-accent)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--pg-accent)";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--pg-accent)";
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
