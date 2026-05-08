import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import TechStackStrip from "@/components/TechStackStrip";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="relative flex-1 flex items-center pt-16 pb-12 overflow-hidden">
        {/* Decorative background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06] [background-image:radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-24">
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <HeroContent />
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end flex-shrink-0">
              <ProfileCard />
            </div>
          </div>

          {/* Tech Stack — centered, full-width strip */}
          <div className="mt-16 lg:mt-20 flex flex-col items-center text-center">
            <h2 className="text-sm sm:text-base font-medium text-foreground/60 uppercase tracking-[0.2em] mb-5">
              Tech Stack
            </h2>
            <div className="w-full">
              <TechStackStrip />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
