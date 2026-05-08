import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const techStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "FastAPI",
  "LangGraph",
  "OpenAI API",
  "RAG",
  "Tailwind CSS",
  "REST APIs",
  "SQLite",
];

const HeroContent = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      {/* Eyebrow */}
      <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
        Software Engineer · AI/ML · Full Stack
      </p>

      {/* Name */}
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-5">
        Sushyam Nagallapati
      </h1>

      {/* Bio */}
      <p className="text-muted-foreground max-w-md leading-relaxed text-sm sm:text-[0.95rem] mb-8">
        Full-stack engineer and MEng candidate at the University of Waterloo, specialized in AI/ML systems and web development. I build multi-agent AI pipelines, RAG systems, and full-stack web apps and care about making them fast, readable, and usable.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <Button
          variant="default"
          size="lg"
          className="rounded-full px-8 font-medium text-sm tracking-wide shadow-md hover:shadow-md transition-all duration-300"
          asChild
        >
          <Link to="/projects">PROJECTS</Link>
        </Button>
        <a
          href="https://drive.google.com/file/d/126JI9aQvQU0hWq553fLzv8OrTuS7K7I7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium tracking-wide rounded-base bg-background text-foreground border-2 border-nb-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
        >
          RESUME
        </a>
      </div>

      {/* Currently */}
      <div className="flex items-center gap-2 mb-5">
        <span
          aria-hidden
          className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
        />
        <p className="text-xs text-muted-foreground">
          Open to New Grad Roles · Software Engineer, Full Stack, AI/ML
        </p>
      </div>

      {/* Tech Stack */}
      <div className="max-w-md">
        <h2 className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((item) => (
            <span
              key={item}
              className="text-xs text-muted-foreground border border-border/60 rounded-full px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
