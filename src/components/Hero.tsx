import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Reveal } from "./Reveal";
// @ts-expect-error - hero.png is a dynamic asset
import heroImg from "../assets/hero.png";

export default function Hero() {
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 800], [0, 300]);
  const yText = useTransform(scrollY, [0, 800], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.2]);

  const smoothYBg = useSpring(yBg, { stiffness: 100, damping: 30 });
  const smoothYText = useSpring(yText, { stiffness: 100, damping: 30 });

  const titleChars = "LUMIÈRE".split("");

  return (
    <section id="home" className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background Layer */}
      <motion.div
        style={{ y: smoothYBg, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImg}
          alt="Lumière Luxury Salon"
          className="w-full h-full object-cover opacity-60 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-transparent to-luxury-black"></div>
      </motion.div>

      {/* Floating Elements Layer */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * -50, 0],
              x: [0, Math.random() * 30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute w-96 h-96 bg-gold/5 rounded-full blur-[120px]`}
            style={{
              top: `${20 + i * 25}%`,
              left: `${15 + i * 30}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: smoothYText }}
        className="relative z-10 text-center px-6 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-gold uppercase tracking-[1em] text-[10px] font-bold mb-10 block opacity-60">
            The Definition of Elegance
          </span>

          <h1 className="text-[18vw] md:text-[8vw] font-serif leading-[0.8] tracking-tighter mb-12 flex justify-center overflow-hidden">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.5 + (i * 0.1),
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={3.5}>
            <p className="text-gold italic font-display text-4xl mb-16 font-light">
              Signature Experience
            </p>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
              className="px-16 py-6 border border-gold/50 text-gold uppercase tracking-[0.4em] text-[10px] font-bold transition-all duration-700 backdrop-blur-sm"
            >
              Book Reservation
            </motion.button>
            <motion.a
              href="#services"
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-white/40 hover:text-gold transition-all duration-500"
            >
              <span className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-gold transition-all duration-700"></span>
              The Collections
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-[1px] h-24 bg-gradient-to-b from-gold via-gold/20 to-transparent"
        />
        <span className="text-[8px] uppercase tracking-[0.8em] text-gold/40 font-bold rotate-90 origin-left mt-12">Explore</span>
      </motion.div>
    </section>
  );
}
