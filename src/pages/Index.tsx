import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { OutcomeSection } from "@/components/OutcomeSection";
import { ProductSection } from "@/components/ProductSection";
import { ContactForm } from "@/components/ContactForm";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";

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




  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        onEmailCapture={handleEmailCapture}
      />


      {/* Product Introduction Section */}
      <ProductSection />

      {/* Pain Points Section */}
      <PainSection />

      {/* Desired Outcomes Section */}
      <OutcomeSection />



      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Index;