import FeaturesSection from "@/Components/FeaturesSection";
import HowItWorks from "@/Components/HowItWorks";
import FAQSection from "@/Components/FAQSection";
import Gallery from "@/Components/Gallery";

export default function Home() {
  return (
    <main>
      <div id="features">
        <FeaturesSection />
      </div>

      <div id="howItWorks">
        <HowItWorks />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="support">
        <FAQSection />
      </div>
    </main>
  );
}
