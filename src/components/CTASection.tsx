import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock } from "lucide-react";

interface CTASectionProps {
  onPurchase: () => void;
}

export const CTASection = ({ onPurchase }: CTASectionProps) => {
  return (
    <section className="h-90 py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6">
          Leave your email address to follow the {" "}
            <span className="text-yellow-300">project</span>
          </h2>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-xl px-10 py-6 h-auto shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={onPurchase}
            >
              Start My Micro-Habit Journey - $47
            </Button>
            
           
          </div>

          
        </div>
      </div>
    </section>
  );
};