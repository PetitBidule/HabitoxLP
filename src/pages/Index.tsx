import { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { OutcomeSection } from "@/components/OutcomeSection";
import { ProductSection } from "@/components/ProductSection";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedSection } from "@/components/ui/animated-section";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleEmailCapture = async (email: string) => {
    try {
      const { error } = await supabase.functions.invoke('send-subscription-email', {
        body: { email },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "A welcome email has been sent to your inbox.",
      });
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Oops",
        description: "We couldn't send the email. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleGetStarted = () => {
    // Smooth scroll to CTA section
    document.getElementById('cta-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <HeroSection 
        onGetStarted={handleGetStarted}
        onEmailCapture={handleEmailCapture}
      />

      {/* Pain Points Section */}
      <AnimatedSection delay={0.1} direction="up">
        <PainSection />
      </AnimatedSection>

      {/* Desired Outcomes Section */}
      <AnimatedSection delay={0.2} direction="up">
        <OutcomeSection />
      </AnimatedSection>

      {/* Product Introduction Section */}
      <AnimatedSection delay={0.2} direction="up">
        <ProductSection />
      </AnimatedSection>

      {/* Final CTA Section */}
        <div id="cta-section">
          <CTASection onEmailCapture={handleEmailCapture} />
        </div>

      {/* Contact Form */}
      <AnimatedSection delay={0.2} direction="up">
        <ContactForm />
      </AnimatedSection>

      {/* Footer */}
      <footer 
        className="bg-foreground text-background py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">HabitoX</h3>
                <p className="text-background/80 text-sm leading-relaxed">
                  The revolutionary habit system that guarantees success by focusing on ONE habit at a time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href="mailto:habitoxts@gmail.com" className="text-background/80 hover:text-background transition-colors">
                    habitoxts@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-background/20 pt-8">
              <p className="text-background/60 text-sm">
                © 2025 HabitoX. All rights reserved. | 
                <Link to="/privacy" className="hover:text-background ml-1">Privacy Policy</Link> | 
                <Link to="/terms" className="hover:text-background ml-1">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;