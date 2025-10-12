import { Hero } from "@/components/Hero";
import { CropRecommendations } from "@/components/CropRecommendations";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CropRecommendations />
      <Features />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
