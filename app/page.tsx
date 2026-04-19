import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Products from "@/components/Products";
import WhyKMM from "@/components/WhyKMM";
import Manufacturing from "@/components/Manufacturing";
import Quality from "@/components/Quality";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Products />
      <WhyKMM />
      <Manufacturing />
      <Quality />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
