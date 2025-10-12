import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CropRecommendations } from "@/components/CropRecommendations";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedSoilType, setSelectedSoilType] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  const handleRecommendationsUpdate = (soilType: string, season: string) => {
    setSelectedSoilType(soilType);
    setSelectedSeason(season);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onRecommendationsUpdate={handleRecommendationsUpdate} />
      <CropRecommendations soilType={selectedSoilType} season={selectedSeason} />
      <Features />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
