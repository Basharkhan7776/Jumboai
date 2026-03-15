import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface BreathingBlobProps {
  className?: string;
  delay?: number;
  duration?: number;
}

const BreathingBlob: React.FC<BreathingBlobProps> = ({ 
  className, 
  delay = 0, 
  duration = 8 
}) => {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0 bg-gradient-to-br from-blue-300/30 via-indigo-400/20 to-blue-500/30",
        className
      )}
      animate={{
        scale: [0.8, 1.8, 0.8],
        opacity: [0.3, 0.7, 0.3],
        rotate: [0, 90, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

export default BreathingBlob;
