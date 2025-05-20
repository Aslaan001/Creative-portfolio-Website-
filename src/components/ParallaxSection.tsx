import React, { useRef, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
  offset = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Calculate transform based on direction
  const getTransformValues = () => {
    switch (direction) {
      case 'up':
        return [offset, -100 * speed + offset];
      case 'down':
        return [-100 * speed + offset, offset];
      case 'left':
        return [offset, -100 * speed + offset];
      case 'right':
        return [-100 * speed + offset, offset];
      default:
        return [offset, -100 * speed + offset];
    }
  };
  
  // Apply transform based on direction
  const transform = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === 'left' || direction === 'right' 
      ? [`translateX(${getTransformValues()[0]}px)`, `translateX(${getTransformValues()[1]}px)`] 
      : [`translateY(${getTransformValues()[0]}px)`, `translateY(${getTransformValues()[1]}px)`]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ transform }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;