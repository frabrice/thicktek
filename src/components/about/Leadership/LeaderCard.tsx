import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Linkedin, Award } from 'lucide-react';

interface LeaderCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  twitter: string;
  achievements: string[];
  index: number;
}

export function LeaderCard({ name, role, image, bio, linkedin, twitter, achievements, index }: LeaderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
        <div className="grid grid-cols-12 gap-8 p-8">
          {/* Image Container */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
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
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-foreground mb-2"
                >
                  {name}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl font-medium text-primary"
                >
                  {role}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mt-4 md:mt-0"
              >
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-primary fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              {bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto"
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center p-3 rounded-lg bg-primary/5"
                >
                  <Award className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}