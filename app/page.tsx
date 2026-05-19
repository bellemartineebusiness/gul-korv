import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import GalleryStrip from "@/components/gallery-strip";
import About from "@/components/about";
import { Testimonials } from "@/components/ui/testimonials-columns-1";
import Booking from "@/components/booking";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GalleryStrip />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
