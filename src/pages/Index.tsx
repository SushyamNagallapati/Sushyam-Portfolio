import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Hero Section */}
      <main className="flex-1 pt-16 pb-28 md:pb-20">
        <section className="min-h-screen flex items-start relative overflow-hidden">
          {/* Left Panel — desktop only */}
          <div className="hidden lg:block absolute left-0 top-0 w-[38%] h-full bg-beige" />

          {/* Content Area */}
          <div className="w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 px-6 sm:px-8 lg:px-16 pt-8 lg:pt-16">
              {/* Profile Card */}
              <div className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] lg:ml-[calc(38%-200px)] flex-shrink-0 mx-auto lg:mx-0">
                <ProfileCard />
              </div>

              {/* Hero Content */}
              <div className="w-full max-w-lg text-center lg:text-left">
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
