import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  // Add smooth scroll behavior via CSS or simple React logic if needed
  // For this SPA, native scroll with our physics-based components works well
  
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
    <div className="relative min-h-screen bg-jumbo-offWhite text-jumbo-black selection:bg-jumbo-saffron selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;