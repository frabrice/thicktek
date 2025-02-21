import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Leaf, Droplets, Sun, Recycle } from 'lucide-react';

interface ImpactMetricsProps {
  inView: boolean;
}

export function ImpactMetrics({ inView }: ImpactMetricsProps) {
  const metrics = [
    {
      icon: Leaf,
      value: '45%',
      label: 'Carbon Reduction',
      description: 'Decrease in carbon footprint through green technologies',
    },
    {
      icon: Droplets,
      value: '2.5M',
      label: 'Water Saved',
      description: 'Gallons of water saved through efficient systems',
    },
    {
      icon: Sun,
      value: '80%',
      label: 'Renewable Energy',
      description: 'Operations powered by renewable energy sources',
    },
    {
      icon: Recycle,
      value: '90%',
      label: 'E-Waste Recycled',
      description: 'Electronic waste properly recycled and repurposed',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="font-medium mb-2">{metric.label}</div>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}