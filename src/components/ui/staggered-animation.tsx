import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: (direction: string) => ({
    opacity: 0,
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const StaggeredAnimation = ({ 
  children, 
  className = "", 
  staggerDelay = 0.1,
  initialDelay = 0,
  direction = 'up'
}: StaggeredAnimationProps) => {
  const customVariants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...containerVariants.visible.transition,
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem = ({ 
  children, 
  className = "", 
  direction = 'up',
  delay = 0 
}: StaggeredAnimationProps) => {
  return (
    <motion.div
      custom={direction}
      variants={itemVariants}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
