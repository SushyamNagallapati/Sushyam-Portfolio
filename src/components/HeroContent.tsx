import { Button } from "@/components/ui/button";

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
        <Button variant="default" size="lg" className="rounded-full px-8">
          PROJECTS
        </Button>
        <Button variant="outline" size="lg" className="rounded-full px-8">
          RESUME
        </Button>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-muted-foreground max-w-md">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
        </p>
        <p>
          I'm a great place for you to tell a story and let your users know a little more about you.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
