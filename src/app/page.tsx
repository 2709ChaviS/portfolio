import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

import Products from "@/components/products/Products";
import Philosophy from "@/components/philosophy/Philosophy";
import Engineering from "@/components/engineering/Engineering";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Engineering />
      <Philosophy />
      <Footer />
    </main>
  );
}