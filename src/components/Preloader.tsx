import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-luxury-black flex items-center justify-center noise-overlay"
                >
                    <div className="relative overflow-hidden">
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-serif tracking-[0.5em] gold-text font-bold"
                        >
                            LUMIÈRE
                        </motion.div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                            className="mt-4 h-[1px] bg-gold/30 origin-left"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] text-luxury-white/20"
                    >
                        Establishing Sanctuary...
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
