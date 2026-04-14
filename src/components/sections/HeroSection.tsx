import { motion } from 'framer-motion';
import { ArrowRight, Search, Terminal, CircleCheck as CheckCircle, Circle as XCircle, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const auditLines = [
  { type: 'info', label: 'SCAN', text: 'yourwebsite.com — analyzing...' },
  { type: 'fail', label: 'FAIL', text: 'No CTA above the fold' },
  { type: 'fail', label: 'FAIL', text: 'Load time: 6.2s (threshold: 2.5s)' },
  { type: 'warn', label: 'WARN', text: 'Contact form: no value proposition' },
  { type: 'fail', label: 'FAIL', text: 'Mobile layout broken on /services' },
  { type: 'warn', label: 'WARN', text: 'No conversion tracking installed' },
  { type: 'pass', label: 'PASS', text: 'SSL certificate valid' },
  { type: 'info', label: 'DONE', text: '5 critical issues found' },
];

const typeStyles: Record<string, { color: string; icon: typeof CheckCircle }> = {
  fail: { color: 'text-red-400', icon: XCircle },
  warn: { color: 'text-amber-400', icon: AlertCircle },
  pass: { color: 'text-emerald-400', icon: CheckCircle },
  info: { color: 'text-blue-400', icon: Terminal },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[52px]">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(215 15% 50% / 0.04) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Horizontal rule across top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        {/* Ambient glow right */}
        <div
          className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, hsl(213, 94%, 58%) 0%, transparent 70%)' }}
        />
        {/* Faint scan-line effect */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(213 94% 58%) 2px, hsl(213 94% 58%) 3px)`,
            backgroundSize: '100% 60px',
          }}
        />
      </div>

      <div className="container py-8 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">

          {/* Left — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span
                  className="text-emerald-400 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Accepting new projects
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.75rem] sm:text-[3.5rem] leading-[1.05] mb-5 text-foreground"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Great businesses<br />
              don't just compete —<br />
              <span className="text-primary">they operate on a different level.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
            >
              We build digital infrastructure and business systems designed to generate leads,
              manage operations, and scale with you — engineered for outcomes, not aesthetics.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 h-11 text-sm font-semibold tracking-tight"
                onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }}
              >
                <Search className="w-4 h-4 mr-2" />
                Request a Free Audit
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground border border-border/70 hover:border-border px-7 h-11 text-sm group"
                onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-200" />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8"
            >
              {[
                { value: '30+', label: 'systems shipped' },
                { value: '5+', label: 'countries' },
                { value: '98%', label: 'satisfaction' },
              ].map((stat, i) => (
                <div key={stat.value}>
                  <div
                    className="text-xl font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  {i < 2 && <div className="absolute" />}
                </div>
              ))}
              <div className="h-8 w-px bg-border/60 hidden sm:block" />
            </motion.div>
          </motion.div>

          {/* Right — terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div
              className="rounded-xl overflow-hidden shadow-2xl shadow-black/50"
              style={{
                border: '1px solid hsl(216 14% 14%)',
                background: 'hsl(216 28% 5%)',
              }}
            >
              {/* Terminal titlebar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: '1px solid hsl(216 14% 10%)', background: 'hsl(216 28% 4%)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(0 72% 51% / 0.5)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(38 92% 50% / 0.5)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(142 70% 45% / 0.5)' }} />
                </div>
                <div className="flex-1 text-center">
                  <span
                    className="text-xs text-muted-foreground/50"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    example-website — site-audit
                  </span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="p-5 space-y-2.5" style={{ fontFamily: 'var(--font-mono)', background: 'hsl(216 28% 3.5%)' }}>
                <div className="text-xs text-muted-foreground/40 mb-3.5">
                  <span className="text-emerald-500/60">~</span> $ thicktek audit --url yourwebsite.com
                </div>

                {auditLines.map((line, i) => {
                  const style = typeStyles[line.type];
                  const Icon = style.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.13, duration: 0.35, ease: 'easeOut' }}
                      className="flex items-start gap-2.5"
                    >
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 mt-px ${style.color}`} />
                      <span className={`text-xs font-semibold ${style.color} w-9 flex-shrink-0`}>{line.label}</span>
                      <span className="text-xs text-muted-foreground/65 leading-relaxed">{line.text}</span>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                  className="pt-3.5 mt-1"
                  style={{ borderTop: '1px solid hsl(216 14% 9%)' }}
                >
                  <span className="text-xs text-muted-foreground/40">Full report delivered in 48h. </span>
                  <button
                    className="text-xs text-primary hover:underline underline-offset-2 transition-colors"
                    onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }}
                  >
                    Request yours →
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Stat chips below terminal */}
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {[
                { label: 'Rwanda · Africa · World', sub: 'Global reach' },
                { label: 'Full-stack', sub: 'End-to-end delivery' },
                { label: '48hr turnaround', sub: 'Fast & precise' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg px-3 py-2.5 text-center"
                  style={{ border: '1px solid hsl(216 14% 10%)', background: 'hsl(216 24% 6%)' }}
                >
                  <div className="text-xs font-medium text-foreground/70 leading-tight">{item.label}</div>
                  <div className="text-xs text-muted-foreground/50 mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
