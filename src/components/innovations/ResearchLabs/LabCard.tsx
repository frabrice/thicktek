import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface LabCardProps {
  name: string;
  description: string;
  focus: string[];
  image: string;
  index: number;
}

export function LabCard({ name, description, focus, image, index }: LabCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group cursor-pointer h-full">
        <div className="aspect-video relative">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="space-y-2 mb-4">
            {focus.map((item) => (
              <div key={item} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center text-primary text-sm">
            Learn more
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}