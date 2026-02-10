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
      onClick={() => setIsHovered(!isHovered)}
      className="fixed top-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-50 rounded-full max-w-[calc(100vw-2rem)]"
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
            className="flex items-center gap-2 px-2 cursor-pointer flex-shrink-0" 
            onClick={(e) => {
              e.stopPropagation();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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
                <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap px-4 md:px-6 border-l border-gray-200/50 ml-2 overflow-x-auto no-scrollbar max-w-[calc(100vw-160px)] md:max-w-none">
                  {navLinks.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-600 hover:text-jumbo-black transition-colors"
                      data-cursor="hover"
                      onClick={(e) => e.stopPropagation()}
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