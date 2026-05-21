"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#treatments", label: "Behandlingar" },
  { href: "#about", label: "Om oss" },
  { href: "#testimonials", label: "Recensioner" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-spa-cream/95 backdrop-blur-sm border-b border-spa-wine/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-black tracking-[0.2em] uppercase text-spa-dark/50 hover:text-spa-wine transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-xs font-black uppercase tracking-[0.15em] px-5 py-2.5 bg-spa-wine text-spa-cream hover:bg-spa-wine-light transition-colors duration-300"
        >
          Boka nu
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-spa-dark"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-spa-cream border-t border-spa-wine/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-spa-dark/60 font-black uppercase text-xs tracking-[0.2em] py-3 border-b border-spa-wine/8 hover:text-spa-wine transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-spa-wine text-spa-cream font-black uppercase tracking-[0.15em] px-5 py-4 text-center text-xs mt-3"
              >
                Boka nu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
