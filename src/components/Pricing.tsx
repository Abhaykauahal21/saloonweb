import { motion } from "motion/react";

const pricingData = [
  {
    category: "The Hair Suite",
    items: [
      { name: "Sculptural Cut", price: "₹3,000" },
      { name: "Symphony Conditioning", price: "₹1,200" },
      { name: "Couture Color", price: "₹8,500" },
      { name: "Ritual Treatment", price: "₹4,500" },
    ],
  },
  {
    category: "The Dermal Hub",
    items: [
      { name: "Hydra Essence", price: "₹1,500" },
      { name: "Obsidian Facial", price: "₹8,000" },
      { name: "Atelier Makeup", price: "₹5,000" },
      { name: "Event Glow", price: "₹2,000" },
    ],
  },
  {
    category: "The Sanctuary",
    items: [
      { name: "Deep Serenity", price: "₹1,800" },
      { name: "Velvet Manicure", price: "₹2,600" },
      { name: "Lotus Pedicure", price: "₹3,800" },
      { name: "Gilded Nails", price: "₹1,500" },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-luxury-black relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 block"
          >
            The Investment
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-serif">
            Curated <br />
            <span className="italic font-light gold-text">Appraisals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {pricingData.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-luxury-black p-16 group hover:bg-white/5 transition-all duration-700"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-16 opacity-50 group-hover:opacity-100 transition-opacity">
                {section.category}
              </h3>

              <div className="space-y-12">
                {section.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2 group/item">
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-serif text-luxury-white/60 group-hover/item:text-white transition-colors">
                        {item.name}
                      </span>
                      <span className="text-gold font-bold tracking-widest text-xs">{item.price}</span>
                    </div>
                    <div className="h-[1px] bg-white/5 w-full">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        className="h-full bg-gold/30 origin-left"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ backgroundColor: "#D4AF37", color: "#000" }}
                className="w-full mt-24 py-6 border border-gold/30 text-[10px] uppercase tracking-[0.4em] font-bold text-gold transition-all duration-500"
              >
                Inquire
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
