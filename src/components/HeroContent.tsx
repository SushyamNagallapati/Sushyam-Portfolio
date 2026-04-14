import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { label: "Languages", skills: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Frontend", skills: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    label: "AI / LLM",
    skills: [
      "LLM Agents",
      "RAG",
      "LangGraph",
      "LLaMA 3.2",
      "OpenAI API",
      "Prompt Engineering",
      "ChromaDB",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Linux/Unix"],
  },
];

const HeroContent = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      {/* Eyebrow */}
      <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
        Software Engineer · AI/ML · Full Stack
      </p>

      {/* Name */}
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-5">
        Sushyam Nagallapati
      </h1>

      {/* Bio */}
      <p className="text-muted-foreground max-w-md leading-relaxed text-sm sm:text-[0.95rem] mb-8">
        I'm an engineer who started with hardware and moved into software and AI. Currently completing my MEng in System Design at the University of Waterloo, I've worked on everything from IoT systems and robotic arms to multi-agent AI, RAG pipelines, and full-stack web applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
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
          <a
            href="https://drive.google.com/file/d/1_vDMkN7Duow5DrriBFWrxN1F4xY-Ujvx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </Button>
      </div>

      {/* Skills */}
      <div className="max-w-md">
        <h2 className="font-serif text-base font-bold text-foreground mb-3">
          Skills
        </h2>
        <div className="space-y-3">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <span className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal"
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
