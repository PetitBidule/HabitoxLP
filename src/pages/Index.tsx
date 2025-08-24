import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { OutcomeSection } from "@/components/OutcomeSection";
import { ProductSection } from "@/components/ProductSection";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleEmailCapture = async (email: string) => {
    // Simulate email capture
    toast({
      title: "Success!",
      description: "Your free Habit Selection Guide is on its way to your inbox.",
    });
    console.log("Email captured:", email);
  };

  const handleGetStarted = () => {
    // Smooth scroll to CTA section
    document.getElementById('cta-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handlePurchase = async () => {
    if (isProcessingPayment) return;
    
    setIsProcessingPayment(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (error) {
        console.error('Payment error:', error);
        toast({
          title: "Payment Error",
          description: "There was an issue processing your payment. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        onGetStarted={handleGetStarted}
        onEmailCapture={handleEmailCapture}
      />

      {/* Pain Points Section */}
      <PainSection />

      {/* Desired Outcomes Section */}
      <OutcomeSection />


      {/* Product Introduction Section */}
      <ProductSection />

      {/* Final CTA Section */}
      <div id="cta-section">
        <CTASection onPurchase={handlePurchase} />
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
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
                <a href="#" className="hover:text-background ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-background ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;