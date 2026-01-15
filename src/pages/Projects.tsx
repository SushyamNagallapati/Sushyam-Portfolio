import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type ProjectCategory = "Selected" | "AI/ML Experiments" | "Web/Mobile apps" | "Design system components";

const categories: ProjectCategory[] = [
  "Selected",
  "AI/ML Experiments",
  "Web/Mobile apps",
  "Design system components",
];

const projects = [
  {
    id: 1,
    name: "Local RAG Assistant with LLaMA 3.2",
    description:
      "Built a local-first Retrieval-Augmented Generation (RAG) assistant that allows users to ask natural language questions over their own PDF documents using an on-device LLM. The goal was to explore privacy-preserving, offline-capable AI workflows while maintaining strong retrieval accuracy and response grounding.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    viewMoreUrl: "#",
    githubUrl: "https://github.com/SushyamNagallapati/RAG",
    categories: ["Selected", "AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 2,
    name: "Path Planning with Classical, Learning-Based, and RL Methods",
    description:
      "Explored how classical planners, learning-based models, and reinforcement learning can be combined to improve path planning for mobile robots in obstacle-dense environments. The project evaluated when traditional algorithms break down, how far learning-based models can generalize, and whether RL can refine planned paths under realistic dynamics.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    viewMoreUrl: "#",
    githubUrl: "https://github.com/SushyamNagallapati/path-planning-cnn/tree/master",
    categories: ["Selected", "AI/ML Experiments"] as ProjectCategory[],
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
                      <Button variant="default" size="sm" className="rounded-full px-6" asChild>
                        <a href={project.viewMoreUrl}>View more</a>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full px-6 gap-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Open in Github
                        </a>
                      </Button>
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
