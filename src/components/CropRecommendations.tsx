import { Wheat, Apple, Carrot, Leaf, Sprout, FlowerIcon, Cherry, Citrus, Grape, Banana } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const crops = [
  // Cereals and Grains
  { name: "Wheat", icon: Wheat, season: "Winter", soilTypes: ["Loamy", "Clay"], growthTime: "4-6 months", yield: "High", color: "text-harvest" },
  { name: "Rice", icon: Sprout, season: "Summer", soilTypes: ["Clay", "Loamy"], growthTime: "3-6 months", yield: "High", color: "text-harvest" },
  { name: "Corn", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "High", color: "text-harvest" },
  { name: "Barley", icon: Wheat, season: "Winter", soilTypes: ["Loamy", "Sandy"], growthTime: "4-5 months", yield: "Medium", color: "text-harvest" },
  { name: "Oats", icon: Wheat, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },
  { name: "Rye", icon: Wheat, season: "Fall", soilTypes: ["Loamy", "Silty"], growthTime: "4-5 months", yield: "Medium", color: "text-harvest" },
  { name: "Millet", icon: Sprout, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "2-3 months", yield: "Medium", color: "text-harvest" },
  { name: "Sorghum", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "High", color: "text-harvest" },
  { name: "Quinoa", icon: Sprout, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },
  { name: "Buckwheat", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Silty"], growthTime: "2-3 months", yield: "Medium", color: "text-harvest" },

  // Vegetables
  { name: "Tomatoes", icon: Apple, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-destructive" },
  { name: "Carrots", icon: Carrot, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "2-4 months", yield: "Medium", color: "text-accent" },
  { name: "Potatoes", icon: Carrot, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "2-4 months", yield: "High", color: "text-accent" },
  { name: "Onions", icon: Apple, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-5 months", yield: "Medium", color: "text-destructive" },
  { name: "Garlic", icon: Leaf, season: "Fall", soilTypes: ["Loamy", "Silty"], growthTime: "8-9 months", yield: "Medium", color: "text-leaf" },
  { name: "Lettuce", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Silty"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Spinach", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Broccoli", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Cauliflower", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Cabbage", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Peppers", icon: Apple, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-destructive" },
  { name: "Eggplant", icon: Apple, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-destructive" },
  { name: "Cucumbers", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Zucchini", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Beets", icon: Carrot, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-accent" },
  { name: "Radishes", icon: Carrot, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "1 month", yield: "Medium", color: "text-accent" },
  { name: "Turnips", icon: Carrot, season: "Fall", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-accent" },
  { name: "Kale", icon: Leaf, season: "Fall", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Swiss Chard", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Arugula", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "1 month", yield: "Medium", color: "text-leaf" },

  // Fruits
  { name: "Apples", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-5 years", yield: "Medium", color: "text-leaf" },
  { name: "Bananas", icon: Banana, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "9-12 months", yield: "High", color: "text-harvest" },
  { name: "Grapes", icon: Grape, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 years", yield: "Medium", color: "text-destructive" },
  { name: "Oranges", icon: Citrus, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "2-3 years", yield: "Medium", color: "text-accent" },
  { name: "Lemons", icon: Citrus, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "2-3 years", yield: "Medium", color: "text-accent" },
  { name: "Strawberries", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "1-2 months", yield: "Medium", color: "text-destructive" },
  { name: "Blueberries", icon: Cherry, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "2-3 years", yield: "Medium", color: "text-destructive" },
  { name: "Raspberries", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 years", yield: "Medium", color: "text-destructive" },
  { name: "Peaches", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 years", yield: "Medium", color: "text-destructive" },
  { name: "Pears", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-5 years", yield: "Medium", color: "text-leaf" },
  { name: "Cherries", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 years", yield: "Medium", color: "text-destructive" },
  { name: "Plums", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 years", yield: "Medium", color: "text-destructive" },
  { name: "Apricots", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 years", yield: "Medium", color: "text-destructive" },
  { name: "Figs", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-5 years", yield: "Medium", color: "text-leaf" },
  { name: "Pomegranates", icon: Apple, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 years", yield: "Medium", color: "text-destructive" },

  // Legumes
  { name: "Soybeans", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "High", color: "text-harvest" },
  { name: "Peas", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-harvest" },
  { name: "Lentils", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },
  { name: "Chickpeas", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },
  { name: "Beans", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-harvest" },
  { name: "Lupins", icon: Sprout, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },

  // Oilseeds
  { name: "Sunflowers", icon: FlowerIcon, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "3-4 months", yield: "Medium", color: "text-accent" },
  { name: "Canola", icon: FlowerIcon, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-accent" },
  { name: "Flax", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },
  { name: "Sesame", icon: Sprout, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },

  // Fiber Crops
  { name: "Cotton", icon: FlowerIcon, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "5-6 months", yield: "High", color: "text-accent" },
  { name: "Hemp", icon: Leaf, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-leaf" },
  { name: "Jute", icon: Leaf, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-leaf" },

  // Sugar Crops
  { name: "Sugarcane", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "12-18 months", yield: "High", color: "text-harvest" },
  { name: "Sugar Beets", icon: Carrot, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "5-6 months", yield: "High", color: "text-accent" },

  // Beverage Crops
  { name: "Coffee", icon: Apple, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 years", yield: "Medium", color: "text-destructive" },
  { name: "Tea", icon: Leaf, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-5 years", yield: "Medium", color: "text-leaf" },
  { name: "Cocoa", icon: Apple, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "3-5 years", yield: "Medium", color: "text-accent" },

  // Nuts
  { name: "Almonds", icon: Sprout, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "3-4 years", yield: "Medium", color: "text-harvest" },
  { name: "Walnuts", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "4-5 years", yield: "Medium", color: "text-harvest" },
  { name: "Pistachios", icon: Sprout, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "4-5 years", yield: "Medium", color: "text-harvest" },
  { name: "Cashews", icon: Sprout, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "2-3 years", yield: "Medium", color: "text-harvest" },
  { name: "Peanuts", icon: Sprout, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "4-5 months", yield: "Medium", color: "text-harvest" },

  // Spices and Herbs
  { name: "Basil", icon: Leaf, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Mint", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Rosemary", icon: Leaf, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "1-2 years", yield: "Medium", color: "text-leaf" },
  { name: "Thyme", icon: Leaf, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "1-2 years", yield: "Medium", color: "text-leaf" },
  { name: "Sage", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 years", yield: "Medium", color: "text-leaf" },
  { name: "Oregano", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Cilantro", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Parsley", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Dill", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Fennel", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 months", yield: "Medium", color: "text-leaf" },
  { name: "Chives", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Tarragon", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 years", yield: "Medium", color: "text-leaf" },

  // Root Vegetables
  { name: "Sweet Potatoes", icon: Carrot, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "3-4 months", yield: "High", color: "text-accent" },
  { name: "Cassava", icon: Carrot, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "8-12 months", yield: "High", color: "text-accent" },
  { name: "Yams", icon: Carrot, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "6-9 months", yield: "High", color: "text-accent" },

  // Leafy Greens
  { name: "Collards", icon: Leaf, season: "Fall", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 months", yield: "Medium", color: "text-leaf" },
  { name: "Mustard Greens", icon: Leaf, season: "Fall", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Bok Choy", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 months", yield: "Medium", color: "text-leaf" },
  { name: "Celery", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-leaf" },

  // Additional Vegetables
  { name: "Asparagus", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "2-3 years", yield: "Medium", color: "text-leaf" },
  { name: "Artichokes", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 years", yield: "Medium", color: "text-leaf" },
  { name: "Brussels Sprouts", icon: Sprout, season: "Fall", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-leaf" },
  { name: "Fennel", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 months", yield: "Medium", color: "text-leaf" },
  { name: "Leeks", icon: Leaf, season: "Fall", soilTypes: ["Loamy", "Clay"], growthTime: "4-5 months", yield: "Medium", color: "text-leaf" },
  { name: "Rhubarb", icon: Leaf, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 years", yield: "Medium", color: "text-leaf" },

  // Tropical Fruits
  { name: "Mangoes", icon: Apple, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "4-5 years", yield: "Medium", color: "text-destructive" },
  { name: "Pineapples", icon: Apple, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "1-2 years", yield: "Medium", color: "text-destructive" },
  { name: "Papayas", icon: Apple, season: "Summer", soilTypes: ["Loamy", "Sandy"], growthTime: "6-9 months", yield: "Medium", color: "text-destructive" },
  { name: "Coconuts", icon: Sprout, season: "Summer", soilTypes: ["Sandy", "Loamy"], growthTime: "5-6 years", yield: "Medium", color: "text-harvest" },
  { name: "Avocados", icon: Apple, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "4-5 years", yield: "Medium", color: "text-destructive" },

  // Berries
  { name: "Blackberries", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 years", yield: "Medium", color: "text-destructive" },
  { name: "Cranberries", icon: Cherry, season: "Spring", soilTypes: ["Sandy", "Loamy"], growthTime: "2-3 years", yield: "Medium", color: "text-destructive" },
  { name: "Gooseberries", icon: Cherry, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "1-2 years", yield: "Medium", color: "text-destructive" },

  // Additional Crops
  { name: "Hops", icon: Sprout, season: "Spring", soilTypes: ["Loamy", "Clay"], growthTime: "3-4 months", yield: "Medium", color: "text-harvest" },
  { name: "Saffron", icon: FlowerIcon, season: "Fall", soilTypes: ["Loamy", "Sandy"], growthTime: "3-4 months", yield: "Low", color: "text-accent" },
  { name: "Vanilla", icon: Sprout, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "2-3 years", yield: "Low", color: "text-harvest" },
  { name: "Rubber", icon: Leaf, season: "Summer", soilTypes: ["Loamy", "Clay"], growthTime: "5-7 years", yield: "Medium", color: "text-leaf" },
];

interface CropRecommendationsProps {
  soilType?: string;
  season?: string;
}

export const CropRecommendations = ({ soilType, season }: CropRecommendationsProps) => {
  const filteredCrops = crops.filter((crop) => {
    const soilMatch = !soilType || crop.soilTypes.some((soil) =>
      soil.toLowerCase().includes(soilType.toLowerCase())
    );
    const seasonMatch = !season || crop.season.toLowerCase() === season.toLowerCase();
    return soilMatch && seasonMatch;
  });

  // Only show recommendations if both soilType and season are selected
  if (!soilType || !season) {
    return (
      <section id="recommendations" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Crop Recommendations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your soil type and season above to get personalized crop recommendations.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="recommendations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Recommended Crops
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Based on your {soilType} soil and {season} season, these crops will thrive in your fields
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Showing {filteredCrops.length} crop{filteredCrops.length !== 1 ? 's' : ''} for {soilType} soil in {season}
          </p>
        </div>

        {filteredCrops.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grow">
            {filteredCrops.map((crop, index) => {
              const Icon = crop.icon;
              return (
                <Card
                  key={crop.name}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-12 h-12 ${crop.color} group-hover:animate-float`} />
                      <Badge variant={crop.yield === "High" ? "default" : "secondary"}>
                        {crop.yield} Yield
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{crop.name}</CardTitle>
                    <CardDescription>Best in {crop.season}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Suitable Soil Types:
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {crop.soilTypes.map((soil) => (
                            <Badge key={soil} variant="outline">
                              {soil}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Growth Time:
                        </p>
                        <p className="text-sm">{crop.growthTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No crops found for the selected soil type and season combination.
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Try selecting different options or contact our experts for advice.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
