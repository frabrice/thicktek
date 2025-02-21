import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface TechCardProps {
  name: string;
  status: string;
  progress: number;
  description: string;
  image: string;
  index: number;
}

export function TechCard({ name, status, progress, description, image, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full">
        <div className="aspect-video relative">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
            {status}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Development Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}