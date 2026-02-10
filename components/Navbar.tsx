import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import GlassSurface from './GlassSurface';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isExpanded = !isScrolled || isHovered;

  const navLinks = [
    { name: 'Impacts', href: '#expertise' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-6 left-6 z-50 rounded-full"
      initial={false}
      animate={{
        width: "auto",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={50}
        brightness={98}
        opacity={0.6}
        blur={12}
        borderWidth={1}
        mixBlendMode="overlay"
      >
        <motion.div 
           layout="position"
           className="flex items-center p-2"
        >
          <motion.div 
            layout="position" 
            className="flex items-center gap-2 px-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-cursor="hover"
          >
            <div className="w-8 h-8 bg-jumbo-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">J</span>
            </div>
            <motion.span 
              layout="position"
              className="font-bold text-jumbo-black tracking-tight whitespace-nowrap"
            >
              JumboAI
            </motion.span>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center overflow-hidden"
              >
                <div className="flex items-center gap-6 whitespace-nowrap px-6 border-l border-gray-200/50 ml-2">
                  {navLinks.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-600 hover:text-jumbo-black transition-colors"
                      data-cursor="hover"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </GlassSurface>
    </motion.nav>
  );
};

export default Navbar;