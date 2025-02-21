import { motion } from 'framer-motion';
import { CareerHero } from '@/components/careers/CareerHero';
import { NoOpenings } from '@/components/careers/NoOpenings';
import { WorkCulture } from '@/components/careers/WorkCulture';
import { Benefits } from '@/components/careers/Benefits';

export default function CareersPage() {
  return (
    <main className="pt-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <CareerHero />
        <NoOpenings />
        <WorkCulture />
        <Benefits />
      </motion.div>
    </main>
  );
}