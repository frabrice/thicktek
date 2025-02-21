import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MessageSquare, FileSearch, Code, Rocket } from 'lucide-react';

export function ProcessFlow() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery",
      description: "We start by understanding your business needs, challenges, and goals through in-depth consultations.",
    },
    {
      icon: FileSearch,
      title: "Analysis & Planning",
      description: "Our team develops a comprehensive strategy and technical roadmap tailored to your requirements.",
    },
    {
      icon: Code,
      title: "Development",
      description: "We build your solution using modern technologies and industry best practices, with regular updates.",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We ensure a smooth deployment and provide ongoing support to help you achieve your goals.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground">
            A proven approach to delivering successful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-60%)] h-px bg-primary/20">
                    <div className="absolute top-0 left-0 w-2 h-2 -mt-0.5 rounded-full bg-primary" />
                  </div>
                )}
                
                <Card className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                  <div className="relative p-6 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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