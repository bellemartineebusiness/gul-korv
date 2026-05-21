"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Leaf, Droplets, Flame, Sparkles, Wind, Heart } from "lucide-react";

const treatments = [
  {
    icon: Flame,
    name: "Varm Sten Massage",
    duration: "90 min",
    description:
      "Vulkaniska stenar smälter bort spänningar och värmer musklerna på djupet. Djupgående och återhämtande.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    icon: Sparkles,
    name: "Lysande Ansiktsbehandling",
    duration: "60 min",
    description:
      "Vår signaturbehandling använder botaniska ämnen för att förnya, lysa upp och återge naturlig strålning till alla hudtyper.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    icon: Droplets,
    name: "Hydroterapi",
    duration: "120 min",
    description:
      "En guidad resa genom kontrastbad, ångrum och kalla bad — som återställer nervsystemet inifrån och ut.",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80",
  },
  {
    icon: Leaf,
    name: "Botanisk Kroppsinpackning",
    duration: "75 min",
    description:
      "Rika växtextrakt appliceras och försluts med värme för att avgifta, mjukgöra och nära huden från topp till tå.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  },
  {
    icon: Wind,
    name: "Aromaterapi Massage",
    duration: "60 min",
    description:
      "Rena eteriska oljor blandas efter ditt humör och appliceras genom en långsam, intuitiv massage för att lugna sinnet och kroppen.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
  },
  {
    icon: Heart,
    name: "Parbehandling",
    duration: "2 × 90 min",
    description:
      "En privat upplevelse för två — delad värme, parallella behandlingar och en ostörd eftermiddag tillsammans.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
  },
];

export default function Services() {
  return (
    <section id="treatments" className="bg-spa-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 md:mb-16 border-b border-spa-wine/15 pb-6 md:pb-8 gap-4"
        >
          <div>
            <span className="text-xs font-black tracking-[0.25em] uppercase text-spa-muted">
              Våra behandlingar
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-spa-wine mt-2 leading-none">
              Skapat<br />för dig
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start sm:self-auto text-xs font-black uppercase tracking-[0.15em] text-spa-wine border border-spa-wine/30 px-5 py-3 hover:bg-spa-wine hover:text-spa-cream transition-colors duration-300"
          >
            Boka ett besök
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-spa-wine/10">
          {treatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group bg-spa-cream hover:bg-spa-warm transition-colors duration-300"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-spa-dark/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="bg-spa-wine p-1.5">
                      <Icon size={12} className="text-spa-cream" />
                    </div>
                    <span className="text-xs text-spa-cream font-black tracking-wider">{t.duration}</span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-black text-sm md:text-base uppercase tracking-tight text-spa-dark mb-2">
                    {t.name}
                  </h3>
                  <p className="text-spa-muted text-sm leading-relaxed">{t.description}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-spa-wine font-black text-xs uppercase tracking-[0.15em] group/link"
                  >
                    Boka
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
