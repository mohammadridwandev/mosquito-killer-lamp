import FeaturesSection from "@/Components/FeaturesSection";
import HowItWorks from "@/Components/HowItWorks";
import ProductGallery from "@/Components/ProductGallery";
import FAQSection from "@/Components/FAQSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/Navbar";

export default function Home() {
  return (
    <main>
      <div id="features">
        <FeaturesSection />
      </div>

      <div id="howitworks">
        <HowItWorks />
      </div>

      <ProductGallery />

      <div id="support">
        <FAQSection />
      </div>
    </main>
  );
}
