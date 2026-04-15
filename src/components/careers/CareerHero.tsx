import { motion } from 'framer-motion';
import { ArrowRight, Users, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { icon: Users, value: '20+', label: 'team members' },
  { icon: Globe, value: '5+', label: 'countries' },
  { icon: Zap, value: '2022', label: 'founded' },
];

export function CareerHero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[72vh] flex items-center relative overflow-hidden pt-[68px]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(215 15% 50% / 0.04) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div
          className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, hsl(213, 94%, 58%) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="label-mono">// Careers</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] sm:text-[3.25rem] leading-[1.05] mb-5 text-foreground font-display"
              style={{ letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Build the future<br />
              of Africa's{' '}
              <span className="text-primary">digital<br />infrastructure.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
            >
              We're a small, focused team shipping serious technology out of Kigali.
              We're not always hiring, but we're always looking for exceptional people.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 h-11 text-sm font-semibold group"
                onClick={() => { window.scrollTo(0, 0); navigate('/contact'); }}
              >
                Reach Out Directly
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground border border-border/70 hover:border-border px-7 h-11 text-sm"
                onClick={() => { window.scrollTo(0, 0); navigate('/about'); }}
              >
                Learn About Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-border/60 bg-card p-5 flex items-center gap-5 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-display text-foreground" style={{ letterSpacing: '-0.03em' }}>{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                </div>
              );
            })}

            <div className="mt-1 rounded-xl border border-border/40 bg-secondary/30 p-4">
              <p className="font-mono-code text-xs text-muted-foreground/60 leading-relaxed">
                <span className="text-emerald-400/70">~</span>{' '}
                <span className="text-primary/60">join@thicktek.com</span>
                <br />
                <span className="text-muted-foreground/40 text-[11px]">We read every message personally.</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
