import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    name: "Project Name 01",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Project Name 02",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Page Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-16">
            Projects
          </h1>

          {/* Projects List */}
          <div className="space-y-24">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16"
              >
                {/* Text Content */}
                <div className="flex-1 max-w-md">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
