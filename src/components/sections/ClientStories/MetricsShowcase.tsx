import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Gauge, TrendingUp, Clock } from 'lucide-react';

interface MetricsShowcaseProps {
  inView: boolean;
}

export function MetricsShowcase({ inView }: MetricsShowcaseProps) {
  const metrics = [
    {
      icon: Gauge,
      value: '98%',
      label: 'Client Satisfaction',
    },
    {
      icon: TrendingUp,
      value: '45%',
      label: 'Average ROI',
    },
    {
      icon: Clock,
      value: '30%',
      label: 'Faster Time-to-Market',
    },
  ];

  return (
    <Card className="p-8 bg-primary/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}