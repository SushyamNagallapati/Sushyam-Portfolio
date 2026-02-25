import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Github, ExternalLink, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type FilterTab = "All" | "Web" | "AI/ML" | "Full Stack";
const filterTabs: FilterTab[] = ["All", "Web", "AI/ML", "Full Stack"];

const techMap: Record<number, string[]> = {
  1: ["Python", "LangChain", "RAG", "Multi-Agent", "MCP"],
  2: ["React", "TypeScript", "Express", "OpenAI", "Tailwind"],
  3: ["Python", "LLaMA 3.2", "Ollama", "ChromaDB", "PDF"],
  4: ["ROS2", "SAC", "MPC", "OpenCV", "PyTorch"],
  5: ["Python", "CNN", "A*", "RRT", "RL"],
  6: ["Arduino", "ESP32", "PLC", "Bluetooth", "IoT"],
  7: ["Vensim", "System Dynamics", "Simulation"],
  8: ["Arduino", "Servo", "Inverse Kinematics", "Bluetooth"],
};

type FilterCategory = FilterTab | "All";

const projects = [
  {
    id: 1,
    name: "Agentic AI Insurance Assistant",
    description:
      "Multi-agent AI assistant for health insurance — helps users retrieve claims, understand policy documents, and take action through natural language.",
    gradient: "from-violet-900/50 to-slate-800",
    viewMoreUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
    filters: ["AI/ML", "Full Stack"] as FilterCategory[],
  },
  {
    id: 2,
    name: "Custom ChatBot",
    description:
      "Full-stack AI chatbot with TypeScript/Express backend and React interface. Maintains conversation context, markdown support, typing indicators.",
    gradient: "from-sky-900/50 to-indigo-900/60",
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/Custom-ChatBot",
    filters: ["Web", "Full Stack", "AI/ML"] as FilterCategory[],
  },
  {
    id: 3,
    name: "Local RAG Assistant with LLaMA 3.2",
    description:
      "Privacy-preserving, offline-capable RAG assistant for asking natural language questions over PDF documents using an on-device LLM.",
    gradient: "from-indigo-900/50 to-slate-800",
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/RAG",
    filters: ["AI/ML"] as FilterCategory[],
  },
  {
    id: 4,
    name: "Autonomous Overtaking with SAC-MPC",
    description:
      "Autonomous driving system for opposite-lane overtaking combining real-time perception, reinforcement learning, and model predictive control.",
    gradient: "from-emerald-900/50 to-slate-800",
    viewMoreUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
    githubUrl: "#",
    filters: ["AI/ML"] as FilterCategory[],
  },
  {
    id: 5,
    name: "Path Planning with Classical & RL Methods",
    description:
      "Evaluation of classical planners, learning-based models, and RL for path planning in obstacle-dense mobile robot environments.",
    gradient: "from-amber-900/40 to-slate-800",
    viewMoreUrl: "https://drive.google.com/file/d/1NObQ4eHOOZXq_Eaq2_VeIma8n2_n4giv/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/path-planning-cnn/tree/master",
    filters: ["AI/ML"] as FilterCategory[],
  },
  {
    id: 6,
    name: "IoT Based Control of Machining Process",
    description:
      "IoT-enabled machining control system using PLC and ESP32 for remote wireless monitoring and control of drilling operations.",
    gradient: "from-teal-900/50 to-slate-800",
    viewMoreUrl: "https://drive.google.com/file/d/1l86K94k6X1TRprfh9AVbgrFCd-S3wJwT/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/IOT-BASED-CONTROL-OF-MACHINING-PROCESS-USING-PLC-AND-ESP32",
    filters: ["Full Stack"] as FilterCategory[],
  },
  {
    id: 7,
    name: "Healthcare System Modeling",
    description:
      "System dynamics model of patient flow, staff availability, and medical resources showing how improving capacity reduces delays.",
    gradient: "from-rose-900/40 to-slate-800",
    viewMoreUrl: "https://drive.google.com/file/d/1lKpnkhD77BO0G6pk7cRgAiI_If8DKT/view?usp=sharing",
    githubUrl: "",
    filters: ["Full Stack"] as FilterCategory[],
  },
  {
    id: 8,
    name: "5 DOF Robotic Arm",
    description:
      "5-DOF robotic arm for pick-and-place using Arduino, servo motors, inverse kinematics, and Bluetooth mobile control.",
    gradient: "from-cyan-900/50 to-slate-800",
    viewMoreUrl: "https://drive.google.com/file/d/1bUUpsJsVT-K2xgDWUHSZJhYoxI_heK86/view?usp=sharing",
    videoUrl: "https://docs.google.com/videos/d/1_kb1BwpyCrv-dZ0lvJdkU0YRG1yVs3SdY_Vkv6-jXrY/edit",
    githubUrl: "",
    filters: ["Full Stack"] as FilterCategory[],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const tags = techMap[project.id] ?? [];

  return (
    <div
      ref={ref}
      className="rounded-2xl p-5 flex flex-col gap-4 cursor-default"
      style={{
        backgroundColor: "var(--pg-surface)",
        border: "1px solid var(--pg-border)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, box-shadow 0.2s ease, border-color 0.2s ease`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow =
          "0 8px 24px rgba(0,0,0,0.12), 0 0 16px color-mix(in srgb, var(--pg-accent) 20%, transparent)";
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
      <div className={`rounded-xl h-36 flex items-end p-4 bg-gradient-to-br ${project.gradient}`}>
        <span className="text-white/80 text-sm font-semibold leading-snug">{project.name}</span>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "var(--pg-text-muted)" }}>
        {project.description}
      </p>

      {/* Tech badges */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag) => (
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
      )}

      {/* Action row */}
      <div className="flex flex-wrap items-center gap-3 pt-2" style={{ borderTop: "1px solid var(--pg-border)" }}>
        {project.viewMoreUrl && (
          <a
            href={project.viewMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm transition-colors duration-150"
            style={{ color: "var(--pg-accent)" }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo →
          </a>
        )}
        {"videoUrl" in project && (project as any).videoUrl && (
          <a
            href={(project as any).videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs px-3 py-1 rounded-md transition-colors duration-150"
            style={{ border: "1px solid var(--pg-border)", color: "var(--pg-text-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--pg-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)")
            }
          >
            <Play className="w-3.5 h-3.5" />
            Video
          </a>
        )}
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs px-3 py-1 rounded-md transition-colors duration-150"
            style={{ border: "1px solid var(--pg-border)", color: "var(--pg-text-muted)" }}
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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filters.includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--pg-bg)" }}>
      <Header />

      <main className="flex-1 pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 pt-16">
          {/* Header */}
          <div
            ref={headerRef}
            className="mb-10 transition-all duration-500"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--pg-text-muted)" }}>
              Portfolio
            </p>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--pg-text-primary)" }}>
              Projects
            </h1>
            <p className="text-base" style={{ color: "var(--pg-text-muted)" }}>
              Things I've built that I'm proud of
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
                style={{
                  border: "1px solid var(--pg-border)",
                  backgroundColor: activeFilter === tab ? "var(--pg-accent)" : "transparent",
                  color: activeFilter === tab ? "#ffffff" : "var(--pg-text-muted)",
                  borderColor: activeFilter === tab ? "var(--pg-accent)" : "var(--pg-border)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg mb-2" style={{ color: "var(--pg-text-primary)" }}>
                Working on cool things. Coming soon.
              </p>
              <p style={{ color: "var(--pg-text-muted)" }}>
                Have questions?{" "}
                <a
                  href="https://www.linkedin.com/in/sushyamnagallapati"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--pg-accent)" }}
                  className="hover:underline"
                >
                  Reach out
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Projects;
