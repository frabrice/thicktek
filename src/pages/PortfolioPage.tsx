import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Grid3x3 as Grid3X3, LayoutList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { caseStudies, selectedWork, categoryGroups, miniProjects } from '@/data/caseStudies';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { SelectedWorkCard } from '@/components/portfolio/SelectedWorkCard';
import { MiniProjectCard } from '@/components/portfolio/MiniProjectCard';

type ViewMode = 'list' | 'category';

export default function PortfolioPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const navigate = useNavigate();

  return (
    <main className="pt-[68px] pb-24 min-h-screen">
      <div className="container py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-medium text-blue-500 tracking-widest uppercase mb-4">Our Work</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Systems built for<br />real businesses.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Every project here is a system, not just a website. Designed to bring in clients,
            manage operations, and grow with the business.
          </p>
        </motion.div>

        {/* Section 1 — Core Case Studies */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-1">Core Case Studies</h2>
              <p className="text-muted-foreground text-sm">Deep-dive breakdowns of our most complex builds</p>
            </div>
            <div className="flex items-center gap-2 border border-border rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('category')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'category' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'list' ? (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {caseStudies.map((cs, i) => (
                  <CaseStudyCard key={cs.slug} study={cs} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="category"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {categoryGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-lg font-semibold mb-5 text-muted-foreground border-b border-border pb-3">
                      {group.label}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {group.slugs.map((slug, i) => {
                        const cs = caseStudies.find(c => c.slug === slug);
                        if (!cs) return null;
                        return <CaseStudyCard key={slug} study={cs} index={i} compact />;
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section 2 — Selected Work */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-1">Selected Work</h2>
            <p className="text-muted-foreground text-sm">Additional projects that demonstrate range and depth</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedWork.map((work, i) => (
              <SelectedWorkCard key={work.name} work={work} index={i} />
            ))}
          </div>
        </div>

        {/* Section 3 — All Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-1">All Projects</h2>
            <p className="text-muted-foreground text-sm">Every platform and digital system built by ThickTek</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {miniProjects.map((project, i) => (
              <MiniProjectCard key={`${project.name}-${i}`} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to build your system?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
            Let us show you what your website could become — and what it's currently costing you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => { window.scrollTo(0, 0); navigate('/audit'); }} className="min-w-[200px]">
              Request a Website Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }} className="min-w-[200px]">
              Book a Strategy Call
            </Button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
