import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const iconSlugs = [
  "typescript", "javascript", "python", "react", "tensorflow",
  "pytorch", "html5", "css3", "nodedotjs", "postgresql",
  "firebase", "docker", "git", "github", "amazonwebservices",
  "figma", "tailwindcss", "arduino", "linux", "opencv",
  "pandas", "numpy", "scikitlearn", "flask", "mongodb",
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Hero Section */}
      <main className="flex-1 pt-16">
        <section className="min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden">
          {/* Left Panel with Icon Cloud */}
          <div className="hidden lg:flex absolute left-0 top-0 w-[38%] h-full bg-beige items-center justify-center">
            <div className="w-full max-w-[320px] opacity-70">
              <IconCloud iconSlugs={iconSlugs} />
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16 px-6 lg:px-0">
              {/* Profile Card - straddling the panel edge */}
              <div className="w-full max-w-[280px] lg:ml-[calc(38%-140px)]">
                <ProfileCard />
              </div>

              {/* Hero Content */}
              <div className="max-w-lg">
                <HeroContent />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;