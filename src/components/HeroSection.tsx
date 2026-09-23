import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { WaitlistModal } from "@/components/ui/waitlist-modal";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeroSectionProps {
  onEmailCapture: (email: string) => void;
}

export const HeroSection = ({ onEmailCapture }: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const APP_STORE_URL = "https://apps.apple.com/fr/app/habitox/id6752669720";

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.habitox.android&hl=fr";

  const handleAppStoreClick = () => {
    window.open(APP_STORE_URL, "_blank");
  };

  const handlePlayStoreClick = () => {
    window.open(PLAY_STORE_URL, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mockups = [
    { src: "/Apple iPhone 16 Pro Max Screenshot 1.png" }, 
    { src: "/Apple iPhone 16 Pro Max Screenshot 2.png" }, 
    { src: "/Apple iPhone 16 Pro Max Screenshot 3.png" }, 
    { src: "/Apple iPhone 16 Pro Max Screenshot 4.png" }, 
    { src: "/Apple iPhone 16 Pro Max Screenshot 5.png" }, 
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-white overflow-hidden">

      <motion.header 
        className="w-full z-20 bg-background/80 backdrop-blur-md border-b border-border/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.img 
                src="/logo_launcher_habitox_android.png" 
                alt="HabitoX logo" 
                className="w-10 h-10 rounded-md object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="text-xl font-bold text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                HabitoX
              </motion.span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.button
                onClick={() => scrollToSection('hero')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Overview
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('product')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Features
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('pain')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Why it works
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
              <motion.button
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAppStoreClick}
              >
                Download
              </motion.button>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-left"
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => scrollToSection('product')}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-left"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection('pain')}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-left"
                  >
                    Why it works
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-left"
                  >
                    Contact
                  </button>
                  <Button
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium"
                    onClick={handleAppStoreClick}
                  >
                    Download
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center mb-16 max-w-4xl">
          <AnimatedSection delay={0.3} direction="up">
            <AnimatedText delay={0.4} className="block">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
                <span className="text-white
 bg-green-400 px-2 py-1 rounded-sm">Simplify</span> your habits
              </h1>
            </AnimatedText>
          </AnimatedSection>

          <AnimatedSection delay={0.6} direction="up">
            <div className="flex justify-center gap-4 flex-wrap">
              <button 
                className="transition-transform hover:scale-105 active:scale-95"
                onClick={handleAppStoreClick}
                aria-label="Télécharger sur l'App Store"
              >
                <div className="bg-black rounded-xl px-6 py-3 flex items-center gap-3 shadow-lg hover:bg-gray-900 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col items-start text-white">
                    <span className="text-[10px] font-normal leading-tight">Download on the</span>
                    <span className="text-xl font-semibold leading-tight tracking-tight">App Store</span>
                  </div>
                </div>
              </button>

              <button 
                className="transition-transform hover:scale-105 active:scale-95"
                onClick={handlePlayStoreClick}
                aria-label="Télécharger sur Google Play"
              >
                <div className="bg-black rounded-xl px-6 py-3 flex items-center gap-3 shadow-lg hover:bg-gray-900 transition-colors relative">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="flex flex-col items-start text-white">
                    <span className="text-[10px] font-normal leading-tight">GET IT ON</span>
                    <span className="text-xl font-semibold leading-tight tracking-tight">Google Play</span>
                  </div>
                </div>
              </button>
            </div>
          </AnimatedSection>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex gap-6 justify-center items-end px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            {mockups.map((mockup, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.2, 
                  delay: 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
              >
                <div 
                  style={{ 
                    width: '280px',
                    height: '580px',
                    padding: '8px'
                  }}
                >
                  <div className="w-full h-full rounded-[2.7rem] overflow-hidden bg-white">
                    <img 
                      src={mockup.src}
                      alt={`HabitoX Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onEmailCapture={onEmailCapture}
      />
    </section>
  );
};