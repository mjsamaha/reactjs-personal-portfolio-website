import Header from "@/components/layout/Header";
import HeroImage from "@/components/sections/HeroImage";
import { FeatureSection } from '@/components/sections/FeatureSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroImage />
      <FeatureSection />
      {/* Add more sections as needed */}
      <div className="content">
        {/* Add your main content sections here */}
      </div>
    </main>
  );
}
