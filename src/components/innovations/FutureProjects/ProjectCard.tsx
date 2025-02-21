import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  timeline: string;
  description: string;
  image: string;
  goals: string[];
  index: number;
}

export function ProjectCard({
  title,
  category,
  timeline,
  description,
  image,
  goals,
  index,
}: ProjectCardProps) {
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
            alt={title}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {timeline}
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Project Goals:</h4>
            {goals.map((goal) => (
              <div key={goal} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                {goal}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}