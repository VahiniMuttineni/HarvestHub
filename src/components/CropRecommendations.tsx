import { Wheat, Apple, Carrot, Leaf, Sprout, FlowerIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const crops = [
  {
    name: "Wheat",
    icon: Wheat,
    season: "Winter",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "4-6 months",
    yield: "High",
    color: "text-harvest",
  },
  {
    name: "Tomatoes",
    icon: Apple,
    season: "Summer",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-destructive",
  },
  {
    name: "Carrots",
    icon: Carrot,
    season: "Spring",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-4 months",
    yield: "Medium",
    color: "text-accent",
  },
  {
    name: "Lettuce",
    icon: Leaf,
    season: "Spring",
    soilTypes: ["Loamy", "Silty"],
    growthTime: "1-2 months",
    yield: "Medium",
    color: "text-leaf",
  },
  {
    name: "Corn",
    icon: Sprout,
    season: "Summer",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-harvest",
  },
  {
    name: "Sunflowers",
    icon: FlowerIcon,
    season: "Summer",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-accent",
  },
];

export const CropRecommendations = () => {
  return (
    <section id="recommendations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Recommended Crops
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Based on your soil and season, these crops will thrive in your fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grow">
          {crops.map((crop, index) => {
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
      </div>
    </section>
  );
};
