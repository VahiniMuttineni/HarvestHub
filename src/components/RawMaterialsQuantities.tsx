import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sprout, FlaskConical } from "lucide-react";

interface RawMaterialsQuantitiesProps {
  cropData?: {
    rawMaterials: {
      fertilizer: string;
      seeds: string;
      irrigation: string;
    };
  };
}

export const RawMaterialsQuantities = ({ cropData }: RawMaterialsQuantitiesProps) => {
  if (!cropData?.rawMaterials) {
    return (
      <section id="raw-materials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Raw Materials & Quantities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a specific crop above to see detailed raw material requirements.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="raw-materials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Raw Materials & Quantities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential inputs and quantities required per hectare for optimal growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-grow">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-leaf/10 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-leaf" />
              </div>
              <CardTitle>Fertilizer Requirements</CardTitle>
              <CardDescription>NPK and nutrient requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Recommended:</p>
              <p className="font-medium">{cropData.rawMaterials.fertilizer}</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-harvest/10 rounded-lg flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-harvest" />
              </div>
              <CardTitle>Seed Requirements</CardTitle>
              <CardDescription>Seed quantity per hectare</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Required:</p>
              <p className="font-medium">{cropData.rawMaterials.seeds}</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-sky" />
              </div>
              <CardTitle>Irrigation Requirements</CardTitle>
              <CardDescription>Water requirements and schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Schedule:</p>
              <p className="font-medium">{cropData.rawMaterials.irrigation}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
