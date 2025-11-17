import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  // Timer automatique pour faire défiler les cartes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % painPoints.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(timer);
  }, [painPoints.length]);

  // Fonctions de navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % painPoints.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? painPoints.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="pain" className="py-20 bg-background">
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

          {/* Carrousel des Pain Points */}
          <div className="relative mb-16">
            {/* Carrousel Container */}
            <div className="relative overflow-hidden">
              <Card className="bg-card border-border shadow-md min-h-[300px]">
                <CardContent className="p-8">
                  <blockquote className="text-xl lg:text-2xl font-medium text-primary italic mb-6 leading-relaxed">
                    "{painPoints[currentIndex].quote}"
                  </blockquote>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {painPoints[currentIndex].description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 z-10"
              aria-label="Carte précédente"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 z-10"
              aria-label="Carte suivante"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Indicateurs (dots) */}
            <div className="flex justify-center space-x-2 mt-6">
              {painPoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller à la carte ${index + 1}`}
                />
              ))}
            </div>
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