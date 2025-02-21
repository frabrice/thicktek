import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface InitiativesProps {
  inView: boolean;
}

export function Initiatives({ inView }: InitiativesProps) {
  const initiatives = [
    {
      title: 'Green Data Centers',
      description: 'Energy-efficient data centers powered by renewable sources',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'E-Waste Management',
      description: 'Responsible recycling and repurposing of electronic waste',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'Smart Buildings',
      description: 'Intelligent systems for optimal resource utilization',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {initiatives.map((initiative, index) => (
        <motion.div
          key={initiative.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full group">
            <div className="aspect-video relative">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {initiative.title}
              </h3>
              <p className="text-muted-foreground mb-4">{initiative.description}</p>
              <div className="flex items-center text-sm text-primary">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}