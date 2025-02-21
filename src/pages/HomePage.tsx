import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import ImpactShowcase from '@/components/sections/ImpactShowcase';
import CorePillars from '@/components/sections/CorePillars';
import Solutions from '@/components/sections/Solutions';
import GlobalFootprint from '@/components/sections/GlobalFootprint';
import ClientStories from '@/components/sections/ClientStories';
import Publications from '@/components/sections/Publications';
import CallToAction from '@/components/sections/CallToAction';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)',
          opacity: backgroundOpacity
        }}
      />
      
      <main className="pt-14">
        <HeroSection />
        <ImpactShowcase />
        <CorePillars />
        <Solutions />
        <GlobalFootprint />
        <ClientStories />
        <Publications />
        <CallToAction />
      </main>
    </div>
  );
}