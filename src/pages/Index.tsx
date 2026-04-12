import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-28 md:pb-24">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 py-10 lg:py-16">
            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[280px] flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <ProfileCard />
              </div>
            </aside>

            {/* Main Hero Content */}
            <div className="flex-1 min-w-0">
              <HeroContent />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
