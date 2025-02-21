import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Cloud, Database, Shield, Smartphone, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function SolutionShowcase() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const handleSchedule = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    { icon: Code2, label: 'Web & Mobile' },
    { icon: Cloud, label: 'Cloud Solutions' },
    { icon: Database, label: 'Data Engineering' },
    { icon: Shield, label: 'Cybersecurity' },
    { icon: Smartphone, label: 'Digital Infrastructure' },
    { icon: BarChart, label: 'Analytics Platform' },
  ];

  return (
    <section className="min-h-[90vh] relative flex items-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.3, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[100px] transform -translate-x-1/2"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/2 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Floating Solution Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const delay = index * 0.2;
          const duration = 3 + Math.random() * 2;
          const initialX = -20 + Math.random() * 40;
          const initialY = -20 + Math.random() * 40;

          return (
            <motion.div
              key={solution.label}
              initial={{ opacity: 0, x: initialX, y: initialY }}
              animate={{
                opacity: [0, 1, 0],
                x: [initialX, initialX + 40, initialX],
                y: [initialY, initialY - 40, initialY],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{
                left: `${15 + (index * 15)}%`,
                top: `${20 + (index * 10)}%`,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-xs">
                  {solution.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
            >
              <span className="text-sm font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 drop-shadow-sm">
                ENTERPRISE SOLUTIONS
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg"
            >
              Transform Your{' '}
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Business
              </span>{' '}
              With <br /> Next-Generation Technology
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-foreground mb-12 max-w-2xl mx-auto font-medium tracking-wide leading-relaxed drop-shadow-md"
            >
              From custom software development to cloud solutions, we deliver innovative 
              technology solutions that drive growth and efficiency.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={handleSchedule}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-primary-foreground/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="backdrop-blur-sm"
                onClick={scrollToSolutions}
              >
                View Solutions
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}