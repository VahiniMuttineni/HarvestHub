import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Scale, Target } from "lucide-react";

interface ProfitYieldPredictionProps {
  cropData?: {
    profitPrediction: {
      estimatedYield: string;
      inputCost: string;
      marketValue: string;
      expectedProfit: string;
    };
  };
}

export const ProfitYieldPrediction = ({ cropData }: ProfitYieldPredictionProps) => {
  if (!cropData?.profitPrediction) {
    return (
      <section id="profit-prediction" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Profit & Yield Prediction
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a specific crop above to see profit and yield predictions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="profit-prediction" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Profit & Yield Prediction
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estimated yields, costs, and profit margins per hectare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-harvest/10 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-harvest" />
              </div>
              <CardTitle>Estimated Yield</CardTitle>
              <CardDescription>Per hectare production</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-harvest mb-1">{cropData.profitPrediction.estimatedYield}</p>
              <p className="text-sm text-muted-foreground">Average production</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-destructive" />
              </div>
              <CardTitle>Input Cost</CardTitle>
              <CardDescription>Total production costs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive mb-1">{cropData.profitPrediction.inputCost}</p>
              <p className="text-sm text-muted-foreground">Per hectare</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Market Value</CardTitle>
              <CardDescription>Average selling price</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent mb-1">{cropData.profitPrediction.marketValue}</p>
              <p className="text-sm text-muted-foreground">Per unit</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-leaf/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-leaf" />
              </div>
              <CardTitle>Expected Profit</CardTitle>
              <CardDescription>Net profit margin</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-leaf mb-1">{cropData.profitPrediction.expectedProfit}</p>
              <p className="text-sm text-muted-foreground">Per hectare</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-to-r from-leaf/5 to-harvest/5 border-leaf/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-leaf" />
              <h3 className="text-xl font-semibold">Profitability Analysis</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-leaf mb-2">
                  {(() => {
                    const profit = cropData.profitPrediction.expectedProfit;
                    const match = profit.match(/\$(\d+)-(\d+)/);
                    if (match) {
                      const avg = (parseInt(match[1]) + parseInt(match[2])) / 2;
                      return `${Math.round(avg / 100)}%`;
                    }
                    return "High";
                  })()}
                </div>
                <p className="text-sm text-muted-foreground">Profit Margin</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {(() => {
                    const cost = cropData.profitPrediction.inputCost;
                    const profit = cropData.profitPrediction.expectedProfit;
                    const costMatch = cost.match(/\$(\d+)-(\d+)/);
                    const profitMatch = profit.match(/\$(\d+)-(\d+)/);
                    if (costMatch && profitMatch) {
                      const avgCost = (parseInt(costMatch[1]) + parseInt(costMatch[2])) / 2;
                      const avgProfit = (parseInt(profitMatch[1]) + parseInt(profitMatch[2])) / 2;
                      const roi = Math.round((avgProfit / avgCost) * 100);
                      return `${roi}%`;
                    }
                    return "Good";
                  })()}
                </div>
                <p className="text-sm text-muted-foreground">ROI</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-harvest mb-2">
                  {(() => {
                    const profit = cropData.profitPrediction.expectedProfit;
                    const match = profit.match(/\$(\d+)-(\d+)/);
                    if (match) {
                      const avg = (parseInt(match[1]) + parseInt(match[2])) / 2;
                      return avg >= 1000 ? "High" : avg >= 500 ? "Medium" : "Low";
                    }
                    return "Variable";
                  })()}
                </div>
                <p className="text-sm text-muted-foreground">Profitability</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
