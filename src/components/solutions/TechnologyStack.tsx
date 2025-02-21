import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Cloud, Database, Shield, Cpu, Network, BarChart } from 'lucide-react';

export function TechnologyStack() {
  const technologies = [
    {
      icon: Cloud,
      name: 'Cloud Infrastructure',
      description: 'AWS, Azure, GCP',
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Database,
      name: 'Data & Analytics',
      description: 'Big Data, ML, AI',
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Shield,
      name: 'Security',
      description: 'Zero Trust, Compliance',
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Cpu,
      name: 'Edge Computing',
      description: 'IoT Solutions',
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      icon: Network,
      name: 'Integration',
      description: 'APIs, Microservices',
      gradient: "from-pink-500/20 to-purple-500/20",
    },
    {
      icon: BarChart,
      name: 'Business Intelligence',
      description: 'Analytics, Reporting',
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-muted-foreground">
            Best-in-class technologies powering our solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient}`} />
                  <div className="relative p-4 h-full text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium mb-1">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
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