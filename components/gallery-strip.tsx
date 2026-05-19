"use client";
import { motion } from "motion/react";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Architecture" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", alt: "Hot stone massage" },
  { src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80", alt: "Relaxation" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80", alt: "Treatment" },
];

export default function GalleryStrip() {
  return (
    <section className="bg-spa-cream py-12 md:py-16 overflow-hidden border-t border-spa-wine/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 md:mb-8 flex items-center gap-4 md:gap-6">
        <span className="text-xs font-black tracking-[0.2em] uppercase text-spa-muted shrink-0">
          @reallygreatsite
        </span>
        <div className="h-px flex-1 bg-spa-wine/10" />
        <span className="text-xs font-black tracking-[0.2em] uppercase text-spa-wine shrink-0">
          Rimberio — 2035
        </span>
      </div>

      <motion.div
        className="flex gap-2 md:gap-3 pl-4 sm:pl-6"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
            style={{ width: "clamp(180px, 40vw, 340px)", height: "clamp(160px, 25vw, 210px)" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="340px"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
