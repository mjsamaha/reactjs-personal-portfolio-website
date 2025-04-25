import Header from "@/components/layout/Header";
import HeroImage from "@/components/sections/HeroImage";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroImage />
      <div className="content">
        {/* Add your main content sections here */}
      </div>
    </main>
  );
}
