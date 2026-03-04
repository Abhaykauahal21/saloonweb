import { motion } from "motion/react";
import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] gold-glow">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000"
                alt="Salon Interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-gold/30 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-0"></div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-gold text-luxury-black p-6 rounded-2xl gold-glow"
            >
              <div className="text-4xl font-serif font-bold">15+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Reveal delay={0.2}>
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
                Our Story
              </span>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                The Art of <span className="italic gold-text">Timeless</span> Beauty
              </h2>
            </Reveal>
            <p className="text-luxury-white/70 text-lg mb-8 font-light leading-relaxed">
              Founded in 2009, Lumière Salon & Spa has been the sanctuary for those who seek
              unparalleled luxury and expert craftsmanship. We believe that beauty is an
              individual journey, and our mission is to provide the perfect environment for
              your transformation.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Master Stylists</h4>
                <p className="text-luxury-white/50 text-sm">Award-winning professionals from across the globe.</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Premium Products</h4>
                <p className="text-luxury-white/50 text-sm">Only the finest organic and luxury brands used.</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gold text-gold font-bold uppercase tracking-widest rounded-full hover:bg-gold hover:text-luxury-black transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
