import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif tracking-widest gold-text font-bold">LUMIÈRE</h2>
            <p className="text-luxury-white/50 text-sm leading-relaxed">
              Defining the standards of luxury beauty and wellness since 2009. 
              Experience the art of transformation in our sanctuary.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#D4AF37" }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-luxury-white/60 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Gallery", "Pricing", "Booking"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-luxury-white/50 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {["Hair Styling", "Skin Care", "Bridal Makeup", "Nail Art", "Spa Therapy", "Grooming"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-luxury-white/50 hover:text-gold transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-gold shrink-0" size={20} />
                <span className="text-luxury-white/50 text-sm">
                  123 Luxury Avenue, <br />
                  Bandra West, Mumbai 400050
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-gold shrink-0" size={20} />
                <span className="text-luxury-white/50 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-gold shrink-0" size={20} />
                <span className="text-luxury-white/50 text-sm">concierge@lumiere.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-luxury-white/30 text-[10px] uppercase tracking-widest">
            © 2024 Lumière Salon & Spa. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-luxury-white/30 text-[10px] uppercase tracking-widest hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-luxury-white/30 text-[10px] uppercase tracking-widest hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
