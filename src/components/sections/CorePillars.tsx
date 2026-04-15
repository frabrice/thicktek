import { Shield, Lightbulb, Rocket, Globe as Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security and compliance built into every solution from day one.',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/8',
  },
  {
    icon: Lightbulb,
    title: 'Innovation DNA',
    description: 'Continuous improvement and next-generation thinking wired into how we work.',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/8',
  },
  {
    icon: Rocket,
    title: 'Scalable Growth',
    description: 'Architecture engineered to grow with your business — no costly rebuilds later.',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/8',
  },
  {
    icon: Globe2,
    title: 'Global Impact',
    description: 'Built in Africa, designed for the world — creating change that travels.',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/8',
  },
];

export default function CorePillars() {
  return (
    <section className="py-12 border-t border-border/40">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mb-10"
        >
          <p className="label-mono mb-4">// Core Pillars</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3">
            Principles that drive everything we build.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Not slogans. The actual operating principles that show up in how we design, build, and deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors duration-300 cursor-default"
              >
                <div className={`w-9 h-9 rounded-lg ${pillar.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-4 h-4 ${pillar.accent}`} />
                </div>
                <h3 className="text-sm font-semibold mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
