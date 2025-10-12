import { MessageSquare, Users, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const discussions = [
  {
    author: "Sarah Johnson",
    initials: "SJ",
    title: "Best practices for organic tomato farming",
    excerpt: "I've been experimenting with companion planting and saw amazing results...",
    likes: 24,
    replies: 12,
  },
  {
    author: "Mike Chen",
    initials: "MC",
    title: "Irrigation system recommendations",
    excerpt: "Looking for advice on drip irrigation vs sprinkler systems for wheat...",
    likes: 18,
    replies: 8,
  },
  {
    author: "Emma Rodriguez",
    initials: "ER",
    title: "Dealing with clay soil challenges",
    excerpt: "My farm has heavy clay soil and I'm struggling with drainage...",
    likes: 31,
    replies: 15,
  },
];

export const Community = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              Farmer Community
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow farmers, share experiences, and learn from each other
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 animate-grow">
          {discussions.map((discussion, index) => (
            <Card
              key={discussion.title}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 group-hover:scale-110 transition-transform">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {discussion.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        {discussion.author}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {discussion.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {discussion.replies}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {discussion.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {discussion.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}

          <div className="text-center pt-6">
            <Button variant="hero" size="lg">
              Join the Community
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
