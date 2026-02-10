import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className, 
  onClick,
  variant = 'primary',
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-4 rounded-full font-medium text-sm transition-colors duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-jumbo-black text-white hover:bg-neutral-800",
    outline: "border border-jumbo-black/20 text-jumbo-black hover:border-jumbo-black",
    ghost: "text-jumbo-black hover:bg-gray-100"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      data-cursor="hover"
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      
      {/* Ripple Effect Container */}
      {variant === 'primary' && (
        <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
           <span className="absolute top-1/2 left-0 w-[200%] h-[200%] -translate-y-1/2 -translate-x-full bg-gradient-to-r from-transparent via-jumbo-saffron/30 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
        </span>
      )}
    </motion.button>
  );
};

export default MagneticButton;