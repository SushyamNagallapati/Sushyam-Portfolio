import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";

type ProjectCategory = "Selected" | "AI/ML Experiments" | "Web/Mobile Apps" | "Design System Components";

const categories: ProjectCategory[] = [
  "Selected",
  "AI/ML Experiments",
  "Web/Mobile Apps",
  "Design System Components",
];

const projects = [
  {
    id: 1,
    name: "Agentic AI Insurance Assistant",
    description:
      "Designed and built a multi-agent AI assistant for the health insurance domain to help users retrieve claims, understand policy documents, and take action through natural language queries. The goal was to reduce manual claim lookups and improve accuracy in document-driven responses while operating within strict privacy and role-based constraints.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
    categories: ["Selected"] as ProjectCategory[],
  },
  {
    id: 5,
    name: "Custom ChatBot",
    description:
      "Designed and built a full-stack AI chatbot using a TypeScript and Express backend with a React-based chat interface. The system maintains conversation context, handles validation and errors, and integrates with OpenAI to generate responses. The project focuses on clean architecture, modular backend design, and essential chat UX patterns such as message styling, markdown support, typing indicators, and auto-scrolling to deliver a clear and usable chat experience.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/Custom-ChatBot",
    categories: ["Web/Mobile Apps", "Selected"] as ProjectCategory[],
  },
  {
    id: 2,
    name: "Local RAG Assistant with LLaMA 3.2",
    description:
      "Built a local-first Retrieval-Augmented Generation (RAG) assistant that allows users to ask natural language questions over their own PDF documents using an on-device LLM. The goal was to explore privacy-preserving, offline-capable AI workflows while maintaining strong retrieval accuracy and response grounding.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/RAG",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 3,
    name: "Autonomous Overtaking with SAC-MPC and Vision-Based Perception",
    description:
      "Designed and evaluated a full-stack autonomous driving system for opposite-lane overtaking on two-way roads, combining real-time perception, reinforcement learning, and model predictive control. The goal was to enable safe, human-like overtaking behavior under tight spatial and safety constraints using only onboard vision.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
    githubUrl: "#",
    categories: ["Selected"] as ProjectCategory[],
  },
  {
    id: 4,
    name: "Path Planning with Classical, Learning-Based, and RL Methods",
    description:
      "Explored how classical planners, learning-based models, and reinforcement learning can be combined to improve path planning for mobile robots in obstacle-dense environments. The project evaluated when traditional algorithms break down, how far learning-based models can generalize, and whether RL can refine planned paths under realistic dynamics.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1NObQ4eHOOZXq_Eaq2_VeIma8n2_n4giv/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/path-planning-cnn/tree/master",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 7,
    name: "IoT Based Control of Machining Process",
    description:
      "Built an IoT-enabled machining control system using a PLC and ESP32 to remotely monitor and control drilling operations. The system replaces manual and wired control with a mobile-based interface, improving safety, reducing downtime, and enabling real-time operation control through wireless communication.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1l86K94k6X1TRprfh9AVbgrFCd-S3wJwT/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/IOT-BASED-CONTROL-OF-MACHINING-PROCESS-USING-PLC-AND-ESP32",
    categories: ["Design System Components"] as ProjectCategory[],
  },
  {
    id: 6,
    name: "Healthcare System Modeling",
    description:
      "Built a system dynamics model to understand how patient flow, staff availability, and medical resources affect hospital performance. The model shows how high patient demand, staffing shortages, and limited equipment lead to delays, staff overload, and poorer patient outcomes, and how improving capacity and response time can significantly improve care under pressure.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1lKpnkhD77BO0G6pk7cRgAiI_H3At8DKT/view?usp=sharing",
    githubUrl: "",
    categories: ["Design System Components"] as ProjectCategory[],
  },
  {
    id: 8,
    name: "5 DOF Robotic Arm",
    description:
      "Built a 5-degree-of-freedom robotic arm for pick-and-place tasks using Arduino, servo motors, and Bluetooth control. The arm uses inverse kinematics to calculate joint angles and accurately reach target positions, allowing it to handle objects of different sizes and orientations. The project demonstrates hands-on experience with robotics, motion control, and embedded systems for basic automation use cases.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    viewMoreUrl: "https://drive.google.com/file/d/1bUUpsJsVT-K2xgDWUHSZJhYoxI_heK86/view?usp=sharing",
    videoUrl: "https://docs.google.com/videos/d/1_kb1BwpyCrv-dZ0lvJdkU0YRG1yVs3SdY_Vkv6-jXrY/edit?usp=sharing",
    githubUrl: "",
    categories: ["Design System Components"] as ProjectCategory[],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Selected");

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  );

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Page Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            Projects
          </h1>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects List */}
          {filteredProjects.length > 0 ? (
            <div className="space-y-24">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16"
                >
                  {/* Text Content */}
                  <div className="flex-1 max-w-md">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {project.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.viewMoreUrl && (
                        <Button variant="default" size="sm" className="rounded-full px-6" asChild>
                          <a href={project.viewMoreUrl}>View more</a>
                        </Button>
                      )}
                      {"videoUrl" in project && (project as any).videoUrl && (
                        <Button variant="outline" size="sm" className="rounded-full px-6 gap-2" asChild>
                          <a href={(project as any).videoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4" />
                            Video
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="rounded-full px-6 gap-2" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Open in Github
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="flex-1">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full max-w-md h-auto object-cover shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-foreground mb-2">
                Working on cool things. Will be sharing them here soon.
              </p>
              <p className="text-muted-foreground">
                Have questions? Feel free to{" "}
                <a href="https://www.linkedin.com/in/sushyamnagallapati" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  reach out
                </a>
                . I'd love to hear from you!
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
