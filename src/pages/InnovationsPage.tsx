import { motion } from 'framer-motion';
import { CurrentProjects } from '@/components/innovations/CurrentProjects';
import { TechnologyFocus } from '@/components/innovations/TechnologyFocus';
import { InnovationShowcase } from '@/components/innovations/InnovationShowcase';

export default function InnovationsPage() {
  return (
    <main className="pt-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <InnovationShowcase />
        <TechnologyFocus />
        <CurrentProjects />
      </motion.div>
    </main>
  );
}