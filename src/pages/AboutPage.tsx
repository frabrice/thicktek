import { motion } from 'framer-motion';
import { Vision } from '@/components/about/Vision';
import { Leadership } from '@/components/about/Leadership';
import { Values } from '@/components/about/Values';
import { Timeline } from '@/components/about/Timeline';

export default function AboutPage() {
  return (
    <main className="pt-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <Vision />
        <Values />
        <Leadership />
        <Timeline />
      </motion.div>
    </main>
  );
}