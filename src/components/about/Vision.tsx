import { motion } from 'framer-motion';
import { Target, Lightbulb, ArrowRight } from 'lucide-react';
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
  { label: 'Founded', value: '2022' },
  { label: 'Team', value: '20+' },
  { label: 'Countries', value: '5+' },
  { label: 'Projects', value: '30+' },
];

export function Vision() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden pt-[68px]">
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
          className="absolute right-0 top-1/4 w-[560px] h-[560px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, hsl(213, 94%, 58%) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-0">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="label-mono">// About Us</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] sm:text-[3.25rem] leading-[1.05] mb-5 text-foreground font-display"
              style={{ letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Serious technology,<br />
              built from the<br />
              <span className="text-primary">heart of Africa.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-muted-foreground text-base space-y-4 leading-relaxed mb-8 max-w-md">
              <p>
                ThickTek was founded in 2022 in Kigali with a single conviction: that the best
                digital infrastructure shouldn't only exist in Silicon Valley. We build systems
                that work — for businesses in Africa and beyond.
              </p>
              <p>
                We're not a consultancy. We're engineers and operators who take ownership
                of outcomes, not just deliverables.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 h-11 text-sm font-semibold group"
                onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
              >
                Work With Us
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground border border-border/70 hover:border-border px-7 h-11 text-sm"
                onClick={() => { window.scrollTo(0, 0); navigate('/how-it-works'); }}
              >
                How We Work
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-4 gap-4 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/60 bg-card p-4 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold font-display text-primary" style={{ letterSpacing: '-0.03em' }}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="group rounded-xl border border-border/60 bg-card overflow-hidden hover:border-primary/30 transition-colors duration-300">
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                    <Target className="w-4 h-4 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To empower businesses through systems-level technology — fostering digital
                  transformation and sustainable growth while showcasing African excellence
                  on the global stage.
                </p>
              </div>
            </div>

            <div className="group rounded-xl border border-border/60 bg-card overflow-hidden hover:border-primary/30 transition-colors duration-300">
              <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-3">
                    <Lightbulb className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To be the defining technology partner for Africa's most ambitious businesses —
                  building infrastructure that scales regionally and competes globally.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-secondary/30 p-4">
              <p className="font-mono-code text-xs text-muted-foreground/60 leading-relaxed">
                <span className="text-emerald-400/70">~</span>{' '}
                <span className="text-muted-foreground/40">Founded</span>{' '}
                <span className="text-primary/60">Kigali, Rwanda</span>{' '}
                <span className="text-muted-foreground/40">·</span>{' '}
                <span className="text-primary/60">2022</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
