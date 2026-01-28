import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
      {/* Main Heading */}
      <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
        Hello
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-foreground mb-8">
        Here's who I am & what I do
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <Button variant="default" size="lg" className="rounded-full px-8" asChild>
          <Link to="/projects">PROJECTS</Link>
        </Button>
        <Button variant="outline" size="lg" className="rounded-full px-8">
          RESUME
        </Button>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-muted-foreground max-w-md">
        <p>
          I am a graduate student in System Design Engineering, and I enjoy building practical software systems, especially where web applications and AI meet. I like tackling problems with messy information, unclear requirements, and solutions that need to work for real people.
        </p>
        <p>
          Recently, I have been focused on developing AI-powered tools that utilize retrieval-based systems, chat interfaces, and data-driven workflows. I focus on making these tools reliable, easy to use, and able to deliver clear results.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
