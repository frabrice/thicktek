import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import TheShift from '@/components/sections/TheShift';
import Solutions from '@/components/sections/Solutions';
import ClientStories from '@/components/sections/ClientStories';
import Insights from '@/components/sections/Insights';
import CallToAction from '@/components/sections/CallToAction';

export default function HomePage() {
  return (
    <main className="pt-[68px]">
      <HeroSection />
      <ProblemSection />
      <TheShift />
      <Solutions />
      <ClientStories />
      <Insights />
      <CallToAction />
    </main>
  );
}
