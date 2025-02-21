import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

interface LeaderCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  index: number;
}

export function LeaderCard({ name, role, image, bio, linkedin, index }: LeaderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
        <div className="relative">
          {/* Image Container */}
          <div className="aspect-[4/5] relative overflow-hidden">
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
            
            {/* LinkedIn Button */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/20"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="space-y-3">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-foreground"
              >
                {name}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-primary"
              >
                {role}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm text-muted-foreground line-clamp-2"
              >
                {bio}
              </motion.p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}