import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Zap } from "lucide-react";

export const OutcomeSection = () => {
  const outcomes = [
    {
      icon: Target,
      title: "Unshakeable Confidence",
      description: "Finally experience what it feels like to build a habit that actually sticks. No more starting over every Monday. No more guilt about broken streaks. Just steady, automatic progress that compounds over time."
    },
    {
      icon: TrendingUp,
      title: "Systematic Success",
      description: "Instead of hoping willpower will save you, follow a proven system that guarantees habit formation. One habit. Mastered completely. Then scientifically stacked with the next. No guesswork. No overwhelm."
    },
    {
      icon: Zap,
      title: "Sustainable Growth",
      description: "Build your \"habit muscle\" properly—starting with one tiny behavior and growing stronger with each success. Create momentum that carries you through building every future habit with confidence."
    }
  ];

  return (
    <section id="outcome" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Imagine Actually{" "}
              <span className="bg-gradient-success bg-clip-text text-transparent">
                Succeeding at Building Habits
              </span>
            </h2>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-success-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {outcome.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* New Paradigm */}
          <Card className="bg-card border-success/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                The New Paradigm
              </h3>
              <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
                What if the secret isn't finding the right habit tracker, but{" "}
                <span className="font-bold text-success">limiting yourself to just one habit</span>{" "}
                until it becomes automatic? The Micro-Habit Mastery System is the first platform that 
                literally prevents you from sabotaging yourself by adding too much too soon.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};