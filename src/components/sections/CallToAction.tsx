import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-24 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(213,94%,58%,0.06),transparent)]" />
      </div>

      <div className="container max-w-5xl relative z-10">
        <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
          />

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 font-mono">// Let's Build</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
                Let us show you what<br />
                <span className="text-primary">your website could become.</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Start with a free audit. We will map exactly what is underperforming,
                what it is costing you, and what a system-first approach looks like for your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 text-sm font-medium"
                onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }}
              >
                <Search className="w-4 h-4 mr-2" />
                Request a Website Audit
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="w-full border border-border hover:border-border/80 text-muted-foreground hover:text-foreground h-11 text-sm group"
                onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>

              <div className="flex items-center gap-4 pt-2">
                {[
                  { label: 'Free · no commitment' },
                  { label: '48hr turnaround' },
                  { label: 'Real analysis' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
