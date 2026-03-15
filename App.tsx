import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';

const BentoGrid = lazy(() => import('./components/BentoGrid'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Add marquee animation configuration to Tailwind dynamically if not present
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%) translateY(-50%) rotate(25deg); }
        100% { transform: translateX(100%) translateY(-50%) rotate(25deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-jumbo-offWhite text-jumbo-black selection:bg-jumbo-blue selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-jumbo-offWhite" />}>
          <BentoGrid />
          <Projects />
          <Testimonials />
          <ContactForm />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-64 bg-jumbo-black" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;