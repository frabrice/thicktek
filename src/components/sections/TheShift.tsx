import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const shifts = [
  {
    from: 'A page that shows what you do',
    to: 'A system that brings in clients automatically',
  },
  {
    from: 'Static contact info',
    to: 'Structured lead capture and qualification',
  },
  {
    from: 'No idea who visited',
    to: 'Full visibility into traffic, behavior, and conversion',
  },
  {
    from: 'Updated when you remember',
    to: 'A living platform that evolves with your business',
  },
];

export default function TheShift() {
  const navigate = useNavigate();

  return (
    <section className="py-24 border-t border-border/40">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 font-mono">// The Shift</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
            A website is not a page.<br />
            <span className="text-primary">It is a system.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
            The businesses winning online are not the ones with the prettiest websites.
            They are the ones with the most intentional systems behind them.
          </p>
        </motion.div>

        <div className="rounded-lg border border-border/60 bg-card overflow-hidden mb-10">
          <div className="grid grid-cols-[32px_1fr_40px_1fr] text-xs border-b border-border/40 bg-[hsl(216,24%,6%)]">
            <div className="p-3 border-r border-border/30" />
            <div className="p-3 text-muted-foreground/50 font-mono uppercase tracking-wider">Before</div>
            <div className="border-r border-border/30" />
            <div className="p-3 text-muted-foreground/50 font-mono uppercase tracking-wider">After</div>
          </div>

          {shifts.map((shift, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="grid grid-cols-[32px_1fr_40px_1fr] border-b border-border/30 last:border-0 group hover:bg-primary/[0.02] transition-colors"
            >
              <div className="flex items-center justify-center p-3 border-r border-border/30">
                <span className="text-xs text-muted-foreground/30 font-mono">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="p-3.5 flex items-center">
                <span className="text-sm text-muted-foreground/50 line-through decoration-muted-foreground/30">{shift.from}</span>
              </div>
              <div className="flex items-center justify-center border-r border-l border-border/30">
                <ArrowRight className="w-3.5 h-3.5 text-primary/40 group-hover:text-primary/70 transition-colors" />
              </div>
              <div className="p-3.5 flex items-center">
                <span className="text-sm text-foreground/90 font-medium">{shift.to}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="sm"
            onClick={() => { window.scrollTo(0, 0); navigate('/how-it-works'); }}
            className="h-9 text-xs bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Zap className="w-3.5 h-3.5 mr-1.5" />
            See How It Works
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
