import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, CircleCheck as CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find(c => c.slug === slug);

  if (!study) {
    return (
      <main className="pt-[52px] pb-24 min-h-screen">
        <div className="container py-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Case study not found</h1>
          <Button onClick={() => navigate('/case-studies')}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Button>
        </div>
      </main>
    );
  }

  const currentIndex = caseStudies.findIndex(c => c.slug === slug);
  const nextStudy = caseStudies[currentIndex + 1] || caseStudies[0];

  return (
    <main className="pt-[52px] pb-24 min-h-screen">

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={study.image}
          alt={study.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container pb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full">
                {study.category}
              </span>
              <span className="text-xs font-medium bg-secondary text-muted-foreground px-3 py-1 rounded-full">
                {study.year}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{study.name}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{study.tagline}</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto mt-16 space-y-16">

          {/* Metrics */}
          {study.metrics && study.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {study.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-2xl font-bold text-blue-400 mb-1">{m.value}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{m.label}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-4">Overview</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.overview}</p>
          </motion.div>

          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-4">The Problem</p>
            <div className="rounded-xl border border-border bg-card p-8">
              <p className="text-foreground leading-relaxed text-lg">{study.problem}</p>
            </div>
          </motion.div>

          {/* What Was Built */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-4">What Was Built</p>
            <div className="space-y-3">
              {study.built.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-4">The Result</p>
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-8">
              <p className="text-foreground leading-relaxed text-lg">{study.result}</p>
            </div>
          </motion.div>

          {/* Tags + Live Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-border"
          >
            <div className="flex flex-wrap gap-2">
              {study.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium">{tag}</span>
              ))}
            </div>
            {study.url && (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors gap-1.5"
              >
                Visit live project <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.div>

        </div>

        {/* Next Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-20"
        >
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Next Case Study</p>
          <div
            onClick={() => { window.scrollTo(0, 0); navigate(`/work/${nextStudy.slug}`); }}
            className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="aspect-[16/9] md:aspect-auto relative overflow-hidden">
                <img
                  src={nextStudy.image}
                  alt={nextStudy.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-2 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{nextStudy.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{nextStudy.tagline}</p>
                <div className="flex items-center text-sm text-blue-500 font-medium gap-1 group-hover:gap-2 transition-all">
                  Read case study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 rounded-2xl border border-border bg-card p-10 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Want a system like this?</h3>
          <p className="text-muted-foreground mb-6">
            Start with a free website audit — we'll show you exactly what needs to change and why.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }}>
              Request a Website Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}>
              Book a Strategy Call
            </Button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
