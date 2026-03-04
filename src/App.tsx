import { useEffect, useState, useMemo } from "react";
// @ts-ignore
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-luxury-black min-h-screen selection:bg-gold selection:text-luxury-black noise-overlay">
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0F0F0F;
        }
        ::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #996515;
        }
        ${!isTouchDevice ? `
        html {
          cursor: none !important;
        }
        a, button, [role="button"], select, select option {
          cursor: none !important;
        }
        ` : ''}
      `}</style>

      <Preloader />
      <Cursor />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[100] origin-left shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Services />
          <div className="bg-luxury-gray">
            <About />
          </div>
          <Gallery />
          <Pricing />
          <Testimonials />
          <div className="bg-luxury-gray">
            <Booking />
          </div>
        </motion.div>
      </main>

      <Map />
      <Footer />

      {/* Floating Premium WhatsApp Button */}
      <motion.a
        href="https://wa.me/916397516652"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 glass-gold rounded-full flex items-center justify-center shadow-2xl group transition-all duration-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gold group-hover:text-luxury-black transition-colors duration-500 relative z-10"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z" />
        </svg>
      </motion.a>
    </div>
  );
}
