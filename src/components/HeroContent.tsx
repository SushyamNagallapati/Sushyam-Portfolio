import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { label: "Languages", skills: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Frontend", skills: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"] },
  { label: "AI / LLM", skills: ["LLM Agents", "RAG", "LangGraph", "LLaMA 3.2", "OpenAI API", "Prompt Engineering", "ChromaDB"] },
  { label: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Linux/Unix"] },
];

const HeroContent = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
      {/* Main Heading */}
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-4 sm:mb-5">
        Sushyam Nagallapati
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 font-light">
        Software Engineer | AI/ML | Full Stack
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-10">
        <Button
          variant="default"
          size="lg"
          className="rounded-full px-8 font-medium text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          asChild
        >
          <Link to="/projects">PROJECTS</Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8 font-medium text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
          asChild
        >
          <a href="https://drive.google.com/file/d/11T8B1GGh1JL3lRuyoid2SZwoq5s4ETZ7/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
        </Button>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed text-sm sm:text-[0.95rem]">
        <p>
          I'm a Software Engineer completing my Master of Engineering in System Design (AI/ML) at the University of Waterloo. My background spans hardware, software, and AI, from building IoT systems and robotic arms during my Mechatronics undergrad, to building multi-agent AI systems, RAG pipelines, and full-stack web applications today.
        </p>
        <p>
          I work primarily in Python, TypeScript, JavaScript, React, Node.js, and FastAPI, with hands-on experience in LLM integration, agentic systems, vector databases, and REST API design.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-8 sm:mt-10 max-w-md mx-auto lg:mx-0">
        <h2 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-4">Skills</h2>
        <div className="space-y-3">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <span className="text-xs font-medium text-foreground/70 uppercase tracking-wider">{category.label}</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
