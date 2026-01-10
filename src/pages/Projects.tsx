import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type ProjectCategory = "Selected" | "AI/ML" | "Web/Mobile apps" | "Experiments" | "Design system components";

const categories: ProjectCategory[] = [
  "Selected",
  "AI/ML",
  "Web/Mobile apps",
  "Experiments",
  "Design system components",
];

const projects = [
  {
    id: 1,
    name: "Project Name 01",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
    viewMoreUrl: "#",
    githubUrl: "#",
    category: "Selected" as ProjectCategory,
  },
  {
    id: 2,
    name: "Project Name 02",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    viewMoreUrl: "#",
    githubUrl: "#",
    category: "AI/ML" as ProjectCategory,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Selected");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-24 pb-16">
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
                <a href="#contact" className="text-primary hover:underline">
                  reach out
                </a>
                —I'd love to hear from you!
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
