import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, Droplets, Sprout } from "lucide-react";

interface SustainablePracticesProps {
  cropData?: {
    sustainablePractices: {
      organicInputs: string;
      composting: string;
      irrigation: string;
    };
  };
}

export const SustainablePractices = ({ cropData }: SustainablePracticesProps) => {
  if (!cropData?.sustainablePractices) {
    return (
      <section id="sustainable-practices" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Sustainable Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a specific crop above to see sustainable farming practices.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sustainable-practices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Sustainable Practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Environmentally friendly farming methods for long-term soil health
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-leaf/10 rounded-lg flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-leaf" />
              </div>
              <CardTitle>Organic Inputs</CardTitle>
              <CardDescription>Natural fertilizers and amendments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Recommended:</p>
              <p className="font-medium">{cropData.sustainablePractices.organicInputs}</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Composting</CardTitle>
              <CardDescription>Organic matter management</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Practice:</p>
              <p className="font-medium">{cropData.sustainablePractices.composting}</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-sky" />
              </div>
              <CardTitle>Efficient Irrigation</CardTitle>
              <CardDescription>Water conservation techniques</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Method:</p>
              <p className="font-medium">{cropData.sustainablePractices.irrigation}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-6 bg-leaf/5 border-leaf/20">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-leaf" />
              <h3 className="text-xl font-semibold">Environmental Benefits</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Soil Health</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Improved soil structure and fertility</li>
                  <li>• Enhanced microbial activity</li>
                  <li>• Better water retention capacity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Environmental Impact</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Reduced chemical runoff</li>
                  <li>• Lower carbon footprint</li>
                  <li>• Biodiversity preservation</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
