import Header from "../components/Header";
import Hero from "../components/Hero";
import FactStrip from "../components/FactStrip";
import Heritage from "../components/Heritage";
import Collections from "../components/Collections";
import Process from "../components/Process";
import CraftGallery from "../components/CraftGallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FactStrip />
      <Heritage />
      <Collections />
      <Process />
      <CraftGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
