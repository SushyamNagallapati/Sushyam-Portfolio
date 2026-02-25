import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const entries = [
  {
    title: "M.Eng. System Design Engineering",
    org: "University of Waterloo",
    date: "Sep 2023 – Present",
    description:
      "Focusing on AI/ML systems, human-centered design, and complex system modeling. Graduate coursework in machine learning, simulation, and software design.",
  },
  {
    title: "Software Engineering Intern",
    org: "Open to Opportunities",
    date: "Seeking Summer 2025",
    description:
      "Looking for internship or co-op roles in full-stack engineering, AI/ML engineering, or systems software at early-to-mid-stage startups or product companies.",
  },
  {
    title: "B.E. Mechanical Engineering",
    org: "BITS Pilani",
    date: "2019 – 2023",
    description:
      "Undergraduate degree with a focus on robotics, control systems, and IoT. Built autonomous systems including a 5-DOF robotic arm and path planning algorithms.",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="py-24 px-6 transition-all duration-500"
      style={{
        backgroundColor: "var(--pg-bg)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--pg-text-muted)" }}>
          Experience &amp; Education
        </p>
        <h2 className="text-3xl font-bold mb-12" style={{ color: "var(--pg-text-primary)" }}>
          My Journey
        </h2>

        <div className="relative">
          {/* Vertical accent line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--pg-accent)", opacity: 0.2 }}
          />

          <div className="flex flex-col gap-10">
            {entries.map((entry, i) => (
              <div
                key={i}
                className="relative pl-12 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-16px)",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Dot marker */}
                <div
                  className="absolute left-[10px] top-1.5 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--pg-accent)" }}
                />

                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-base" style={{ color: "var(--pg-text-primary)" }}>
                    {entry.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium" style={{ color: "var(--pg-accent)" }}>
                      {entry.org}
                    </span>
                    <span className="text-xs" style={{ color: "var(--pg-text-muted)" }}>
                      · {entry.date}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--pg-text-muted)" }}>
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
