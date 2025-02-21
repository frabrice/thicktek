import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Settings, Smartphone, Brain, LineChart } from 'lucide-react';

export default function ImpactShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cards = [
    {
      icon: Settings,
      title: "Customized Infrastructure",
      description: "Tailored software solutions built for your unique needs",
      stats: "99.9% reliability",
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    },
    {
      icon: Smartphone,
      title: "Modern Web & Mobile",
      description: "Cutting-edge websites and mobile applications",
      stats: "40% faster delivery",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that learn and adapt",
      stats: "85% efficiency boost",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description: "Transforming data into actionable insights",
      stats: "2.5x ROI increase",
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    },
  ];

  return (
    <section id="impact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Transforming Industries</h2>
          <p className="text-muted-foreground">
            Our innovative solutions are reshaping industries and driving unprecedented growth across sectors.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden group h-full hover:shadow-lg transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-100 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="relative p-6 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                    <div className="pt-2">
                      <span className="text-lg font-semibold text-primary">{card.stats}</span>
                    </div>
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