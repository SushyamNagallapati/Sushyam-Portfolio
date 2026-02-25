import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, ExternalLink } from "lucide-react";

const techMap: Record<number, string[]> = {
  1: ["Python", "LangChain", "RAG", "MCP"],
  5: ["React", "TypeScript", "Express", "OpenAI"],
  4: ["ROS2", "SAC", "MPC", "PyTorch"],
};

const featuredProjects = [
  {
    id: 1,
    name: "Agentic AI Insurance Assistant",
    description:
      "Multi-agent AI assistant for health insurance — retrieves claims, explains policy documents, and takes action through natural language.",
    githubUrl: "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
    demoUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
    gradient: "from-violet-900/50 to-slate-800",
  },
  {
    id: 5,
    name: "Custom ChatBot",
    description:
      "Full-stack AI chatbot with TypeScript/Express backend and React interface. Maintains context, markdown support, typing indicators.",
    githubUrl: "https://github.com/SushyamNagallapati/Custom-ChatBot",
    demoUrl: "",
    gradient: "from-sky-900/50 to-indigo-900/60",
  },
  {
    id: 4,
    name: "Autonomous Overtaking with SAC-MPC",
    description:
      "Full-stack autonomous driving system for opposite-lane overtaking combining real-time perception, RL, and model predictive control.",
    githubUrl: "#",
    demoUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
    gradient: "from-emerald-900/50 to-slate-800",
  },
];

const FeaturedCard = ({ project, index }: { project: typeof featuredProjects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const tags = techMap[project.id] ?? [];

  return (
    <div
      ref={ref}
      className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 cursor-default"
      style={{
        backgroundColor: "var(--pg-surface)",
        border: "1px solid var(--pg-border)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, box-shadow 0.2s ease, border-color 0.2s ease`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        el.style.borderColor = "var(--pg-accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--pg-border)";
      }}
    >
      {/* Gradient thumbnail */}
      <div
        className={`rounded-xl h-36 flex items-end p-4 bg-gradient-to-br ${project.gradient}`}
      >
        <span className="text-white/80 text-sm font-semibold">{project.name}</span>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "var(--pg-text-muted)" }}>
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: "color-mix(in srgb, var(--pg-accent) 12%, transparent)",
              color: "var(--pg-accent)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid var(--pg-border)" }}>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm transition-colors duration-150"
            style={{ color: "var(--pg-accent)" }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo →
          </a>
        )}
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs px-3 py-1 rounded-md transition-colors duration-150"
            style={{
              border: "1px solid var(--pg-border)",
              color: "var(--pg-text-muted)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--pg-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)")
            }
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "var(--pg-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--pg-text-muted)" }}>
              Portfolio
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "var(--pg-text-primary)" }}>
              Projects
            </h2>
            <p className="text-base mt-1" style={{ color: "var(--pg-text-muted)" }}>
              Things I've built that I'm proud of
            </p>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium transition-colors duration-150 whitespace-nowrap"
            style={{ color: "var(--pg-accent)" }}
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--pg-bg)" }}>
    <Header />
    <main className="flex-1">
      <HeroContent />
      <AboutSection />
      <ExperienceSection />
      <FeaturedProjects />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
