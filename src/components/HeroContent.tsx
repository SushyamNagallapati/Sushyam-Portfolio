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
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] mb-3">
        Sushyam Nagallapati
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-foreground/80 mb-6 font-light">
        Software Engineer | AI/ML | Full Stack
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
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
          <a href="https://drive.google.com/file/d/1_vDMkN7Duow5DrriBFWrxN1F4xY-Ujvx/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
        </Button>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
        <p>
          I'm a Software Engineer completing my Master of Engineering in System Design (AI/ML) at the University of Waterloo. My background spans hardware, software, and AI — from building IoT systems and robotic arms during my Mechatronics undergrad, to building multi-agent AI systems, RAG pipelines, and full-stack web applications today.
        </p>
        <p>
          I work primarily in Python, TypeScript, JavaScript, React, Node.js, and FastAPI, with hands-on experience in LLM integration, agentic systems, vector databases, and REST API design. I enjoy building things that actually work and solve real problems.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-10 max-w-lg mx-auto lg:mx-0">
        <h2 className="font-serif text-base font-semibold text-foreground mb-5">Skills</h2>
        <div className="space-y-4">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <span className="text-xs font-medium text-foreground/70 uppercase tracking-wider">{category.label}</span>
              <div className="flex flex-wrap gap-2 mt-1.5">
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
