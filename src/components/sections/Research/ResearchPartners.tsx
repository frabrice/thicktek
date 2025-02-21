import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface ResearchPartnersProps {
  inView: boolean;
}

export function ResearchPartners({ inView }: ResearchPartnersProps) {
  const partners = [
    'MIT Technology Lab',
    'Stanford AI Research',
    'ETH Zürich',
    'Tokyo Institute of Technology',
    'Max Planck Institute',
    'CERN',
  ];

  return (
    <Card className="p-8">
      <h3 className="text-xl font-semibold mb-6">Research Partners</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-center text-center"
          >
            <span className="text-sm font-medium">{partner}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}