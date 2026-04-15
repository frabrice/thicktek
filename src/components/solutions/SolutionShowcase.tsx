import { motion } from 'framer-motion';
import { ArrowRight, Code as Code2, Cloud, Database, Shield, Smartphone, BarChart } from 'lucide-react';
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

const solutions = [
  { icon: Code2, label: 'Web & Mobile', color: 'text-blue-400' },
  { icon: Cloud, label: 'Cloud Solutions', color: 'text-emerald-400' },
  { icon: Database, label: 'Data Engineering', color: 'text-amber-400' },
  { icon: Shield, label: 'Cybersecurity', color: 'text-blue-400' },
  { icon: Smartphone, label: 'Infrastructure', color: 'text-emerald-400' },
  { icon: BarChart, label: 'Analytics', color: 'text-amber-400' },
];

export function SolutionShowcase() {
  const navigate = useNavigate();

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, hsl(213, 94%, 58%) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="label-mono">// Enterprise Solutions</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] sm:text-[3.25rem] leading-[1.05] mb-5 text-foreground font-display"
              style={{ letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Technology that<br />
              moves your business<br />
              <span className="text-primary">measurably forward.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
            >
              From custom platforms to cloud infrastructure — every solution we build
              is engineered around your specific business objectives, not off-the-shelf assumptions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 h-11 text-sm font-semibold group"
                onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground border border-border/70 hover:border-border px-7 h-11 text-sm"
                onClick={scrollToSolutions}
              >
                View Solutions
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((solution, i) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group rounded-xl border border-border/60 bg-card p-4 flex items-center gap-3 hover:border-primary/30 transition-colors duration-300 cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/80 transition-colors">
                      <Icon className={`w-3.5 h-3.5 ${solution.color}`} />
                    </div>
                    <span className="text-xs font-medium text-foreground/80">{solution.label}</span>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-3 rounded-xl border border-border/40 bg-secondary/30 p-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-muted-foreground/60 font-mono-code">Accepting new projects</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
