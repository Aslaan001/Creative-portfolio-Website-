import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  // Configure initial animation properties based on direction
  const getDirectionalProperties = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
        return { opacity: 0 };
      default:
        return { y: distance };
    }
  };

  const initialProps = {
    opacity: 0,
    ...getDirectionalProperties(),
  };

  return (
    <motion.div
      ref={ref}
      initial={initialProps}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initialProps}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;