import { useState } from "react";
import horuscastImg from "@/assets/horuscast.png";
import agenticAiInsuranceImg from "@/assets/agentic-ai-insurance.png";
import customChatbotImg from "@/assets/custom-chatbot.jpg";
import pathPlanningImg from "@/assets/path-planning.png";
import localRagImg from "@/assets/local-rag-assistant.jpg";
import iotMachiningImg from "@/assets/iot-machining.png";
import roboticArmImg from "@/assets/robotic-arm.png";
import autonomousOvertakingImg from "@/assets/autonomous-overtaking.png";
import movieSearchImg from "@/assets/movie-search.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Github, Play, ExternalLink } from "lucide-react";

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
    name: "Agentic Financial Claim Assistant",
    description:
      "Built a modular multi-agent AI system using Python, LangGraph, and LLaMA 3.2 to resolve health insurance claim queries. The system integrates a RAG pipeline for policy document understanding, an NL-to-SQL engine using graph-based schema traversal, and an automated email drafting agent. Evaluated using accuracy, precision, and latency metrics, RAG achieved ~88% answer correctness and NL-to-SQL achieved 100% accuracy on small schemas.",
    image: agenticAiInsuranceImg,
    viewMoreUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
    categories: ["Selected", "AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 5,
    name: "AI Powered SaaS Chatbot",
    description:
      "Built a full-stack AI chatbot to explore how large language models integrate into real web applications. The TypeScript/Node.js backend handles multi-turn conversations with context tracking, input validation, and clean separation across route, controller, service, and repository layers. The React frontend includes real-time typing indicators, markdown rendering, and auto-scroll.",
    image: customChatbotImg,
    viewMoreUrl: "",
    liveUrl: "https://custom-chatbot-tau-swart.vercel.app/",
    githubUrl: "https://github.com/SushyamNagallapati/Custom-ChatBot",
    categories: ["Web/Mobile Apps", "Selected"] as ProjectCategory[],
  },
  {
    id: 9,
    name: "HorusCast Weather and Trail Planning App",
    description:
      "Built a full-stack geospatial web app to help users plan outdoor activities by combining trail discovery and hyper-local weather data. The Node.js/Express.js backend aggregates three external REST APIs, Mapbox for maps and geocoding, OpenStreetMap Overpass API for trail discovery, and NASA POWER API for climate data, into a single structured response for the frontend.",
    image: horuscastImg,
    viewMoreUrl: "",
    githubUrl: "",
    categories: ["Web/Mobile Apps"] as ProjectCategory[],
  },
  {
    id: 10,
    name: "Movie Search Web Application",
    description:
      "Built a React frontend consuming a live movie database REST API with real-time search, favorites management, and reusable component architecture. Uses useState and useEffect hooks for clean state management and dynamic data rendering.",
    image: movieSearchImg,
    viewMoreUrl: "",
    liveUrl: "https://movie-application-inky.vercel.app/",
    githubUrl: "",
    categories: ["Web/Mobile Apps"] as ProjectCategory[],
  },
  {
    id: 2,
    name: "Local RAG Assistant with LLaMA 3.2",
    description:
      "Built a local-first Retrieval-Augmented Generation (RAG) assistant that allows users to ask natural language questions over their own PDF documents using an on-device LLM. The goal was to explore privacy-preserving, offline-capable AI workflows while maintaining strong retrieval accuracy and response grounding.",
    image: localRagImg,
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/RAG",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 3,
    name: "Autonomous Overtaking with SAC-MPC and Vision-Based Perception",
    description:
      "Designed and evaluated a full-stack autonomous driving system for opposite-lane overtaking on two-way roads, combining real-time perception, reinforcement learning, and model predictive control. The goal was to enable safe, human-like overtaking behavior under tight spatial and safety constraints using only onboard vision.",
    image: autonomousOvertakingImg,
    viewMoreUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
    githubUrl: "#",
    categories: ["Selected"] as ProjectCategory[],
  },
  {
    id: 4,
    name: "Path Planning with Classical, Learning-Based, and RL Methods",
    description:
      "Explored how classical planners, learning-based models, and reinforcement learning can be combined to improve path planning for mobile robots in obstacle-dense environments. The project evaluated when traditional algorithms break down, how far learning-based models can generalize, and whether RL can refine planned paths under realistic dynamics.",
    image: pathPlanningImg,
    viewMoreUrl: "https://drive.google.com/file/d/1NObQ4eHOOZXq_Eaq2_VeIma8n2_n4giv/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/path-planning-cnn/tree/master",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 7,
    name: "IoT Based Control of Machining Process",
    description:
      "Built an IoT-based remote monitoring and control system integrating a Delta PLC with an ESP32 microcontroller over Wi-Fi for real-time machining data acquisition and process control. Implemented hardware interfacing between sensors, relay modules, and the PLC, replacing manual control with a wireless interface. Evaluated system reliability, data transmission accuracy, and remote command responsiveness.",
    image: iotMachiningImg,
    viewMoreUrl: "https://drive.google.com/file/d/1l86K94k6X1TRprfh9AVbgrFCd-S3wJwT/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/IOT-BASED-CONTROL-OF-MACHINING-PROCESS-USING-PLC-AND-ESP32",
    categories: ["Design System Components"] as ProjectCategory[],
  },
  {
    id: 8,
    name: "5 DOF Robotic Arm",
    description:
      "Built a 5-degree-of-freedom robotic arm for pick-and-place tasks using Arduino, servo motors, and Bluetooth control. The arm uses inverse kinematics to calculate joint angles and accurately reach target positions, allowing it to handle objects of different sizes and orientations. The project demonstrates hands-on experience with robotics, motion control, and embedded systems for basic automation use cases.",
    image: roboticArmImg,
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

      <main className="flex-1 pt-20 sm:pt-24 pb-28 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Page Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Projects
          </h1>

          {/* Category Tabs — scrollable on mobile */}
          <div className="flex flex-nowrap sm:flex-wrap gap-2 mb-10 sm:mb-16 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full whitespace-nowrap flex-shrink-0 ${
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
            <div className="space-y-16 sm:space-y-24">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex flex-col gap-8 lg:gap-16 ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } items-start`}
                >
                  {/* Text Content */}
                  <div className="w-full lg:flex-1 lg:max-w-md">
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                      {project.name}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.viewMoreUrl && (
                        <a
                          href={project.viewMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-9 px-5 sm:px-6 text-xs sm:text-sm font-medium rounded-base bg-primary text-primary-foreground border-2 border-nb-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                        >
                          View more
                        </a>
                      )}
                      {"liveUrl" in project && (project as any).liveUrl && (
                        <Button variant="outline" size="sm" className="rounded-full px-5 sm:px-6 gap-2 text-xs sm:text-sm" asChild>
                          <a href={(project as any).liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Live View
                          </a>
                        </Button>
                      )}
                      {"videoUrl" in project && (project as any).videoUrl && (
                        <Button variant="outline" size="sm" className="rounded-full px-5 sm:px-6 gap-2 text-xs sm:text-sm" asChild>
                          <a href={(project as any).videoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Video
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="rounded-full px-5 sm:px-6 gap-2 text-xs sm:text-sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Open in Github
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="w-full lg:flex-1 flex items-center justify-center">
                    {"liveUrl" in project && (project as any).liveUrl ? (
                      <a
                        href={(project as any).liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-sm sm:max-w-md mx-auto cursor-pointer transition-transform hover:scale-[1.02]"
                        aria-label={`Open live view of ${project.name}`}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-auto object-contain shadow-lg rounded-sm"
                        />
                      </a>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full max-w-sm sm:max-w-md h-auto object-contain shadow-lg mx-auto rounded-sm"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-base sm:text-lg text-foreground mb-2">
                No projects in this category yet.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
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
