import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Booking", href: "#booking" },
];

function MagneticLink({ children, href }: { children: React.ReactNode; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative px-4 py-2 text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-gold transition-colors duration-500"
    >
      {children}
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setIsScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateNavbar);
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? "py-4" : "py-10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`relative px-6 md:px-12 py-4 md:py-6 rounded-full transition-all duration-700 ${isScrolled ? "bg-luxury-black/80 backdrop-blur-2xl border border-white/5" : "bg-transparent"
          } flex items-center justify-between`}>

          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-serif tracking-[0.3em] text-gold flex flex-col items-center"
          >
            <span className="leading-none">LUMIÈRE</span>
            <span className="text-[5px] md:text-[6px] tracking-[0.8em] opacity-40 -mt-1">SALON & SPA</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <MagneticLink href={link.href}>
                  {link.name}
                </MagneticLink>
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-6 text-gold opacity-40">
              <Instagram className="w-4 h-4 cursor-none hover:opacity-100 transition-opacity" />
              <Facebook className="w-4 h-4 cursor-none hover:opacity-100 transition-opacity" />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gold p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-luxury-black/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-12"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-gold"
            >
              <X className="w-10 h-10" />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif text-gold hover:italic transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
