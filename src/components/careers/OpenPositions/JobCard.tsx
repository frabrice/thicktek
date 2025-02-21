import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  index: number;
}

export function JobCard({ title, department, location, type, index }: JobCardProps) {
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
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            {type}
          </div>
        </div>
        
        <Button className="w-full group">
          Apply Now
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </Card>
    </motion.div>
  );
}