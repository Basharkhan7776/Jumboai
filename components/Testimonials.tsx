import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "JumboAI didn't just update our software, they fundamentally rewrote our operational DNA.",
    author: "Sarah Jenks",
    role: "CTO, FinScale"
  },
  {
    text: "The most seamless integration we've ever experienced. Pure digital elegance.",
    author: "Rahul Verma",
    role: "Founder, TechFlow"
  },
  {
    text: "ROI was achieved in 3 months. The autonomous agents are scary good.",
    author: "Elena Rodriguez",
    role: "VP Ops, Global Logistics"
  },
  {
    text: "Minimalist design, maximalist impact. Exactly what we needed.",
    author: "David Chen",
    role: "Director, FutureRetail"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="mb-16 px-8 max-w-7xl mx-auto">
        <h3 className="text-sm font-bold text-jumbo-saffron uppercase tracking-widest mb-2">Trusted By</h3>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="w-[400px] md:w-[600px] flex-shrink-0 px-8 md:px-12 border-l border-gray-100"
            >
              <p className="text-2xl md:text-3xl font-medium text-jumbo-black leading-tight mb-8">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-jumbo-black">{item.author}</h4>
                <span className="text-gray-400 text-sm">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Duplicated for seamless loop */}
        <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max" aria-hidden="true">
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <motion.div 
              key={`dup-${idx}`}
              whileHover={{ scale: 0.98 }}
              className="w-[400px] md:w-[600px] flex-shrink-0 px-8 md:px-12 border-l border-gray-100"
            >
              <p className="text-2xl md:text-3xl font-medium text-jumbo-black leading-tight mb-8">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-jumbo-black">{item.author}</h4>
                <span className="text-gray-400 text-sm">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;