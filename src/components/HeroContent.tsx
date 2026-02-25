import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "System Design Engineer",
  "RAG & LLM Builder",
];

const HeroContent = () => {
  const typedText = useTypingAnimation(roles);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.06]"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 py-24">
        {/* Profile Card */}
        <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <div className="relative group">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/50 via-indigo-500/30 to-primary/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 flex flex-col items-center shadow-2xl">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-primary/30 shadow-lg shadow-primary/20">
                <img
                  src={profilePhoto}
                  alt="Sushyam Nagallapati"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-serif text-lg font-bold text-foreground text-center leading-tight">
                Sushyam Nagallapati
              </h2>
              <div className="w-8 h-0.5 bg-primary my-3 rounded-full" />
              <p className="text-xs tracking-[0.2em] text-primary uppercase font-medium">
                SOFTWARE DEVELOPER
              </p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Eyebrow */}
          <p
            className="text-sm tracking-[0.3em] text-primary/80 uppercase font-medium mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Welcome to my portfolio
          </p>

          {/* Main Heading */}
          <h1
            className="font-serif font-bold leading-[0.92] mb-5 animate-fade-in"
            style={{
              fontSize: "clamp(3rem, 8vw, 4.5rem)",
              animationDelay: "0.3s",
              opacity: 0,
            }}
          >
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Sushyam
            </span>
          </h1>

          {/* Typing subtitle */}
          <div
            className="h-9 mb-8 animate-fade-in"
            style={{ animationDelay: "0.45s", opacity: 0 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              {typedText}
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle animate-[pulse_1s_ease-in-out_infinite]" />
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 animate-fade-in"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 font-medium text-sm tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 bg-gradient-to-r from-primary to-indigo-500 hover:scale-[1.02]"
              asChild
            >
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-medium text-sm tracking-wide border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>

          {/* Bio */}
          <div
            className="space-y-3 text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed text-[0.95rem] animate-fade-in"
            style={{ animationDelay: "0.65s", opacity: 0 }}
          >
            <p>
              System Design Engineering graduate student building practical software
              at the intersection of web applications and AI.
            </p>
            <p>
              Focused on RAG systems, chat interfaces, and data-driven workflows —
              tools that are reliable, easy to use, and deliver trustworthy results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
