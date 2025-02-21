import { useInView } from 'react-intersection-observer';
import { Shield, Lightbulb, Rocket, Globe2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function CorePillars() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security and compliance built into every solution",
    },
    {
      icon: Lightbulb,
      title: "Innovation DNA",
      description: "Continuous innovation driving next-generation solutions",
    },
    {
      icon: Rocket,
      title: "Scalable Growth",
      description: "Architecture that grows with your business needs",
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Solutions that create lasting positive change worldwide",
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Pillars of Innovation</h2>
          <p className="text-muted-foreground">
            Our foundational principles that drive technological excellence and business transformation
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group h-full hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="relative p-6 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}