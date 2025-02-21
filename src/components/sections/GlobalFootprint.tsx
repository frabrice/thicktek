import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Users, Rocket, Globe2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function GlobalFootprint() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: MapPin,
      value: 'Kigali',
      label: 'Headquarters',
      gradient: 'from-blue-500/20 to-purple-500/20',
      delay: 0,
    },
    {
      icon: Users,
      value: '20+',
      label: 'Team Members',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      delay: 0.1,
    },
    {
      icon: Rocket,
      value: '30+',
      label: 'Projects Delivered',
      gradient: 'from-orange-500/20 to-red-500/20',
      delay: 0.2,
    },
    {
      icon: Globe2,
      value: '5+',
      label: 'Countries Served',
      gradient: 'from-indigo-500/20 to-blue-500/20',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Global Footprint</h2>
          <p className="text-muted-foreground">
            Based in the heart of Kigali, delivering excellence across Africa
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                >
                  <Card className="relative h-full overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`} />
                    <div className="relative p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 rounded-full bg-background/60 backdrop-blur-sm">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}