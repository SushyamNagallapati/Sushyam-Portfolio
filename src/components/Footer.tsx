import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer
    className="py-6 px-6"
    style={{ borderTop: "1px solid var(--pg-border)" }}
  >
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs" style={{ color: "var(--pg-text-muted)" }}>
        © {new Date().getFullYear()} Sushyam Nagallapati
      </p>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/SushyamNagallapati"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-150"
          style={{ color: "var(--pg-text-muted)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--pg-accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--pg-text-muted)")
          }
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/sushyamnagallapati"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-150"
          style={{ color: "var(--pg-text-muted)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--pg-accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--pg-text-muted)")
          }
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
