import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FileText, ArrowUpRight } from 'lucide-react';

interface PublicationsListProps {
  inView: boolean;
}

export function PublicationsList({ inView }: PublicationsListProps) {
  const publications = [
    {
      title: 'Advances in Quantum-Resistant Cryptography',
      authors: 'Dr. Sarah Chen, Dr. Michael Roberts',
      journal: 'Journal of Cryptography',
      year: '2024',
    },
    {
      title: 'Neural Architecture Search for Edge Computing',
      authors: 'Dr. Emily Watson, Dr. James Liu',
      journal: 'IEEE Transactions on AI',
      year: '2024',
    },
    {
      title: '6G Network Architecture: A New Paradigm',
      authors: 'Dr. Robert Kim, Dr. Lisa Zhang',
      journal: 'Future Networks Journal',
      year: '2023',
    },
  ];

  return (
    <Card className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Latest Publications</h3>
        <FileText className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {pub.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
                <p className="text-sm text-muted-foreground">
                  {pub.journal} • {pub.year}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {index < publications.length - 1 && (
              <div className="h-px bg-border mt-4" />
            )}
          </motion.div>
        ))}
      </div>
    </Card>
  );
}