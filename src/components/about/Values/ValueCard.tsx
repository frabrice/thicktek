import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Leaf, Lightbulb, Trophy, Users } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const icons = {
  Lightbulb,
  Trophy,
  Leaf,
  Users,
};

const gradients = {
  Lightbulb: 'from-blue-500/20 to-purple-500/20',
  Trophy: 'from-emerald-500/20 to-teal-500/20',
  Leaf: 'from-orange-500/20 to-red-500/20',
  Users: 'from-indigo-500/20 to-blue-500/20',
};

export function ValueCard({ title, description, icon, index }: ValueCardProps) {
  const Icon = icons[icon as keyof typeof icons];
  const gradient = gradients[icon as keyof typeof gradients];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="relative h-full overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div className="relative p-6 space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}