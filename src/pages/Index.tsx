import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Hero Section */}
      <main className="flex-1 pt-16 pb-20">
        <section className="min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden">
          {/* Left Panel */}
          <div className="hidden lg:block absolute left-0 top-0 w-[38%] h-full bg-beige" />

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