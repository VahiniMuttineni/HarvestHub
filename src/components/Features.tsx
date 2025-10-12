import { Droplets, FlaskConical, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Water Management",
    description: "Optimize irrigation schedules and conserve water with smart recommendations tailored to your crops and climate.",
    icon: Droplets,
    color: "text-sky",
    bgColor: "bg-sky/10",
  },
  {
    title: "Fertilizer Suggestions",
    description: "Get precise fertilizer recommendations based on soil nutrients, crop requirements, and growth stages.",
    icon: FlaskConical,
    color: "text-leaf",
    bgColor: "bg-leaf/10",
  },
  {
    title: "Expert Advice",
    description: "Access agricultural expertise and best practices from farming professionals and researchers.",
    icon: BookOpen,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Yield Optimization",
    description: "Maximize your harvest with data-driven insights on timing, spacing, and crop rotation strategies.",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Smart Farming Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to grow better crops and increase your farm's efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-grow">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
