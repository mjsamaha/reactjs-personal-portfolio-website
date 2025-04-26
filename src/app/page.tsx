import Header from "@/components/layout/Header";
import HeroImage from "@/components/sections/HeroImage";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroImage />
      <HeroSection />
      <div className="content">
        {/* Add your main content sections here */}
      </div>
    </main>
  );
}
