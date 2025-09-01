import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/ui/animated-section";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
  onEmailCapture: (email: string) => void;
}

export const HeroSection = ({ onGetStarted, onEmailCapture }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden pt-28 lg:pt-32">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroImage} 
          alt="Person focused on building habits" 
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      {/* Header - Logo + App Name */}
      <motion.header 
        className="absolute top-0 left-20 w-full z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo image */}
              <motion.img 
                src="/logo_habitox_hero_section.png" 
                alt="HabitoX logo" 
                className="w-12 h-12 rounded-md object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
              {/* App name - change as needed */}
              <motion.span 
                className="text-2xl font-bold text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                HabitoX
              </motion.span>
            </div>
          </div>
        </div>
      </motion.header>
      
      <div className="container mx-auto px-8 pb-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Headline */}
            <AnimatedSection delay={0.3} direction="up">
              <div>
                <AnimatedText delay={0.4} className="block">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight my-6 lg:my-10">
                    Why Your Brain Refuses to Cooperate with{" "}
                    <span className="bg-gradient-hero bg-clip-text text-transparent">
                      Habit Tracking Apps
                    </span>
                  </h1>
                </AnimatedText>
                
                <AnimatedText delay={0.6} className="block">
                  <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                    The ultra-simplified habit system designed for overwhelmed beginners who've tried everything else. 
                    Master one tiny habit at a time—<span className="font-bold text-foreground">guaranteed</span>.
                  </p>
                </AnimatedText>
              </div>
            </AnimatedSection>

            {/* Three Bullet Points */}
            <AnimatedSection delay={0.8} direction="up">
              <div className="space-y-3 lg:space-y-4">
                {[
                  "Eliminates overwhelm by restricting you to ONE habit at a time (literally prevents adding more)",
                  "Scientific habit stacking only after you've mastered your first habit"
                ].map((point, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.9 + (index * 0.1),
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-success flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <p className="text-base lg:text-lg font-medium text-foreground">{point}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Primary CTA */}
            <div className="pt-2 lg:pt-4">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto"
                  onClick={onGetStarted}
                >
                  Join waitlist
                </Button>
            </div>
          </div>

          {/* Right Column - Visual - Hidden on mobile */}
          <div className="hidden lg:block lg:pl-8">
            <AnimatedCard delay={0.5} direction="right">
              <div className="relative">
                <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
                  <div className="space-y-6">
                    <div 
                      className="text-center"
                    >
                      <div 
                        className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                      >
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
                      <div 
                        className="w-full bg-muted rounded-full h-2 mt-3">
                        <div className="bg-gradient-success h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};