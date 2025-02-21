import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Brain, Award, FileText, Users } from 'lucide-react';

export function InnovationMetrics() {
  const metrics = [
    {
      icon: Brain,
      value: '150+',
      label: 'Active Research Projects',
    },
    {
      icon: Award,
      value: '45',
      label: 'Patents Filed',
    },
    {
      icon: FileText,
      value: '200+',
      label: 'Research Publications',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Research Scientists',
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Innovation by the Numbers</h2>
          <p className="text-muted-foreground">
            Measuring our impact on technology and society
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Research Growth</h3>
            <div className="h-64">
              {/* Chart component removed since it's not being used */}
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
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