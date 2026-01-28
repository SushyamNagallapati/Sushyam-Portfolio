import { Badge } from "@/components/ui/badge";

const skills = {
  "AI & Machine Learning": [
    "Retrieval Systems",
    "LLMs",
    "RAG Pipelines",
    "NLP",
    "Data Workflows",
  ],
  "Web Development": [
    "React",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "Tailwind CSS",
  ],
  "System Design": [
    "Architecture",
    "Distributed Systems",
    "Database Design",
    "API Design",
    "Cloud Services",
  ],
};

const SkillsSection = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-beige/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-background hover:bg-background/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
