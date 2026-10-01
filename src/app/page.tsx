import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="projects">
        <Products />
      </div>
      <Footer />
    </main>
  );
}