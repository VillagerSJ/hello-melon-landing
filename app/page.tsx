import EarlyAccessSection from "@/components/home/EarlyAccessSection";
import FooterSection from "@/components/home/FooterSection";
import ExploreVillageSection from "@/components/home/ExploreVillageSection";
import HeroSection from "@/components/home/HeroSection";
import VillageStorySection from "@/components/home/VillageStorySection";
import VoicesEarlyVillagersSection from "@/components/home/VoicesEarlyVillagersSection";
import WhyDifferentSection from "@/components/home/WhyDifferentSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen bg-melon-base">
      <section className="relative mx-auto w-full overflow-hidden bg-melon-base">
        <HeroSection />
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
