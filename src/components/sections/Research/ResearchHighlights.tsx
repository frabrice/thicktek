import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Brain, Cpu, Network, Lock } from 'lucide-react';

interface ResearchHighlightsProps {
  inView: boolean;
}

export function ResearchHighlights({ inView }: ResearchHighlightsProps) {
  const highlights = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Developing next-generation neural networks for complex problem-solving',
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Exploring quantum algorithms for optimization and cryptography',
    },
    {
      icon: Network,
      title: '6G Networks',
      description: 'Pioneering research in next-generation wireless communications',
    },
    {
      icon: Lock,
      title: 'Post-Quantum Security',
      description: 'Developing cryptographic systems for the quantum era',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {highlights.map((highlight, index) => {
        const Icon = highlight.icon;
        return (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}