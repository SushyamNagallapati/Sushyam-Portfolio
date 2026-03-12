import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
      {/* Main Heading */}
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-4 sm:mb-5">
        Hello
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 font-light">
        Here's who I am & what I do
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
          I am a System Design Engineering graduate student who builds practical
          software systems at the intersection of web applications and AI.
        </p>
        <p>
          Recently, I've been focused on building AI-powered tools using
          retrieval-based systems, chat interfaces, and data-driven workflows. I
          care deeply about making these tools reliable, easy to use, and capable
          of delivering clear, trustworthy results.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
