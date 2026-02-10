import React, { useEffect } from 'react';
import MagneticButton from './MagneticButton';
import { Phone } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";

const Footer: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30-minute-consultation" });
      // Safely check if namespace object exists before accessing
      if (cal && "ns" in cal && (cal as any).ns["30-minute-consultation"]) {
        (cal as any).ns["30-minute-consultation"]("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
      }
    })();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-jumbo-black text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end min-h-[50vh]">
        <div className="mb-12 md:mb-0">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
            Ready to <br />
            <span className="text-gray-500">Scale?</span>
          </h2>
          <MagneticButton 
            className="bg-white !text-jumbo-black hover:!bg-gray-200 !px-12 !py-6 text-xl"
            data-cal-namespace="30-minute-consultation"
            data-cal-link="bashar-khan/30-minute-consultation"
            data-cal-config='{"layout":"month_view"}'
          >
            <Phone className="mr-2 h-6 w-6" />
            Book a Call
          </MagneticButton>
        </div>

        <div className="flex flex-col gap-8 text-right">
          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <button 
              onClick={() => scrollToSection('expertise')} 
              className="hover:text-white transition-colors cursor-pointer"
              data-cursor="hover"
            >
              Impacts
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="hover:text-white transition-colors cursor-pointer"
              data-cursor="hover"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-white transition-colors cursor-pointer"
              data-cursor="hover"
            >
              Contact
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            © 2026 JumboAI Inc.
          </p>
        </div>
      </div>

      {/* Tricolor Breathing Line */}
      <div className="absolute bottom-0 left-0 w-full h-2">
        <div className="w-full h-full bg-gradient-to-r from-jumbo-saffron via-white to-jumbo-greenNeon opacity-80 animate-pulse-slow blur-sm" />
      </div>
    </footer>
  );
};

export default Footer;