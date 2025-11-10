import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Droplets, Bug } from "lucide-react";

interface RiskManagementAdviceProps {
  cropData?: {
    riskManagement: {
      droughtResistance: string;
      floodResistance: string;
      pestControl: string;
      insurance: string;
    };
  };
}

export const RiskManagementAdvice = ({ cropData }: RiskManagementAdviceProps) => {
  if (!cropData?.riskManagement) {
    return (
      <section id="risk-management" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Risk Management Advice
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a specific crop above to see risk management strategies.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const getResistanceColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="risk-management" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Risk Management Advice
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategies to protect your crop from environmental and biological risks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-sky" />
                </div>
                <div>
                  <CardTitle>Environmental Risks</CardTitle>
                  <CardDescription>Drought and flood resistance</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Drought Resistance:</span>
                <Badge className={getResistanceColor(cropData.riskManagement.droughtResistance)}>
                  {cropData.riskManagement.droughtResistance}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Flood Resistance:</span>
                <Badge className={getResistanceColor(cropData.riskManagement.floodResistance)}>
                  {cropData.riskManagement.floodResistance}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Bug className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <CardTitle>Pest & Disease Control</CardTitle>
                  <CardDescription>Monitoring and prevention strategies</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Recommended practices:</p>
              <p className="font-medium">{cropData.riskManagement.pestControl}</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle>Insurance Recommendations</CardTitle>
                  <CardDescription>Protect your investment with appropriate coverage</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="font-medium">{cropData.riskManagement.insurance}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
