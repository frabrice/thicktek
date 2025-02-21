import { motion } from 'framer-motion';
import { Users, Building2, Globe2, Award } from 'lucide-react';

interface GlobalStatsProps {
  inView: boolean;
}

export function GlobalStats({ inView }: GlobalStatsProps) {
  const stats = [
    { icon: Building2, value: '10', label: 'African Offices' },
    { icon: Users, value: '1000+', label: 'Team Members' },
    { icon: Globe2, value: '30+', label: 'African Countries' },
    { icon: Award, value: '150+', label: 'Projects Delivered' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}