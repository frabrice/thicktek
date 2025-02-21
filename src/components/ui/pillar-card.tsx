import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  inView: boolean;
  delay: number;
}

export function PillarCard({
  icon: Icon,
  title,
  description,
  inView,
  delay,
}: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="relative p-6 overflow-hidden group hover:bg-secondary/70 transition-colors">
        <div className="relative z-10">
          <div className="mb-4">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Card>
    </motion.div>
  );
}