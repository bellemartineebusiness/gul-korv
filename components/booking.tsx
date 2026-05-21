"use client";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const info = [
  { icon: Phone, label: "Telefon", value: "+123-456-7890", href: "tel:+1234567890" },
  { icon: Mail, label: "E-post", value: "hello@spaaurelin.com", href: "mailto:hello@spaaurelin.com" },
  { icon: MapPin, label: "Adress", value: "12 Rimberio Street, District One", href: "#" },
  { icon: Clock, label: "Öppettider", value: "Mån–Sön  09:00–21:00", href: "#" },
];

export default function Booking() {
  return (
    <section id="contact" className="bg-spa-cream border-t border-spa-wine/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 md:mb-16 border-b border-spa-wine/15 pb-6 md:pb-8 gap-4"
        >
          <div>
            <span className="text-xs font-black tracking-[0.25em] uppercase text-spa-muted">
              Boka ett besök
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-spa-wine mt-2 leading-none">
              Boka ditt<br />
              <span className="text-spa-dark">ögonblick.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {info.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 border border-spa-wine/20 flex items-center justify-center shrink-0 group-hover:bg-spa-wine group-hover:border-spa-wine transition-colors duration-300">
                    <Icon size={15} className="text-spa-wine group-hover:text-spa-cream transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-spa-dark/80 group-hover:text-spa-wine transition-colors mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="pt-6 border-t border-spa-wine/10">
              <p className="text-spa-muted text-sm leading-relaxed max-w-sm">
                Vårt team bekräftar din bokning inom två timmar.
                Vi ser fram emot att välkomna dig till Aurelin.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="border border-spa-wine/15 p-5 sm:p-7 md:p-8 bg-spa-warm"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted block mb-2">
                    Förnamn
                  </label>
                  <input
                    type="text"
                    placeholder="Isabel"
                    className="w-full border border-spa-wine/15 bg-spa-cream px-4 py-3 text-spa-dark placeholder-spa-muted/50 text-sm focus:outline-none focus:border-spa-wine/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted block mb-2">
                    Efternamn
                  </label>
                  <input
                    type="text"
                    placeholder="Fontaine"
                    className="w-full border border-spa-wine/15 bg-spa-cream px-4 py-3 text-spa-dark placeholder-spa-muted/50 text-sm focus:outline-none focus:border-spa-wine/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted block mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  placeholder="hello@you.com"
                  className="w-full border border-spa-wine/15 bg-spa-cream px-4 py-3 text-spa-dark placeholder-spa-muted/50 text-sm focus:outline-none focus:border-spa-wine/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted block mb-2">
                  Behandling
                </label>
                <select className="w-full border border-spa-wine/15 bg-spa-cream px-4 py-3 text-spa-dark/70 text-sm focus:outline-none focus:border-spa-wine/50 transition-colors appearance-none">
                  <option value="">Välj en behandling</option>
                  <option>Varm Sten Massage</option>
                  <option>Lysande Ansiktsbehandling</option>
                  <option>Hydroterapi</option>
                  <option>Botanisk Kroppsinpackning</option>
                  <option>Aromaterapi Massage</option>
                  <option>Parbehandling</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted block mb-2">
                  Önskat datum
                </label>
                <input
                  type="date"
                  className="w-full border border-spa-wine/15 bg-spa-cream px-4 py-3 text-spa-dark/70 text-sm focus:outline-none focus:border-spa-wine/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted block mb-2">
                  Meddelande (valfritt)
                </label>
                <textarea
                  placeholder="Eventuella önskemål..."
                  rows={3}
                  className="w-full border border-spa-wine/15 bg-spa-cream px-4 py-3 text-spa-dark placeholder-spa-muted/50 text-sm focus:outline-none focus:border-spa-wine/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-spa-wine text-spa-cream font-black uppercase tracking-[0.15em] text-xs py-4 hover:bg-spa-wine-light transition-colors duration-300"
              >
                Skicka förfrågan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
