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
        <section className="min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden">
          {/* Left Panel — desktop only */}
          <div className="hidden lg:block absolute left-0 top-0 w-[38%] h-full bg-beige" />

          {/* Content Area */}
          <div className="w-full relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-6 sm:px-8 lg:px-0 py-12 lg:py-0">
            {/* Profile Card — centered within the beige panel on desktop */}
            <div className="flex-shrink-0 w-full max-w-[280px] mx-auto lg:mx-0 lg:w-[38%] lg:max-w-none lg:flex lg:justify-center">
              <ProfileCard />
            </div>

            {/* Hero Content */}
            <div className="w-full max-w-lg text-center lg:text-left lg:pl-10 xl:pl-14">
              <HeroContent />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
