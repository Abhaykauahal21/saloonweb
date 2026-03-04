import { motion } from "motion/react";
import { useState, useMemo } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1600&q=80",
    size: "tall" // makeup artist applying makeup
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    size: "medium" // hair styling
  },
  {
    src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1600&q=80",
    size: "small" // facial treatment
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
    size: "medium" // bridal makeup
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=80",
    size: "tall" // hair coloring
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80",
    size: "small" // manicure / nail care
  }
];

export default function Gallery() {
  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section id="gallery" className="py-40 bg-luxury-black relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 block"
          >
            Beauty Gallery
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-serif">
            Our <span className="italic font-light gold-text">Salon Moments</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden group ${!isTouchDevice ? 'cursor-none' : ''} ${img.size === "tall" ? "aspect-[9/16]" : img.size === "medium" ? "aspect-square" : "aspect-[4/3]"
                }`}
            >
              <motion.img
                src={`${img.src}?auto=format&fit=crop&q=80&w=800`}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-[1px] bg-gold"></div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Full View</span>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-gold/0 group-hover:border-gold/50 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
