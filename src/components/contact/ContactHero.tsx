import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Mail } from 'lucide-react';
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

const details = [
  { icon: MapPin, label: 'Kigali, Rwanda', sub: 'Serving clients globally' },
  { icon: Clock, label: '48hr response', sub: 'Typical reply time' },
  { icon: Mail, label: 'admin@thicktek.com', sub: 'Direct line' },
];

export function ContactHero() {
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
          className="absolute right-0 bottom-1/4 w-[480px] h-[480px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, hsl(213, 94%, 58%) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="label-mono">// Contact</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] sm:text-[3.25rem] leading-[1.05] mb-5 text-foreground font-display"
              style={{ letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Let's talk about<br />
              what your business<br />
              <span className="text-primary">actually needs.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
            >
              Whether you have a clear brief or just a problem to solve — we're the right
              people to speak to. No sales process. No pressure. Just a direct conversation.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 h-11 text-sm font-semibold group"
                onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
              >
                Schedule a Meeting
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  className="group rounded-xl border border-border/60 bg-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{detail.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{detail.sub}</div>
                  </div>
                </div>
              );
            })}

            <div className="mt-1 rounded-xl border border-border/40 bg-secondary/30 p-4">
              <p className="text-xs text-muted-foreground/70 leading-relaxed">
                Prefer to start with a free audit instead?{' '}
                <button
                  className="text-primary hover:underline underline-offset-2 transition-colors"
                  onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }}
                >
                  Request one here →
                </button>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
