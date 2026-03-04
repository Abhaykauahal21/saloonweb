import { motion } from "motion/react";
import { Globe, MapPin, Navigation } from "lucide-react";
import RotatingEarth from "./ui/wireframe-dotted-globe";

export default function Map() {
    return (
        <section id="location" className="py-40 bg-luxury-black relative overflow-hidden noise-overlay border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Revolving Globe & Details */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="flex flex-col">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-6"
                            >
                                Our Sanctuary
                            </motion.span>
                            <h2 className="text-6xl md:text-8xl font-serif leading-tight">
                                Find <br />
                                <span className="italic font-light gold-text">Lumière</span>
                            </h2>
                        </div>

                        <div className="relative flex items-center justify-center py-10 lg:py-20 w-full">
                            {/* Wireframe Dotted Globe */}
                            <div className="relative w-full aspect-square max-w-[320px] md:max-w-[500px] flex items-center justify-center">
                                <RotatingEarth className="w-full h-full" width={500} height={500} />

                                {/* Floating Map Pin Overlay (Fixed position on screen relative to globe) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                                    {/* We'll keep a decorative pin for aesthetic consistency */}
                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-1 h-8 bg-gradient-to-t from-gold to-transparent"></div>
                                        <MapPin className="text-gold fill-gold" size={40} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decorative Background Glow */}
                            <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full -z-20"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="glass-gold p-8 space-y-4">
                                <MapPin className="text-gold" />
                                <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Address</h4>
                                <p className="text-luxury-white/50 text-sm">
                                    123 Luxury Avenue, <br />
                                    Bandra West, Mumbai 400050
                                </p>
                            </div>
                            <div className="glass-gold p-8 space-y-4">
                                <Navigation className="text-gold" />
                                <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Access</h4>
                                <p className="text-luxury-white/50 text-sm">
                                    Private Valet Parking <br />
                                    Available for all guests.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Google Map Embed */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden gold-glow border border-gold/20"
                        >
                            <iframe
                                title="Lumière Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.358249826078!2d72.82522046424367!3d19.053702166946696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91a021262d1%3A0xc3f58a36ef03f0b4!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {/* Top Overlay */}
                            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-luxury-black to-transparent pointer-events-none"></div>
                            {/* Bottom Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-luxury-black to-transparent pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-[0.02] pointer-events-none whitespace-nowrap lg:text-[20vw] font-serif text-gold">
                LOCATION • LOCATION
            </div>
        </section>
    );
}
