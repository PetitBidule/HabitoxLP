import { Card, CardContent } from "@/components/ui/card";
import { Lock, MessageCircle, Layers } from "lucide-react";

export const ProductSection = () => {
  const steps = [
    {
      icon: Lock,
      title: "Choose Your ONE Habit",
      description: "Select your single most important habit. Our system literally locks you into this choice—no adding more until you've succeeded."
    },
    {
      icon: MessageCircle,
      title: "Receive Intensive Micro-Coaching",
      description: "Get daily, personalized guidance specifically for your one habit. No generic advice—tailored support for your exact situation and obstacles."
    },
    {
      icon: Layers,
      title: "Master & Stack",
      description: "Once your habit becomes automatic (typically 30-90 days), unlock the ability to scientifically stack your next habit on top of your established routine."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Product Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                HabitoX
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium mb-4">
              The Only Habit Platform That Guarantees Success by Doing Less
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The revolutionary approach that forces you to master ONE habit completely before allowing you to add another. 
              No complex features. No overwhelming dashboards. Just laser focus on what actually works.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              How It Works - 3 Simple Steps
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-cta rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-cta-foreground">{index + 1}</span>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};