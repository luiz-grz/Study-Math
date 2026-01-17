import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { Benefits } from "@/app/components/Benefits";
import { Gallery } from "@/app/components/Gallery";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}