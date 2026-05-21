import { Globe, Share2 } from "lucide-react";

const links = {
  Behandlingar: [
    "Varm Sten Massage",
    "Lysande Ansiktsbehandling",
    "Hydroterapi",
    "Botanisk Kroppsinpackning",
    "Aromaterapi Massage",
    "Parbehandling",
  ],
  Företag: ["Om oss", "Vårt team", "Presentkort", "Medlemskap", "Karriär"],
  Juridiskt: ["Integritetspolicy", "Användarvillkor", "Cookiepolicy"],
};

export default function Footer() {
  return (
    <footer className="bg-spa-warm border-t border-spa-wine/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className={category === "Juridiskt" ? "col-span-2 md:col-span-1" : ""}>
              <div className="text-xs font-black tracking-[0.25em] uppercase text-spa-wine mb-4 md:mb-5">
                {category}
              </div>
              <ul className="space-y-2 md:space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-spa-muted hover:text-spa-dark transition-colors font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-spa-wine/10 pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs font-black tracking-[0.12em] uppercase text-spa-muted">
            © 2035 Aurelin Spa — Rimberio
          </p>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#"
              className="w-8 h-8 border border-spa-wine/15 flex items-center justify-center text-spa-muted hover:text-spa-wine hover:border-spa-wine/40 transition-colors"
              aria-label="Website"
            >
              <Globe size={13} />
            </a>
            <a
              href="#"
              className="w-8 h-8 border border-spa-wine/15 flex items-center justify-center text-spa-muted hover:text-spa-wine hover:border-spa-wine/40 transition-colors"
              aria-label="Share"
            >
              <Share2 size={13} />
            </a>
            <span className="text-xs text-spa-muted ml-1 md:ml-2">hello@spaaurelin.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
