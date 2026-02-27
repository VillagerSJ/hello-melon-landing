import DesktopLandingSection from "@/components/home/DesktopLandingSection";
import ExploreVillageSection from "@/components/home/ExploreVillageSection";
import MobileLandingSection from "@/components/home/MobileLandingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe4cc]">
      <section className="relative mx-auto w-full overflow-hidden bg-[#efe4cc]">
        <MobileLandingSection />
        <DesktopLandingSection />
        <ExploreVillageSection />
      </section>
    </main>
  );
}
