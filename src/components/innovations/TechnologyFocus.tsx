import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Cloud, Database, Shield } from 'lucide-react';

export function TechnologyFocus() {
  const areas = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Building tailored solutions for businesses across Africa',
      features: [
        'Web Applications',
        'Mobile Solutions',
        'API Development',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Helping businesses leverage cloud technology effectively',
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Cloud Security',
      ],
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Implementing efficient data solutions for organizations',
      features: [
        'Database Design',
        'Data Integration',
        'Analytics Solutions',
      ],
    },
    {
      icon: Shield,
      title: 'Digital Security',
      description: 'Protecting digital assets with modern security practices',
      features: [
        'Security Audits',
        'Access Control',
        'Data Protection',
      ],
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technology Focus Areas</h2>
          <p className="text-muted-foreground">
            Core technologies driving our innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}