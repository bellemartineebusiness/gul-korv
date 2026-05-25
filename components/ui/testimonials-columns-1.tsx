"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Spa Aurelin förändrade helt min förståelse för avkoppling. Varm sten-massagen fick mig att känna mig pånyttfödd — jag bokade om samma dag.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Isabelle Fontaine",
    role: "Inredningsdesigner",
  },
  {
    text: "Djupvävnadsbehandlingen var precis och återhämtande. Terapeuterna här lyssnar verkligen på din kropp. Inget annat än enastående.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Marcus Reinholt",
    role: "Arkitekt",
  },
  {
    text: "Från det ögonblick jag klev in kände jag frid. Signaturansiktsbehandlingen fick min hud att glöda i veckor. Ren lyx utan pretension.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Selin Arslan",
    role: "Kreativ Direktör",
  },
  {
    text: "Jag har besökt spa runt om i världen. Aurelin är i en annan liga — behandlingarna känns omsorgsfullt utvalda, inte stressade. Min favoritretreat.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Daniel Osei",
    role: "Konsult",
  },
  {
    text: "Hydroterapin var olikt något jag upplevt. Jag anlände spänd och lämnade med känslan av att vara år yngre. Absolut värt varje minut.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Nora Lindqvist",
    role: "Fotograf",
  },
  {
    text: "Oklanderlig service, fridfull miljö och behandlingar som faktiskt ger resultat. Aurelin har förtjänat mitt fulla förtroende.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Chiara Moretti",
    role: "Redaktör",
  },
  {
    text: "Min partner och jag gjorde parbehandlingen och det var den bästa dagen på vårt år. Personalen får dig att känna dig genuint omhändertagen.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Tom Hargreaves",
    role: "Produktchef",
  },
  {
    text: "Den botaniska kroppsinpackningen var transcendent. Jag lämnade med den mjukaste huden och klaraste sinnet på månader. Ses nästa vecka.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Amara Diallo",
    role: "Hälsocoach",
  },
  {
    text: "Allt på Aurelin kommunicerar omsorg — från doften i korridoren till terapeuternas värme. Så här ska välbefinnande kännas.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Jonas Eriksson",
    role: "Entreprenör",
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
              Omdömen
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-spa-wine mt-2 leading-none">
              Våra gäster<br />
              <span className="text-spa-dark">älskar oss</span>
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
