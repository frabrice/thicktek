import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const problems = [
  {
    title: 'Your website gets visitors — but no leads.',
    description: 'Traffic without conversion is wasted attention. If people visit and leave without contacting you, your site is not working.',
  },
  {
    title: 'No one knows what to do when they land on it.',
    description: 'Cluttered pages, unclear messaging, and no obvious next step push potential clients straight to competitors.',
  },
  {
    title: 'You have no idea what is actually happening.',
    description: 'Without tracking, you are making decisions blind. Which pages work? Where do people drop off?',
  },
  {
    title: 'It looks outdated — and clients notice.',
    description: 'First impressions are permanent. A dated site signals a dated business, whether that is true or not.',
  },
];

export default function ProblemSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative border-t border-border/40">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 font-mono">// The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
            Most business websites are<br />
            <span className="text-muted-foreground font-normal">costing you money, not making it.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
            A website that exists but does not convert is not neutral — it is actively working against you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-4 p-5 rounded-lg border border-border/60 bg-card group hover:border-red-500/20 transition-colors duration-200"
            >
              <div className="w-0.5 bg-red-500/40 rounded-full flex-shrink-0 self-stretch group-hover:bg-red-500/70 transition-colors" />
              <div>
                <h3 className="font-semibold text-sm mb-1.5 text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg border border-primary/15 bg-primary/[0.04] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div>
            <h3 className="font-semibold text-sm mb-1">Sound familiar?</h3>
            <p className="text-sm text-muted-foreground">
              We will audit your site and show you exactly what is broken — and what it is costing you.
            </p>
          </div>
          <Button
            size="sm"
            onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }}
            className="flex-shrink-0 h-9 text-xs bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get a Free Audit
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
