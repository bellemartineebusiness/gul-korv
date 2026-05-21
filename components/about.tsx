"use client";
import { motion } from "motion/react";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Års erfarenhet" },
  { value: "40+", label: "Behandlingar" },
  { value: "8K+", label: "Nöjda gäster" },
  { value: "100%", label: "Naturliga ingredienser" },
];

export default function About() {
  return (
    <section id="about" className="bg-spa-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-spa-wine/15 mb-16 md:mb-24"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center py-8 md:py-10 ${
                i % 2 === 0 ? "border-r border-spa-wine/15" : ""
              } ${i < 2 ? "border-b border-spa-wine/15 lg:border-b-0" : ""} ${
                i === 1 ? "lg:border-r lg:border-spa-wine/15" : ""
              } ${i === 2 ? "lg:border-r lg:border-spa-wine/15" : ""}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-spa-wine tracking-tighter leading-none">
                {s.value}
              </div>
              <div className="text-xs font-black tracking-[0.15em] uppercase text-spa-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black tracking-[0.25em] uppercase text-spa-muted">
              Vår filosofi
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-spa-wine mt-3 leading-none">
              Stillhet är<br />inte en lyx.<br />
              <span className="text-spa-dark">Det är en nödvändighet.</span>
            </h2>
            <p className="text-spa-muted leading-relaxed mt-6 md:mt-8 max-w-md text-sm md:text-base">
              På Aurelin tror vi att kroppen vet hur den läker — den behöver
              bara rätt förutsättningar. Sedan 2035 har vi skapat en plats
              där buller lämnar rum för närvaro, och varje behandling är
              utformad som en akt av djup omsorg.
            </p>
            <p className="text-spa-muted leading-relaxed mt-4 max-w-md text-sm md:text-base">
              Vi arbetar uteslutande med ekologiska, etiskt framtagna botaniska
              ämnen. Våra terapeuter är utbildade i traditioner från svenska,
              balinesiska och ayurvediska linjer — förenade av en enda intention:
              att lämna dig mer fullt dig själv.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-spa-wine text-spa-cream font-black uppercase tracking-[0.15em] text-xs px-7 py-4 hover:bg-spa-wine-light transition-colors duration-300"
              >
                Boka ditt besök
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center border border-spa-wine/30 text-spa-wine font-black uppercase tracking-[0.15em] text-xs px-7 py-4 hover:bg-spa-wine hover:text-spa-cream transition-colors duration-300"
              >
                Se behandlingar
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="relative h-80 sm:h-96 lg:h-140 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&q=85"
                alt="Aurelin Spa interior"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-4 sm:-bottom-5 sm:-left-5 bg-spa-wine text-spa-cream p-4 md:p-6"
            >
              <div className="text-3xl md:text-4xl font-black tracking-tighter leading-none">2035</div>
              <div className="text-xs font-black tracking-[0.15em] uppercase text-spa-cream/60 mt-1">
                Grundat i Rimberio
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
