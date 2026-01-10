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
        <section className="min-h-[calc(100vh-180px)] flex items-center">
          {/* Left Beige Panel */}
          <div className="hidden lg:block fixed left-0 top-0 w-2/5 h-full bg-beige -z-10" />

          {/* Content Area */}
          <div className="flex-1 flex items-center justify-center">
            <div className="container mx-auto px-6 py-12">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                {/* Profile Card */}
                <div className="w-full max-w-xs lg:max-w-sm">
                  <ProfileCard />
                </div>

                {/* Hero Content */}
                <div className="flex-1 max-w-lg">
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
