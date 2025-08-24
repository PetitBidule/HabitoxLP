import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
  onEmailCapture: (email: string) => void;
}

export const HeroSection = ({ onGetStarted, onEmailCapture }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Person focused on building habits" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold font-display text-foreground leading-tight my-10">
                Why Your Brain Refuses to Cooperate with{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Habit Tracking Apps
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                The ultra-simplified habit system designed for overwhelmed beginners who've tried everything else. 
                Master one tiny habit at a time—<span className="font-bold text-foreground">guaranteed</span>.
              </p>
            </div>

            {/* Three Bullet Points */}
            <div className="space-y-4">
              {[
                "Eliminates overwhelm by restricting you to ONE habit at a time (literally prevents adding more)",
                "Intensive micro-coaching ensures you actually stick with it this time",
                "Scientific habit stacking only after you've mastered your first habit"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-lg font-medium text-foreground">{point}</p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-xl px-8 py-4 h-auto"
                onClick={onGetStarted}
              >
                Follow the development of the application
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">One Habit Focus</h3>
                    <p className="text-muted-foreground">No overwhelm, just results</p>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Current Habit:</span>
                      <span className="font-medium text-success">Drink 1 glass of water</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-muted-foreground">Progress:</span>
                      <span className="font-medium text-primary">Day 12 of 30</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-3">
                      <div className="bg-gradient-success h-2 rounded-full w-2/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};