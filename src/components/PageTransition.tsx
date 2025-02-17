import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.645, 0.045, 0.355, 1.000], // Cubic bezier for smooth easing
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: [0.645, 0.045, 0.355, 1.000],
    },
  },
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {children}
    </motion.div>
  );
}; 