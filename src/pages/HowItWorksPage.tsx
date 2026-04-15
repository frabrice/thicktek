import { motion } from 'framer-motion';
import { ArrowRight, Search, Lightbulb, Hammer, TrendingUp, CircleCheck as CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit',
    subtitle: 'We assess what exists and what is costing you.',
    description:
      'We start by analyzing your current website or business system in full. We look at what visitors see, where they drop off, what the site is communicating (and not communicating), and what conversion paths exist or are missing. You receive a clear breakdown of every gap we find.',
    clientSees: 'A structured analysis of your site — not vague feedback, but specific findings with context.',
    outcome: 'A clear picture of your current position and the exact opportunities you are missing.',
    color: 'blue',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    subtitle: 'We define what the system needs to do.',
    description:
      'Before a single line of code is written, we map the full system. What do you want visitors to do? What should happen automatically? What does success look like in 6 months? This phase aligns your business goals with a technical architecture that serves them.',
    clientSees: 'A system blueprint — how the site will work, what features matter, and what the priorities are.',
    outcome: 'A plan both sides understand and agree on before any building starts.',
    color: 'emerald',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    subtitle: 'We build the system with precision.',
    description:
      'Design and development happen together, not separately. Every element is built with a purpose. Every page has a clear job. We do not use cookie-cutter templates — the system is constructed around your specific users, your specific goals, and your specific business context.',
    clientSees: 'Regular progress updates, a staging environment to review before launch, and clear communication throughout.',
    outcome: 'A production-ready system that looks and performs exactly as planned.',
    color: 'amber',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimize',
    subtitle: 'We track, measure, and improve over time.',
    description:
      'Launch is not the end — it is the beginning. After going live, we monitor performance, track conversion, identify friction points, and make improvements based on real data. Systems are not static. They evolve as your business does.',
    clientSees: 'Performance reports, improvement recommendations, and an ongoing partner who understands your system deeply.',
    outcome: 'A website that gets better over time, not one that gets outdated.',
    color: 'blue',
  },
];

const differentiators = [
  {
    title: 'Systems thinking, not template thinking',
    description:
      'We do not start with a template and fill in the blanks. We start with your business objectives and build backwards from there.',
  },
  {
    title: 'Business-first, technology second',
    description:
      'Every technical decision is made in service of a business outcome. If a feature does not serve your goals, we do not build it.',
  },
  {
    title: 'We measure what we build',
    description:
      'Every system we deliver includes the tools to understand how it is performing. You should always know what your website is doing.',
  },
  {
    title: 'Long-term partnership, not one-time delivery',
    description:
      'We stay engaged after launch. The businesses we work with treat us as a technical partner, not a vendor they hired once.',
  },
];

const colorMap: Record<string, string> = {
  blue: 'border-blue-500/30 bg-blue-500/5',
  emerald: 'border-emerald-500/30 bg-emerald-500/5',
  amber: 'border-amber-500/30 bg-amber-500/5',
};

const iconColorMap: Record<string, string> = {
  blue: 'text-blue-500 bg-blue-500/10',
  emerald: 'text-emerald-500 bg-emerald-500/10',
  amber: 'text-amber-500 bg-amber-500/10',
};

export default function HowItWorksPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-[68px] pb-24 min-h-screen">
      <div className="container py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-sm font-medium text-blue-500 tracking-widest uppercase mb-4">The Process</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            How we build systems<br />that work.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Four phases. No surprises. A clear process that ensures what we build
            serves your business — and keeps serving it long after launch.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl space-y-6 mb-24">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl border p-8 ${colorMap[step.color]}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <span className="text-4xl font-bold text-muted-foreground/30 tabular-nums leading-none">{step.number}</span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColorMap[step.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">{step.title}</h2>
                    <p className="text-muted-foreground font-medium mb-4">{step.subtitle}</p>
                    <p className="text-foreground/80 leading-relaxed mb-6">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-border bg-background/60 p-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What you see</p>
                        <p className="text-sm leading-relaxed">{step.clientSees}</p>
                      </div>
                      <div className="rounded-xl border border-border bg-background/60 p-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">The outcome</p>
                        <p className="text-sm leading-relaxed">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What Makes Us Different */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-4">What makes us different</p>
            <h2 className="text-3xl font-bold">We think like operators,<br />not just developers.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-xl border border-border bg-card"
              >
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl rounded-2xl border border-border bg-card p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to start the process?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
            The audit is where every engagement starts. It is free, specific, and gives you something useful whether we work together or not.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }}>
              Request a Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}>
              Book a Strategy Call
            </Button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
