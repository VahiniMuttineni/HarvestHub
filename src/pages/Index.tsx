import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CropRecommendations } from "@/components/CropRecommendations";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedSoilType, setSelectedSoilType] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  const handleRecommendationsUpdate = (soilType: string, location: string, season: string) => {
    setSelectedSoilType(soilType);
    setSelectedLocation(location);
    setSelectedSeason(season);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onRecommendationsUpdate={handleRecommendationsUpdate} />
      <CropRecommendations
        soilType={selectedSoilType}
        location={selectedLocation}
        season={selectedSeason}
      />
      <Features />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
