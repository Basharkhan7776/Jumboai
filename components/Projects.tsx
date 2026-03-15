import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const projects = [
  {
    title: "Our Projects",
    subtitle: "Featured Work",
    description: "Discover how we've transformed businesses with enterprise-grade AI solutions and autonomous agents.",
    accent: "text-jumbo-blue",
    number: "",
    blobs: [
      "top-[10%] left-[10%] w-96 h-96 bg-blue-200/50",
      "bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-indigo-200/40"
    ]
  },
  {
    title: "ERM",
    subtitle: "Examination Resource Management",
    description: "An AI-driven examination management application designed to streamline and secure the entire examination lifecycle with unprecedented accuracy.",
    accent: "text-blue-600",
    number: "01",
    blobs: [
      "top-[-10%] left-[-10%] w-96 h-96 bg-blue-200/50",
      "bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-indigo-200/40"
    ]
  },
  {
    title: "CRM",
    subtitle: "Citizen Resource Management",
    description: "A comprehensive platform empowering national leadership to monitor, analyze, and resolve citizen grievances in real-time at massive scale.",
    accent: "text-indigo-600",
    number: "02",
    blobs: [
      "top-[20%] right-[-5%] w-80 h-80 bg-violet-200/40",
      "bottom-[-10%] left-[-10%] w-[25rem] h-[25rem] bg-blue-200/30"
    ]
  },
  {
    title: "Interviewer",
    subtitle: "Agentic Interview Model",
    description: "An autonomous agentic template automating the technical interview process using advanced AI and tools like Open Claw to find top talent.",
    accent: "text-fuchsia-600",
    number: "03",
    blobs: [
      "top-[-10%] right-[20%] w-96 h-96 bg-fuchsia-200/30",
      "bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-blue-200/30"
    ]
  }
];

const ProjectCard = ({
  project,
  index,
  scrollYProgress,
  total
}: {
  project: typeof projects[0];
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) => {
  const transitions = total - 1;
  const flipStart = index * (1 / transitions);
  const flipEnd = (index + 1) * (1 / transitions);

  const scaleStart = (index - 1) * (1 / transitions);
  const scaleEnd = index * (1 / transitions);

  // Rotate X: 0 to 90 (flips up and away)
  const rotateX = useTransform(
    scrollYProgress,
    [flipStart, flipEnd],
    [0, 90]
  );

  // Scale: 0.8 to 1 (incoming card grows)
  const scale = useTransform(
    scrollYProgress,
    [scaleStart, scaleEnd],
    index === 0 ? [1, 1] : [0.8, 1]
  );

  // Y offset: slides up slightly as it scales
  const y = useTransform(
    scrollYProgress,
    [scaleStart, scaleEnd],
    index === 0 ? ["0%", "0%"] : ["10%", "0%"]
  );

  // Darken: simulates shadow as the card flips away (lighter for light theme)
  const darken = useTransform(
    scrollYProgress,
    [flipStart, flipEnd],
    [0, 0.15]
  );

  const isLast = index === total - 1;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
      style={{
        zIndex: total - index,
        transformOrigin: "top",
        rotateX: isLast ? 0 : rotateX,
        scale,
        y,
        transformStyle: "preserve-3d",
      }}
    >
      <div 
        className="w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#f8f9fa] relative flex flex-col justify-between p-8 md:p-16 lg:p-24 border border-white/60"
        style={{
          boxShadow: "20px 20px 60px #d1d5db, -20px -20px 60px #ffffff"
        }}
      >
        
        {/* Darkening Overlay for 3D Shadow Effect */}
        {!isLast && (
          <motion.div 
            className="absolute inset-0 bg-black z-30 pointer-events-none"
            style={{ opacity: darken }}
          />
        )}

        {/* Subtle Blue Gradients (Blobs) */}
        {project.blobs.map((blob, i) => (
          <div key={i} className={`absolute rounded-full blur-3xl pointer-events-none z-0 ${blob}`} />
        ))}

        {/* Background Noise/Texture (Subtle for light theme) */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
          }}
        />

        {/* Top Header */}
        <div className="relative z-20 flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-gray-400 font-mono text-sm md:text-base tracking-widest uppercase mb-2">
              {index === 0 ? "Portfolio" : "Our Projects"}
            </span>
            <span className="text-gray-600 font-medium text-lg md:text-xl tracking-wide">
              {project.subtitle}
            </span>
          </div>
          <span className="text-5xl md:text-7xl font-black text-gray-100 leading-none drop-shadow-sm">
            {project.number}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="relative z-20 max-w-5xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-jumbo-black mb-6 md:mb-10 tracking-tighter leading-none">
            {project.title}
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl md:text-3xl text-gray-600 font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
            
            {/* Scroll Indicator (Only on first card) */}
            {index === 0 && (
              <motion.div 
                className="flex items-center gap-3 text-gray-400 font-mono text-sm uppercase tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>Scroll to explore</span>
                <div className="w-8 h-[1px] bg-gray-300" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // The height of the section determines how long the scroll animation takes.
  // 400vh means 3 full viewport heights of scrolling to get through the 3 transitions.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-jumbo-offWhite">
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden bg-jumbo-offWhite"
        style={{ perspective: "2000px" }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            scrollYProgress={scrollYProgress}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
