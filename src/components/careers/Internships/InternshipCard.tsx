import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface InternshipCardProps {
  title: string;
  department: string;
  duration: string;
  location: string;
  index: number;
}

export function InternshipCard({ title, department, duration, location, index }: InternshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-primary">{department}</p>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        </div>
        
        <Button className="w-full group">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </Card>
    </motion.div>
  );
}