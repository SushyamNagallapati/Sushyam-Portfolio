import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

const skillCategories = [
  { label: "AI / LLM", skills: ["LLM Agents", "RAG", "LangGraph", "LLaMA 3.2", "OpenAI API", "Prompt Engineering", "ChromaDB"] },
  { label: "Languages", skills: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"] },
  { label: "Frontend", skills: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Linux/Unix"] },
];

const HeroContent = () => {
  return (
    <div className="animate-fade-in text-center lg:text-left" style={{ animationDelay: "0.4s" }}>
      {/* Main Heading */}
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-5">
        Sushyam Nagallapati
      </h1>

      {/* Value Proposition Tagline */}
      <p className="text-lg sm:text-xl md:text-[1.35rem] text-foreground/85 mb-8 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
        I build AI systems that ship — from RAG pipelines to full-stack products.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
        <Button
          variant="default"
          size="lg"
          className="rounded-full px-10 py-6 font-medium text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 gap-2"
          asChild
        >
          <Link to="/projects">
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="rounded-full px-8 py-6 font-medium text-sm tracking-wide text-muted-foreground hover:text-foreground transition-all duration-300 gap-2"
          asChild
        >
          <a href="https://drive.google.com/file/d/1_vDMkN7Duow5DrriBFWrxN1F4xY-Ujvx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-[1.75] text-sm sm:text-[0.95rem]">
        <p>
          I'm a Software Engineer completing my Master of Engineering in System Design (AI/ML) at the University of Waterloo. My background spans hardware, software, and AI — from building IoT systems and robotic arms during my Mechatronics undergrad, to building multi-agent AI systems, RAG pipelines, and full-stack web applications today.
        </p>
        <p>
          I work primarily in Python, TypeScript, JavaScript, React, Node.js, and FastAPI, with hands-on experience in LLM integration, agentic systems, vector databases, and REST API design.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12 max-w-lg mx-auto lg:mx-0">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">Skills</h2>
        <div className="space-y-5">
          {skillCategories.map((category) => (
            <div key={category.label} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-foreground/75 uppercase tracking-[0.15em]">
                  {category.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pl-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal px-3.5 py-1.5"
                  >
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
