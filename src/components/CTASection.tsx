import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CTASectionProps {
  onEmailCapture: (email: string) => void;
}

export const CTASection = ({ onEmailCapture }: CTASectionProps) => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress) return;
    onEmailCapture(emailAddress);
    setEmailAddress("");
  };
  return (
    <section className="h-90 py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6">
          Leave your email address to follow the {" "}
            <span className="text-yellow-300">project</span>
          </h2>

          {/* Email Subscribe Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
              className="h-12 bg-white/90"
            />
            <Button 
              type="submit"
              variant="cta" 
              size="lg" 
              className="text-xl px-6 py-4 h-auto shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Get News
            </Button>
          </form>

          
        </div>
      </div>
    </section>
  );
};