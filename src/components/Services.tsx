import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Scissors, Palette, Sparkles, UserCheck, Heart, Star } from "lucide-react";

const services = [
  {
    title: "Haircut & Styling",
    category: "Hair Care",
    description: "Professional haircuts and styling designed to match your personality and face shape. From trendy fades to classic styles, our expert stylists give you the perfect look.",
    icon: <Scissors className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1600",
    color: "#D4AF37"
  },
  {
    title: "Hair Coloring",
    category: "Color Studio",
    description: "Get vibrant and long-lasting hair color using premium products. Choose from global color, highlights, balayage, and fashion shades that enhance your style.",
    icon: <Palette className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGNvbG9yaW5nfGVufDB8fDB8fHww",
    color: "#E8DCC4"
  },
  {
    title: "Facial & Skincare",
    category: "Skin Care",
    description: "Revitalize your skin with deep cleansing facials and advanced skincare treatments. Our facials help remove tan, reduce acne, and give you a natural glow.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1731514771613-991a02407132?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjaWFsfGVufDB8fDB8fHww",
    color: "#D4AF37"
  },
  {
    title: "Bridal Makeup",
    category: "Makeup Studio",
    description: "Complete bridal makeover services including HD makeup, hairstyle, and skin preparation. Look stunning on your special day with our professional bridal artists.",
    icon: <Heart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1717835943315-b818e90cb2a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJyaWRhbCUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
    color: "#E8DCC4"
  }
];

function ServiceItem({ service, index }: { service: typeof services[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className="relative min-h-screen py-32 flex items-center justify-center">
      <div className={`container mx-auto px-6 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}>

        {/* Image Section */}
        <motion.div
          style={{ opacity }}
          className="relative w-full md:w-3/5 h-[50vh] md:h-[80vh] overflow-hidden"
        >
          <motion.img
            style={{ y: imageY, scale: 1.2 }}
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60"></div>

          {/* Decorative Elements */}
          <div className={`absolute ${isEven ? '-right-10' : '-left-10'} top-10 text-[12vw] font-serif opacity-5 text-gold pointer-events-none`}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          style={{ y: textY, opacity }}
          className="w-full md:w-2/5 z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold">
              {service.category}
            </span>
          </div>

          <h3 className="text-6xl lg:text-8xl font-serif mb-10 leading-tight">
            {service.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'italic gold-text font-light' : ''}>
                {word}{' '}
              </span>
            ))}
          </h3>

          <p className="text-luxury-white/50 text-lg leading-relaxed mb-12 max-w-md font-light">
            {service.description}
          </p>

          <motion.button
            whileHover={{ letterSpacing: "0.5em", gap: "24px" }}
            className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-gold transition-all duration-500"
          >
            Explore Ritual
            <div className="w-16 h-[1px] bg-gold/30"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Floating Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <div className="text-[40vw] md:text-[25vw] font-serif whitespace-nowrap gold-text -translate-x-1/2">
          {service.title.toUpperCase()} • {service.title.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-luxury-black relative overflow-hidden noise-overlay">
      {/* Intro Header */}
      <div className="pt-40 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gold uppercase tracking-[1em] text-[10px] font-bold mb-6 block"
        >
          Our Offerings
        </motion.span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-7xl md:text-9xl font-serif tracking-tighter"
        >
          Our <span className="italic gold-text font-light">Signature Services</span>
        </motion.h2>
      </div>

      <div className="relative">
        {services.map((service, i) => (
          <div key={service.title}>
            <ServiceItem service={service} index={i} />
          </div>
        ))}
      </div>

      {/* Decorative Final Element */}
      <div className="py-40 flex flex-col items-center">
        <div className="w-[1px] h-40 bg-gradient-to-b from-gold to-transparent opacity-30 mb-10"></div>
        <span className="text-gold/30 uppercase tracking-[0.5em] text-[8px] font-bold">End of Library</span>
      </div>
    </section>
  );
}
