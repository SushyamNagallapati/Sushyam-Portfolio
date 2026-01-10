import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Hero Section */}
      <main className="flex-1 pt-16">
        <section className="min-h-[calc(100vh-180px)] flex items-stretch">
          {/* Left Beige Panel */}
          <div className="hidden lg:block w-2/5 bg-beige relative">
            <div className="absolute inset-0" />
          </div>

          {/* Content Area */}
          <div className="flex-1 flex items-center">
            <div className="container mx-auto px-6 py-12">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Profile Card - Positioned to overlap the beige panel on desktop */}
                <div className="lg:absolute lg:left-1/4 lg:transform lg:-translate-x-1/2 w-full max-w-xs lg:max-w-sm">
                  <ProfileCard />
                </div>

                {/* Spacer for profile card on desktop */}
                <div className="hidden lg:block w-80" />

                {/* Hero Content */}
                <div className="flex-1 max-w-lg lg:pl-8">
                  <HeroContent />
                </div>
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
