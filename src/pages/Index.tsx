import { Link } from "react-router-dom";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
