import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  inView: boolean;
  delay: number;
}

export function SolutionCard({
  icon: Icon,
  title,
  description,
  features,
  inView,
  delay,
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow group">
        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-4 p-2 rounded-lg bg-primary/10 w-fit">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-6">
            {description}
          </p>
          
          <div className="mt-auto space-x-2 space-y-2">
            {features.map((feature) => (
              <Badge
                key={feature}
                variant="secondary"
                className="bg-secondary/50 hover:bg-secondary"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}