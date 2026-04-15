import { motion } from 'framer-motion';
import { ArrowRight, FlaskConical, Cpu, Layers } from 'lucide-react';
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

const focusAreas = [
  {
    icon: Cpu,
    label: 'AI & Automation',
    desc: 'Intelligent systems that reduce manual work across operations',
  },
  {
    icon: Layers,
    label: 'Platform Infrastructure',
    desc: 'Scalable backends and APIs built for African market realities',
  },
  {
    icon: FlaskConical,
    label: 'Emerging Tech R&D',
    desc: 'Exploring what comes next — mobile-first, low-latency, high-impact',
  },
];

export function InnovationShowcase() {
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
          className="absolute right-0 top-1/4 w-[520px] h-[520px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, hsl(213, 94%, 58%) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="label-mono">// Innovation Hub</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] sm:text-[3.25rem] leading-[1.05] mb-5 text-foreground font-display"
              style={{ letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Building tomorrow's<br />
              solutions for{' '}
              <span className="text-primary">real<br />challenges.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
            >
              We invest a portion of every month in exploring ideas that don't yet
              have clients — technology bets that we believe will shape how African
              businesses operate in the next decade.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 h-11 text-sm font-semibold group"
                onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground border border-border/70 hover:border-border px-7 h-11 text-sm"
                onClick={() => { window.scrollTo(0, 0); navigate('/solutions'); }}
              >
                View Solutions
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.label}
                  className="group rounded-xl border border-border/60 bg-card p-5 flex items-start gap-4 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">{area.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{area.desc}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
