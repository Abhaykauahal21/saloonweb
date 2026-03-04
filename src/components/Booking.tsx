import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, Sparkles } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-luxury-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
              Reserve Your Moment
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Book Your <br />
              <span className="italic gold-text">Luxury Experience</span>
            </h2>
            <p className="text-luxury-white/60 text-lg mb-12 font-light">
              Take the first step towards your transformation. Our concierge will 
              confirm your appointment within 30 minutes of booking.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-luxury-white/40">Call Us Directly</div>
                  <div className="text-lg font-serif">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-luxury-white/40">Opening Hours</div>
                  <div className="text-lg font-serif">Mon - Sun: 10:00 AM - 09:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-10 rounded-3xl gold-glow"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Select Service</label>
                <div className="relative">
                  <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all appearance-none">
                    <option className="bg-luxury-black">Haircut & Styling</option>
                    <option className="bg-luxury-black">Hair Coloring</option>
                    <option className="bg-luxury-black">Bridal Makeup</option>
                    <option className="bg-luxury-black">Facial & Skin Care</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                    <input
                      type="time"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gold text-luxury-black font-bold uppercase tracking-widest rounded-xl gold-glow transition-all"
              >
                Confirm Appointment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
