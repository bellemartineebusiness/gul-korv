"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Spa Aurelin completely transformed my understanding of relaxation. The hot stone massage left me feeling reborn — I booked again the same day.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Isabelle Fontaine",
    role: "Interior Designer",
  },
  {
    text: "The deep tissue treatment was precise and restorative. The therapists here truly listen to your body. Nothing short of exceptional.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Marcus Reinholt",
    role: "Architect",
  },
  {
    text: "From the moment I stepped in, I felt at peace. The signature facial left my skin glowing for weeks. Pure luxury without pretension.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Selin Arslan",
    role: "Creative Director",
  },
  {
    text: "I've visited spas around the world. Aurelin is in a different league — the treatments feel curated, not rushed. My go-to retreat.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Daniel Osei",
    role: "Consultant",
  },
  {
    text: "The hydrotherapy circuit was unlike anything I'd experienced. I arrived tense and left feeling years younger. Absolutely worth every minute.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Nora Lindqvist",
    role: "Photographer",
  },
  {
    text: "Impeccable service, serene ambiance, and treatments that actually deliver results. Aurelin has earned my complete trust.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Chiara Moretti",
    role: "Editor",
  },
  {
    text: "My partner and I did the couples session and it was the best day of our year. The staff makes you feel genuinely cared for.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Tom Hargreaves",
    role: "Product Manager",
  },
  {
    text: "The botanical body wrap was transcendent. I left with the softest skin and clearest mind I've had in months. See you next week.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Amara Diallo",
    role: "Wellness Coach",
  },
  {
    text: "Everything about Aurelin communicates care — from the scent in the hallway to the warmth of the therapists. This is what wellness should feel like.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Jonas Eriksson",
    role: "Entrepreneur",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4 bg-spa-cream"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-7 border border-spa-wine/12 max-w-xs w-full bg-spa-warm"
                key={i}
              >
                <p className="text-sm leading-relaxed text-spa-dark/70">{text}</p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-spa-wine/10">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-9 w-9 object-cover grayscale"
                  />
                  <div className="flex flex-col">
                    <div className="font-black text-xs uppercase tracking-widest text-spa-dark leading-5">
                      {name}
                    </div>
                    <div className="text-xs leading-5 text-spa-muted">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-spa-cream py-16 md:py-24 border-t border-spa-wine/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 md:mb-16 border-b border-spa-wine/15 pb-6 md:pb-8 gap-4"
        >
          <div>
            <span className="text-xs font-black tracking-[0.25em] uppercase text-spa-muted">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-spa-wine mt-2 leading-none">
              What our<br />
              <span className="text-spa-dark">guests say</span>
            </h2>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-6 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-130 md:max-h-160 overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={16}
          />
        </div>
      </div>
    </section>
  );
};
