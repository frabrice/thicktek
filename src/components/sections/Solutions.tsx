import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Cloud, Database, Lock, Network, Cpu, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solutions() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: Cloud,
      title: "Cloud Transformation",
      description: "Modernize your infrastructure with our cloud-native solutions",
      features: ["Hybrid Cloud", "Multi-Cloud", "Cloud Security"],
      gradient: "from-blue-500/20 via-sky-500/20 to-cyan-500/20",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transform raw data into actionable business intelligence",
      features: ["Big Data", "Data Lakes", "Real-time Analytics"],
      gradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Enterprise-grade security for the digital age",
      features: ["Zero Trust", "Threat Detection", "Compliance"],
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    },
    {
      icon: Network,
      title: "Digital Infrastructure",
      description: "Build resilient and scalable digital foundations",
      features: ["Edge Computing", "5G Solutions", "IoT Platform"],
      gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Intelligent systems that learn and adapt",
      features: ["Machine Learning", "NLP", "Computer Vision"],
      gradient: "from-rose-500/20 via-pink-500/20 to-red-500/20",
    },
    {
      icon: BarChart,
      title: "Analytics Platform",
      description: "Deep insights for data-driven decisions",
      features: ["Predictive Analytics", "BI Tools", "Custom Dashboards"],
      gradient: "from-indigo-500/20 via-blue-500/20 to-violet-500/20",
    },
  ];

  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Signature Solutions</h2>
          <p className="text-muted-foreground">
            Cutting-edge solutions designed to transform your business and drive innovation
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group h-full hover:shadow-lg transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-100 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="relative p-6 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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