import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { TrendingUp, Zap, Globe, ShieldCheck } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { cn } from '../utils/cn';

// --- Micro-Interaction Components ---

const GlobeVisual = () => {
  const Mesh = () => {
    const mesh = useRef<THREE.Mesh>(null);
    
    useFrame((state, delta) => {
      if (mesh.current) {
        mesh.current.rotation.y += delta * 0.2;
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }
    });

    return (
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.4, 1]} />
        {/* Darker wireframe color and higher opacity for better contrast */}
        <meshBasicMaterial wireframe color="#334155" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    );
  };

  return (
    // Increased opacity from 0.5 to 1, removed grayscale
    <div className="absolute right-[-20%] bottom-[-20%] w-[120%] h-[120%] pointer-events-none z-0 opacity-100">
      <Canvas camera={{ position: [0, 0, 3] }} gl={{ alpha: true }}>
        <Mesh />
      </Canvas>
    </div>
  );
};

const RoiGraph = () => {
  return (
    // Removed opacity-30, now fully visible with gradient handling transparency
    <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-0">
       <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d">
         <defs>
           <linearGradient id="gradientRoi" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stopColor="#FF9933" stopOpacity="0.5"/>
             <stop offset="100%" stopColor="#FF9933" stopOpacity="0"/>
           </linearGradient>
         </defs>
         <motion.path
            d="M0 40 Q 15 35 30 25 T 100 10"
            fill="none"
            stroke="#FF9933"
            strokeWidth="2" // Increased stroke width
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
         />
         <motion.path
            d="M0 40 Q 15 35 30 25 T 100 10 L 100 40 L 0 40 Z"
            fill="url(#gradientRoi)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
         />
       </svg>
    </div>
  )
}

const EfficiencyChart = () => {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none z-0">
       <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
         <path
            className="text-gray-200" // Darker gray for better track visibility
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
         />
         <motion.path
            className="text-jumbo-green" // Used darker green for better contrast on white
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="100, 100"
            initial={{ strokeDashoffset: 100 }}
            whileInView={{ strokeDashoffset: 2 }} // 98%
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
         />
       </svg>
    </div>
  )
}

const CostBarChart = () => {
  const bars = [0.2, 0.5, 0.3, 0.8, 0.4, 0.6, 0.3];
  return (
    // Increased opacity from 0.2 to 0.5
    <div className="absolute bottom-0 right-0 p-8 w-1/2 h-full flex items-end justify-end gap-3 opacity-50 pointer-events-none z-0">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-full bg-jumbo-saffron rounded-t-sm"
          initial={{ height: 0 }}
          whileInView={{ height: `${height * 60}%` }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
        />
      ))}
    </div>
  )
}

// --- Data Configuration ---

const cardData = [
  {
    title: "ROI Increase",
    value: "3.8x",
    description: "Average return on investment within the first 12 months.",
    icon: TrendingUp,
    colSpan: "col-span-1 md:col-span-2",
    accent: "text-jumbo-saffron",
    visual: <RoiGraph />
  },
  {
    title: "Efficiency",
    value: "98%",
    description: "Task automation accuracy across all deployed agents.",
    icon: Zap,
    colSpan: "col-span-1",
    accent: "text-jumbo-green", // Changed to darker green
    visual: <EfficiencyChart />
  },
  {
    title: "Global Scale",
    value: "24/7",
    description: "Autonomous operations running in 12 timezones simultaneously.",
    icon: Globe,
    colSpan: "col-span-1",
    accent: "text-blue-600", // Darker blue
    visual: <GlobeVisual />
  },
  {
    title: "Cost Reduction",
    value: "-45%",
    description: "Operational overhead reduction in Q1 2024.",
    icon: ShieldCheck,
    colSpan: "col-span-1 md:col-span-2",
    accent: "text-jumbo-saffron",
    visual: <CostBarChart />
  }
];

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string; visual?: React.ReactNode }> = ({ children, className, visual }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "group relative border border-gray-200 bg-white/50 overflow-hidden rounded-3xl",
        className
      )}
      onMouseMove={handleMouseMove}
      data-cursor="hover"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      {visual}
      <div className="relative h-full z-20 flex flex-col justify-between">{children}</div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section id="expertise" className="py-32 px-4 md:px-8 max-w-7xl mx-auto bg-jumbo-offWhite">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-jumbo-black mb-6 tracking-tight">
          Measurable <br/> Impact.
        </h2>
        <div className="w-20 h-1 bg-jumbo-saffron rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        {cardData.map((card, idx) => (
          <SpotlightCard key={idx} className={cn("p-8 md:p-10", card.colSpan)} visual={card.visual}>
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100/80 backdrop-blur-sm flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-gray-500 font-medium text-sm uppercase tracking-wider">{card.title}</h3>
            </div>
            
            <div>
              <motion.div 
                className={cn("text-6xl md:text-7xl font-bold mb-4 tracking-tighter", card.accent)}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {card.value}
              </motion.div>
              <p className="text-gray-600 leading-relaxed font-light max-w-xs">{card.description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;