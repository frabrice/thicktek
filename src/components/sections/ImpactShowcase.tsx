import { motion } from 'framer-motion';
import { Settings, Smartphone, Brain, LineChart } from 'lucide-react';

const cards = [
  {
    icon: Settings,
    title: 'Customized Infrastructure',
    description: 'Tailored software solutions built for your unique operational needs — not someone else\'s template.',
    stats: '99.9% reliability',
    accent: 'text-blue-400',
    statColor: 'text-blue-400',
  },
  {
    icon: Smartphone,
    title: 'Modern Web & Mobile',
    description: 'Cutting-edge interfaces that convert visitors into customers on every device.',
    stats: '40% faster delivery',
    accent: 'text-emerald-400',
    statColor: 'text-emerald-400',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description: 'Intelligent systems that reduce manual work and surface insights automatically.',
    stats: '85% efficiency boost',
    accent: 'text-amber-400',
    statColor: 'text-amber-400',
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transforming raw data into decisions — dashboards and pipelines that actually get used.',
    stats: '2.5x ROI increase',
    accent: 'text-blue-400',
    statColor: 'text-blue-400',
  },
];

export default function ImpactShowcase() {
  return (
    <section id="impact" className="py-12 border-t border-border/40">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mb-10"
        >
          <p className="label-mono mb-4">// Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3">
            Transforming how industries operate.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The businesses we work with don't just look better — they perform better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors duration-300 flex flex-col"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-4 h-4 ${card.accent}`} />
                </div>
                <h3 className="text-sm font-semibold mb-2 text-foreground">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                <div className="pt-4 mt-auto">
                  <span className={`text-sm font-bold font-mono-code ${card.statColor}`}>{card.stats}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
