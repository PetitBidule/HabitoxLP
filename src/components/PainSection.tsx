import { Card, CardContent } from "@/components/ui/card";

export const PainSection = () => {
  const painPoints = [
    {
      quote: "I swear, I want to be that person who works out regularly, drinks enough water, and actually sleeps at a decent hour—but my brain just refuses to cooperate.",
      description: "You download yet another habit app, excited to finally get your life together. You add 5-10 habits you want to build. Within a week, you're ignoring notifications and feeling like a failure again."
    },
    {
      quote: "Reminders don't work because I ignore them, and tracking apps start feeling kinda pointless after a while.",
      description: "Every habit tracker promises to be different, but they all make the same mistake: they assume you can handle multiple habits at once. Your phone buzzes with reminders you've learned to tune out."
    },
    {
      quote: "Just curious what keeps people on track when willpower isn't enough.",
      description: "You've tried motivation, willpower, and complex systems. Nothing sticks. The problem isn't you—it's that every solution tries to change everything at once instead of focusing on what actually works."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Do Any of These Sound{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Familiar?
              </span>
            </h2>
          </div>

          {/* Pain Points */}
          <div className="space-y-8 mb-16">
            {painPoints.map((pain, index) => (
              <Card key={index} className="bg-card border-border shadow-md">
                <CardContent className="p-8">
                  <blockquote className="text-xl lg:text-2xl font-medium text-primary italic mb-6 leading-relaxed">
                    "{pain.quote}"
                  </blockquote>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Belief Deconstruction */}
          <Card className="bg-accent/50 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Here's the Real Problem
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  The reason habit apps fail isn't because you lack willpower—it's because they violate the 
                  fundamental science of habit formation. Your brain can only handle building{" "}
                  <span className="font-bold text-primary">ONE automatic behavior at a time</span>. 
                  Every app that lets you track 10+ habits is setting you up to fail.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};