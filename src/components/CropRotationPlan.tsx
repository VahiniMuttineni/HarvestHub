import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, TrendingUp } from "lucide-react";

interface CropRotationPlanProps {
  cropData?: {
    cropRotation: string[];
  };
}

export const CropRotationPlan = ({ cropData }: CropRotationPlanProps) => {
  if (!cropData?.cropRotation) {
    return (
      <section id="crop-rotation" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Seasonal Crop Rotation Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a specific crop above to see recommended crop rotation strategies.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="crop-rotation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Seasonal Crop Rotation Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recommended crops to rotate with for soil health and pest management
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <RotateCcw className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Recommended Rotation Crops</CardTitle>
                  <CardDescription>
                    These crops help maintain soil fertility and reduce pest pressure
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cropData.cropRotation.map((crop, index) => (
                  <div
                    key={crop}
                    className="p-4 bg-muted/50 rounded-lg border hover:bg-muted transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-leaf" />
                      <span className="font-medium">{crop}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Year {index + 2} rotation crop
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-leaf/5 rounded-lg border border-leaf/20">
                <h4 className="font-semibold text-leaf mb-2">Benefits of Crop Rotation:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Improves soil fertility and structure</li>
                  <li>• Reduces soil-borne diseases and pests</li>
                  <li>• Optimizes nutrient utilization</li>
                  <li>• Increases overall farm productivity</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
