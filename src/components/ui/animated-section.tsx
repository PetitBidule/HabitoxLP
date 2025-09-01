import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const directionVariants = {
  up: { hidden: { y: 50 }, visible: { y: 0 } },
  down: { hidden: { y: -50 }, visible: { y: 0 } },
  left: { hidden: { x: 50 }, visible: { x: 0 } },
  right: { hidden: { x: -50 }, visible: { x: 0 } },
};

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: AnimatedSectionProps) => {
  const baseVariants = { ...variants };
  const directionVariant = directionVariants[direction];
  
  // Merge direction variants with base variants
  baseVariants.hidden = { ...baseVariants.hidden, ...directionVariant.hidden };
  baseVariants.visible = { 
    ...baseVariants.visible, 
    ...directionVariant.visible,
    transition: {
      ...baseVariants.visible.transition,
      delay,
      duration,
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, margin: "-100px 0px -100px 0px" }}
      variants={baseVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6 
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6 
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
