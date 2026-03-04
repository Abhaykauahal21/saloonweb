import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophia Loren",
    role: "Fashion Model",
    text: "The experience at Lumière is beyond words. The attention to detail and the luxurious atmosphere make every visit a treat.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    text: "Finally found a place that understands modern grooming. The master stylists are true artists. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Elena Rodriguez",
    role: "Business Executive",
    text: "The skin rituals are transformative. I've never felt more radiant. The botanical products they use are pure magic.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Marcus Thorne",
    role: "Hotelier",
    text: "Absolutely first class. From the moment you walk in, you're treated with a level of care that is rare these days.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Testimonials() {
  // We double the array to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-32 bg-luxury-black relative overflow-hidden noise-overlay border-y border-white/5">
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gold uppercase tracking-[1em] text-[10px] font-bold mb-4 block"
        >
          Voices of Excellence
        </motion.span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif"
        >
          Signature <span className="italic gold-text font-light">Feedback</span>
        </motion.h2>
      </div>

      {/* Continuous Marquee Container */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[450px] flex-shrink-0 bg-luxury-gray/50 backdrop-blur-xl border border-white/5 p-12 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gold/5 group-hover:text-gold/10 transition-colors" />

              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gold/20 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-gold font-bold uppercase tracking-widest text-[10px] whitespace-normal">
                    {t.name}
                  </h4>
                  <span className="text-luxury-white/30 text-[8px] uppercase tracking-[0.4em] whitespace-normal">
                    {t.role}
                  </span>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} size={10} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-lg font-serif italic text-luxury-white/70 leading-relaxed whitespace-normal line-clamp-3">
                "{t.text}"
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/30 transition-all duration-700"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Secondary Reverse Marquee (Optional for more depth) */}
      <div className="relative flex overflow-hidden py-10 mt-4 opacity-50 grayscale hover:opacity-100 transition-opacity">
        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={`rev-${i}`}
              className="w-[350px] flex-shrink-0 border border-white/5 p-8 flex items-center gap-6"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-serif italic text-luxury-white/40 truncate italic max-w-xs">
                "{t.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
