import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CircleCheck as CheckCircle, Search, Loader as Loader2, BarChart2, Eye, Zap, Target, Lock, Clock, Shield, CircleAlert as AlertCircle, Circle as XCircle, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '@/lib/supabase';

const steps = [
  { num: '01', label: 'Submit', desc: 'Share your URL and biggest challenge' },
  { num: '02', label: 'We Audit', desc: 'We analyze your site across 4 dimensions' },
  { num: '03', label: 'You Receive', desc: 'Detailed findings in your inbox within 48h' },
];

const deliverables = [
  {
    icon: BarChart2,
    title: 'Conversion Rate Analysis',
    description: 'Where your site loses visitors and why they are not turning into leads or clients.',
  },
  {
    icon: Eye,
    title: 'User Experience Review',
    description: 'How navigation, layout, and messaging are affecting the visitor experience.',
  },
  {
    icon: Zap,
    title: 'Performance Assessment',
    description: 'Load speed, technical health, and how these impact SEO and conversions.',
  },
  {
    icon: Target,
    title: 'Specific Recommendations',
    description: 'Not vague suggestions — a prioritized list of what to fix, change, or add.',
  },
];

const mockFindings = [
  { type: 'fail', label: 'FAIL', text: 'No CTA above the fold' },
  { type: 'fail', label: 'FAIL', text: 'Contact form buried 4 scrolls deep' },
  { type: 'fail', label: 'FAIL', text: 'Hero copy explains features, not outcomes' },
  { type: 'warn', label: 'WARN', text: 'No testimonials or trust signals visible' },
  { type: 'fail', label: 'FAIL', text: 'Mobile layout broken on /services' },
  { type: 'warn', label: 'WARN', text: 'Load time: 6.2s — losing 40%+ of mobile visitors' },
  { type: 'pass', label: 'PASS', text: 'SSL certificate valid' },
];

const typeStyles: Record<string, { color: string; icon: typeof CheckCircle }> = {
  fail: { color: 'text-red-400', icon: XCircle },
  warn: { color: 'text-amber-400', icon: AlertCircle },
  pass: { color: 'text-emerald-400', icon: CheckCircle },
  info: { color: 'text-blue-400', icon: Terminal },
};

export default function AuditPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website_url: '',
    challenge: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await sendEmail({ type: 'audit', data: formData });
      setIsSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us at admin@thicktek.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-[52px] pb-24 min-h-screen">
      <div className="container py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl pt-16 pb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-6">
            <Search className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Free Website Audit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            Let us show you what<br />
            <span className="text-primary">your website is missing.</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Most websites underperform without their owners knowing. The gap between what
            your site does and what it could do represents real, measurable revenue.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mb-14"
        >
          <div className="rounded-lg border border-border/60 bg-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-5">
                  <span className="text-2xl font-bold font-mono text-primary/20 flex-shrink-0">{step.num}</span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{step.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Left */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-lg font-bold mb-1.5">What you receive</h2>
              <p className="text-sm text-muted-foreground mb-6">
                A structured analysis of your site delivered within 48 hours.
              </p>

              <div className="space-y-4">
                {deliverables.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <motion.div
                      key={d.title}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex gap-4"
                    >
                      <div className="w-1 bg-primary/30 rounded-full flex-shrink-0 self-stretch" />
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{d.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{d.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Mock findings terminal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-lg border border-border/60 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-[hsl(216,24%,6%)]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-xs text-muted-foreground/50 ml-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>example-audit-report.txt</span>
              </div>
              <div className="p-4 space-y-2" style={{ background: 'hsl(216, 28%, 4%)', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
                <div className="text-xs text-muted-foreground/40 mb-3">$ thicktek audit --url example.com</div>
                {mockFindings.map((f, i) => {
                  const style = typeStyles[f.type];
                  const Icon = style.icon;
                  return (
                    <div key={i} className="flex items-start gap-2">
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${style.color}`} />
                      <span className={`text-xs font-bold ${style.color} w-9 flex-shrink-0`}>{f.label}</span>
                      <span className="text-xs text-muted-foreground/60">{f.text}</span>
                    </div>
                  );
                })}
                <div className="pt-2 border-t border-border/20 mt-1 text-xs text-muted-foreground/30">
                  5 issues found · Full report includes prioritized fix list
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="rounded-xl border border-border/60 bg-card overflow-hidden shadow-xl shadow-black/30">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="p-7">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-6"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 mb-5">
                        <CheckCircle className="w-7 h-7 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Audit Request Received</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        We will review <span className="text-foreground font-medium">{formData.website_url}</span> and send you a detailed analysis within 48 hours.
                      </p>
                      <p className="text-xs text-muted-foreground mb-7">
                        Check <span className="text-foreground">{formData.email}</span> for confirmation.
                      </p>

                      <div className="space-y-3 mb-7">
                        {[
                          { num: '01', label: 'Confirmation email sent' },
                          { num: '02', label: 'We audit your site within 24h' },
                          { num: '03', label: 'Detailed report in your inbox' },
                        ].map((s) => (
                          <div key={s.num} className="flex items-center gap-3">
                            <span className="text-xs font-mono text-primary/40">{s.num}</span>
                            <div className="h-px flex-1 bg-border/40" />
                            <span className="text-xs text-muted-foreground">{s.label}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 text-xs"
                        onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
                      >
                        Book a Strategy Call
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <h2 className="text-base font-bold mb-0.5">Request your free audit</h2>
                        <p className="text-xs text-muted-foreground">
                          We will send you specific findings within 48 hours.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-xs">Your Name</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            className="h-9 text-sm"
                            value={formData.name}
                            onChange={e => handleChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-xs">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            className="h-9 text-sm"
                            value={formData.email}
                            onChange={e => handleChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="company" className="text-xs">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          className="h-9 text-sm"
                          value={formData.company}
                          onChange={e => handleChange('company', e.target.value)}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="website_url" className="text-xs">Website URL</Label>
                        <Input
                          id="website_url"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          className="h-9 text-sm"
                          value={formData.website_url}
                          onChange={e => handleChange('website_url', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="challenge" className="text-xs">What is your biggest challenge right now?</Label>
                        <Textarea
                          id="challenge"
                          placeholder="e.g. Our website gets visitors but no leads, people leave quickly..."
                          className="min-h-[100px] text-sm resize-none"
                          value={formData.challenge}
                          onChange={e => handleChange('challenge', e.target.value)}
                          required
                        />
                      </div>

                      {error && (
                        <p className="text-xs text-destructive">{error}</p>
                      )}

                      <div className="pt-1 space-y-3">
                        <Button
                          className="w-full h-10 text-sm bg-primary hover:bg-primary/90 text-primary-foreground"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Search className="w-4 h-4 mr-2" />
                              Request Free Audit
                            </>
                          )}
                        </Button>

                        <div className="flex items-center justify-center gap-5">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
                            <Lock className="w-3 h-3" />
                            No spam
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
                            <Clock className="w-3 h-3" />
                            48hr turnaround
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
                            <Shield className="w-3 h-3" />
                            No commitment
                          </div>
                        </div>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl rounded-xl border border-border/60 bg-card overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40">
            <div className="p-8">
              <h3 className="font-bold text-base mb-2">Prefer to talk first?</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Book a strategy call and we will walk through your current situation together before sending you anything formal.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="h-9 text-xs"
                onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
              >
                Book a Strategy Call
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="text-xs font-mono text-muted-foreground/40 mb-3 uppercase tracking-widest">What clients say</p>
              <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                "The audit identified three issues we had never noticed. Within two weeks of fixing them, our inquiry rate doubled."
              </blockquote>
              <div className="mt-3 text-xs text-muted-foreground/50">— Placeholder Client, Company Name</div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
