import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript"] },
  { group: "Frontend", items: ["React", "TailwindCSS"] },
  { group: "Backend", items: ["Node.js", "FastAPI"] },
  { group: "AI/ML", items: ["LangChain", "RAG", "OpenAI API"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { group: "Tools", items: ["Docker", "Git", "Vercel"] },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 transition-all duration-500"
      style={{
        backgroundColor: "var(--pg-bg-subtle)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — Bio */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--pg-text-muted)" }}>
              About Me
            </p>
            <h2 className="text-3xl font-bold leading-snug" style={{ color: "var(--pg-text-primary)" }}>
              Building reliable software at the intersection of Web and AI
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-base leading-[1.7]" style={{ color: "var(--pg-text-muted)" }}>
            <p>
              I'm a graduate student in System Design Engineering at the University of Waterloo, previously from
              BITS Pilani where I studied Mechanical Engineering. I'm based in Waterloo, ON, Canada, and I'm
              actively looking for software engineering and AI/ML roles.
            </p>
            <p>
              I build RAG systems, AI-powered chat interfaces, multi-agent pipelines, and data-driven web
              applications. I focus on making AI tools that are actually usable — not just technically interesting,
              but reliable in practice with real users and real data.
            </p>
            <p>
              I care about clean architecture, honest AI outputs, and products people can trust. I'm looking for
              teams that value engineering quality and are working on meaningful problems in AI, developer tooling,
              or enterprise software.
            </p>
          </div>

          <a
            href="/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200"
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

        {/* Right — Skills */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--pg-text-muted)" }}>
              Skills &amp; Technologies
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {skills.map((group) => (
              <div key={group.group}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--pg-text-primary)" }}>
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full px-3 py-1 text-sm transition-colors duration-150 cursor-default"
                      style={{
                        background: "var(--pg-surface)",
                        border: "1px solid var(--pg-border)",
                        color: "var(--pg-text-muted)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--pg-border)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--pg-surface)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
