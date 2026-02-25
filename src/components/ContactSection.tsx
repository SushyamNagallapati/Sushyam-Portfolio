import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="py-24 px-6 transition-all duration-500"
      style={{
        backgroundColor: "var(--pg-bg-subtle)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="max-w-[600px] mx-auto text-center flex flex-col gap-6 items-center">
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--pg-text-muted)" }}>
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold" style={{ color: "var(--pg-text-primary)" }}>
          Let's Work Together
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--pg-text-muted)" }}>
          I'm currently open to new opportunities — internships, full-time roles, or collaborations.
          Whether you have a project in mind or just want to connect, feel free to reach out.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:s3nagall@uwaterloo.ca?subject=Opportunity for Sushyam"
            className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors duration-200"
            style={{ backgroundColor: "var(--pg-accent)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--pg-accent-hover)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--pg-accent)")
            }
          >
            Send me an Email
          </a>
          <a
            href="https://www.linkedin.com/in/sushyamnagallapati"
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
            Connect on LinkedIn
          </a>
        </div>

        {/* Plain text links */}
        <div className="flex flex-col gap-1 text-sm" style={{ color: "var(--pg-text-muted)" }}>
          <a
            href="mailto:s3nagall@uwaterloo.ca"
            className="hover:underline transition-colors duration-150"
            style={{ color: "var(--pg-text-muted)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--pg-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--pg-text-muted)")}
          >
            s3nagall@uwaterloo.ca
          </a>
          <a
            href="https://www.linkedin.com/in/sushyamnagallapati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-colors duration-150"
            style={{ color: "var(--pg-text-muted)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--pg-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--pg-text-muted)")}
          >
            linkedin.com/in/sushyamnagallapati
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
