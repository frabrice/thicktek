import { motion } from 'framer-motion';
import { SolutionShowcase } from '@/components/solutions/SolutionShowcase';
import { SolutionGrid } from '@/components/solutions/SolutionGrid';
import { ProcessFlow } from '@/components/solutions/ProcessFlow';
import { IndustryGrid } from '@/components/solutions/IndustryGrid';
import { TechnologyStack } from '@/components/solutions/TechnologyStack';

export default function SolutionsPage() {
  return (
    <main className="pt-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <SolutionShowcase />
        <SolutionGrid />
        <ProcessFlow />
        <IndustryGrid />
        <TechnologyStack />
      </motion.div>
    </main>
  );
}