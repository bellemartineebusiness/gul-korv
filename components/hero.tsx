import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">

      {/* Desktop lg+: full image natural height */}
      <div className="hidden lg:block relative w-full">
        <Image
          src="/arowwai (5).png"
          alt="Aurelin Spa"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-spa-cream pointer-events-none" />
      </div>

      {/* iPad md–lg: Organizer wallpaper full screen */}
      <div className="hidden md:block lg:hidden relative w-full overflow-hidden" style={{ height: "100svh" }}>
        <Image
          src="/Organizer Desktop Wallpaper (1).png"
          alt="Aurelin Spa"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-spa-cream pointer-events-none" />
      </div>

      {/* Mobile: Namnlös design 17, top cream hidden */}
      <div className="md:hidden relative w-full overflow-hidden" style={{ height: "100svh" }}>
        <div className="absolute left-0 right-0" style={{ top: "-22%", height: "122%" }}>
          <Image
            src="/Namnlös design (17).png"
            alt="Aurelin Spa"
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-spa-cream pointer-events-none" />
      </div>

    </section>
  );
}
