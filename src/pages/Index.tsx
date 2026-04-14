import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center pt-16 pb-28 md:pb-20">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-0">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
