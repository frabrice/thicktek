import { motion } from 'framer-motion';
import { MapPin, Users, Rocket, Globe as Globe2 } from 'lucide-react';

const stats = [
  {
    icon: MapPin,
    value: 'Kigali',
    label: 'Headquarters',
    sub: 'Rwanda, Africa',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/8',
    delay: 0,
  },
  {
    icon: Users,
    value: '20+',
    label: 'Team Members',
    sub: 'Across 5+ countries',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/8',
    delay: 0.08,
  },
  {
    icon: Rocket,
    value: '30+',
    label: 'Projects Delivered',
    sub: 'Live in production',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/8',
    delay: 0.16,
  },
  {
    icon: Globe2,
    value: '5+',
    label: 'Countries Served',
    sub: 'And growing',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/8',
    delay: 0.24,
  },
];

export default function GlobalFootprint() {
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
          <p className="label-mono mb-4">// Global Footprint</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3">
            Based in Kigali.<br />Operating worldwide.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            From East Africa to global markets — we build systems that work wherever your business is.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-border/60 bg-card p-5 hover:border-primary/30 transition-colors duration-300"
              >
                <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-3.5 h-3.5 ${stat.accent}`} />
                </div>
                <div className="text-2xl font-bold font-display text-foreground mb-1" style={{ letterSpacing: '-0.03em' }}>{stat.value}</div>
                <div className="text-xs font-medium text-foreground/70 mb-0.5">{stat.label}</div>
                <div className="text-xs text-muted-foreground/60">{stat.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
