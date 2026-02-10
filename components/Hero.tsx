import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import SilkPlane from './SilkShader';
import MagneticButton from './MagneticButton';
import { ArrowRight, Phone } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";

const Hero: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30-minute-consultation" });
      // Safely check if namespace object exists before accessing
      if (cal && "ns" in cal && (cal as any).ns["30-minute-consultation"]) {
        (cal as any).ns["30-minute-consultation"]("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
      }
    })();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-jumbo-offWhite">
      {/* WebGL Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1.5], fov: 75 }}>
          <Suspense fallback={null}>
            <SilkPlane />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pointer-events-none">
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-jumbo-black text-center tracking-tighter leading-[0.9] pointer-events-auto"
        >
          Transform Your <br />
          <span className="relative inline-block">
             Business with AI
             {/* Subtle refraction simulation overlay could go here */}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl text-center pointer-events-auto font-light"
        >
          We build autonomous systems that scale your operations, reduce costs, and create exponential value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-6 pointer-events-auto"
        >
          <MagneticButton 
            className="!px-10 !py-5 text-lg shadow-2xl shadow-jumbo-saffron/20"
            data-cal-namespace="30-minute-consultation"
            data-cal-link="bashar-khan/30-minute-consultation"
            data-cal-config='{"layout":"month_view"}'
          >
            Start Project
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end pointer-events-none">
         <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-24 bg-gradient-to-b from-jumbo-greenNeon to-transparent rounded-full opacity-50"
         />
      </div>
    </section>
  );
};

export default Hero;