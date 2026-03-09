import DesktopLandingSection from "@/components/home/DesktopLandingSection";
import EarlyAccessSection from "@/components/home/EarlyAccessSection";
import FooterSection from "@/components/home/FooterSection";
import ExploreVillageSection from "@/components/home/ExploreVillageSection";
import MobileLandingSection from "@/components/home/MobileLandingSection";
import VillageStorySection from "@/components/home/VillageStorySection";
import VoicesEarlyVillagersSection from "@/components/home/VoicesEarlyVillagersSection";
import WhyDifferentSection from "@/components/home/WhyDifferentSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe4cc]">
      <section className="relative mx-auto w-full overflow-hidden bg-[#efe4cc]">
        <MobileLandingSection />
        <DesktopLandingSection />
        <ExploreVillageSection />
        <WhyDifferentSection />
        <VoicesEarlyVillagersSection />
        <VillageStorySection />
        <EarlyAccessSection />
        <FooterSection />
      </section>
    </main>
  );
}
