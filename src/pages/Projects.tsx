import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ProjectCategory = "Selected" | "AI/ML Experiments" | "Web/Mobile Apps" | "Design System Components";

const categories: ProjectCategory[] = [
  "Selected",
  "AI/ML Experiments",
  "Web/Mobile Apps",
  "Design System Components",
];

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

const projects = [
  {
    id: 1,
    name: "Agentic AI Insurance Assistant",
    description:
      "Multi-agent AI assistant for health insurance — helps users retrieve claims, understand policy documents, and take action through natural language with privacy and role-based constraints.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=450&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
    categories: ["Selected"] as ProjectCategory[],
  },
  {
    id: 5,
    name: "Custom ChatBot",
    description:
      "Full-stack AI chatbot with TypeScript/Express backend and React interface. Maintains conversation context, markdown support, typing indicators, and clean UX patterns.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/Custom-ChatBot",
    categories: ["Web/Mobile Apps", "Selected"] as ProjectCategory[],
  },
  {
    id: 3,
    name: "Local RAG Assistant with LLaMA 3.2",
    description:
      "Privacy-preserving, offline-capable RAG assistant for asking natural language questions over PDF documents using an on-device LLM.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=450&fit=crop",
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/RAG",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 4,
    name: "Autonomous Overtaking with SAC-MPC",
    description:
      "Full-stack autonomous driving system for opposite-lane overtaking combining real-time perception, reinforcement learning, and model predictive control.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=450&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
    githubUrl: "#",
    categories: ["Selected"] as ProjectCategory[],
  },
  {
    id: 2,
    name: "Path Planning with Classical & RL Methods",
    description:
      "Evaluation of classical planners, learning-based models, and RL for path planning in obstacle-dense mobile robot environments.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1NObQ4eHOOZXq_Eaq2_VeIma8n2_n4giv/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/path-planning-cnn/tree/master",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 6,
    name: "IoT Based Control of Machining Process",
    description:
      "IoT-enabled machining control system using PLC and ESP32 for remote wireless monitoring and control of drilling operations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1l86K94k6X1TRprfh9AVbgrFCd-S3wJwT/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/IOT-BASED-CONTROL-OF-MACHINING-PROCESS-USING-PLC-AND-ESP32",
    categories: ["Design System Components"] as ProjectCategory[],
  },
  {
    id: 7,
    name: "Healthcare System Modeling",
    description:
      "System dynamics model of patient flow, staff availability, and medical resources showing how improving capacity reduces delays and staff overload.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1lKpnkhD77BO0G6pk7cRgAiI_H3At8DKT/view?usp=sharing",
    githubUrl: "",
    categories: ["Design System Components"] as ProjectCategory[],
  },
  {
    id: 8,
    name: "5 DOF Robotic Arm",
    description:
      "5-DOF robotic arm for pick-and-place using Arduino, servo motors, inverse kinematics, and Bluetooth mobile control.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1bUUpsJsVT-K2xgDWUHSZJhYoxI_heK86/view?usp=sharing",
    videoUrl: "https://docs.google.com/videos/d/1_kb1BwpyCrv-dZ0lvJdkU0YRG1yVs3SdY_Vkv6-jXrY/edit?usp=sharing",
    githubUrl: "",
    categories: ["Design System Components"] as ProjectCategory[],
  },
];

const BrowserFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-xl overflow-hidden border border-border/50 shadow-xl shadow-black/10 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
    {/* Browser chrome */}
    <div className="bg-muted/80 border-b border-border/50 px-4 py-2.5 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <div className="w-3 h-3 rounded-full bg-green-400/70" />
      </div>
      <div className="flex-1 mx-3 bg-background/60 rounded-md px-3 py-1 text-xs text-muted-foreground truncate">
        {alt.toLowerCase().replace(/\s+/g, "-")}.dev
      </div>
    </div>
    {/* Screenshot */}
    <div className="overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>
  </div>
);

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const tags = techMap[project.id] ?? [];

  return (
    <div
      ref={ref}
      className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden shadow-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.4s ease, border-color 0.4s ease`,
      }}
    >
      {/* Browser frame image */}
      <div className="p-4 pb-0">
        <BrowserFrame src={project.image} alt={project.name} />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="font-serif text-lg font-bold text-foreground mb-2 leading-tight">
          {project.name}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide bg-primary/10 text-primary border-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
          {project.viewMoreUrl && (
            <Button variant="default" size="sm" className="rounded-full px-4 text-xs gap-1.5 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 transition-all" asChild>
              <a href={project.viewMoreUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3" />
                View more
              </a>
            </Button>
          )}
          {"videoUrl" in project && (project as any).videoUrl && (
            <Button variant="outline" size="sm" className="rounded-full px-4 text-xs gap-1.5 hover:bg-primary/5 hover:border-primary/40 transition-all" asChild>
              <a href={(project as any).videoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="w-3 h-3" />
                Video
              </a>
            </Button>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <Button variant="outline" size="sm" className="rounded-full px-4 text-xs gap-1.5 hover:bg-primary/5 hover:border-primary/40 transition-all" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Selected");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Page Header */}
          <div
            ref={headerRef}
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            className="mb-12"
          >
            <p className="text-sm tracking-[0.3em] text-primary/70 uppercase font-medium mb-3">
              Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground max-w-xl">
              A collection of things I've built — from AI systems to robotics and web apps.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-transparent text-muted-foreground border-border/50 hover:text-foreground hover:border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-foreground mb-2">
                Working on cool things. Will be sharing them here soon.
              </p>
              <p className="text-muted-foreground">
                Have questions?{" "}
                <a href="https://www.linkedin.com/in/sushyamnagallapati" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Reach out
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
