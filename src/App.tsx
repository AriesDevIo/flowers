import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HorizontalShowcase from "./components/HorizontalShowcase";
import StorySplit from "./components/StorySplit";
import FullBleedBand from "./components/FullBleedBand";
import Occasions from "./components/Occasions";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <HorizontalShowcase />
      <StorySplit />
      <FullBleedBand />
      <Occasions />
      <Visit />
      <Footer />
    </div>
  );
}
