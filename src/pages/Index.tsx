import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Hero Section */}
      <main className="flex-1 pt-16">
        <section className="min-h-[calc(100vh-180px)] flex items-center relative">
          {/* Left Beige Panel with Icon Cloud */}
          <div className="hidden lg:flex absolute left-0 top-0 w-[38%] h-full bg-beige items-center justify-center overflow-hidden">
            <div className="w-full max-w-sm opacity-80">
              <IconCloud
                iconSlugs={[
                  "typescript",
                  "javascript",
                  "python",
                  "react",
                  "tensorflow",
                  "pytorch",
                  "html5",
                  "css3",
                  "nodedotjs",
                  "postgresql",
                  "firebase",
                  "docker",
                  "git",
                  "github",
                  "amazonwebservices",
                  "figma",
                  "tailwindcss",
                  "arduino",
                  "linux",
                  "opencv",
                  "pandas",
                  "numpy",
                  "scikitlearn",
                  "flask",
                  "mongodb",
                ]}
              />
            </div>
          </div>

          {/* Content Area - left aligned, not centered */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 px-6 lg:px-0">
              {/* Profile Card - positioned at beige/white boundary */}
              <div className="w-full max-w-xs lg:ml-[calc(38%-140px)]">
                <ProfileCard />
              </div>

              {/* Hero Content - close to card */}
              <div className="max-w-md">
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
