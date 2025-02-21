import { motion } from 'framer-motion';
import { BarChart } from '@/components/ui/chart';

interface GlobalMetricsProps {
  inView: boolean;
}

export function GlobalMetrics({ inView }: GlobalMetricsProps) {
  const data = [
    { region: 'East Africa', projects: 45 },
    { region: 'West Africa', projects: 38 },
    { region: 'North Africa', projects: 32 },
    { region: 'Southern Africa', projects: 28 },
    { region: 'Central Africa', projects: 15 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-card p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-6">Regional Impact</h3>
      <div className="h-64">
        <BarChart data={data} />
      </div>
    </motion.div>
  );
}