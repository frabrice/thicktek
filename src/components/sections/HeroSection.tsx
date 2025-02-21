import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ParticleField } from '@/components/hero/ParticleField';
import { GradientBlur } from '@/components/hero/GradientBlur';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleSchedule = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  const handleLearnMore = () => {
    window.scrollTo(0, 0);
    navigate('/about');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10 backdrop-blur-sm"
          >
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Innovation Redefined</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Empowering Innovation, Shaping the Future
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-12"
          >
            Transforming industries through cutting-edge solutions and innovative technologies.
            We're not just adapting to the future—we're creating it.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group relative overflow-hidden" onClick={handleSchedule}>
              <span className="relative z-10">Build With Us</span>
              <motion.div
                className="absolute inset-0 bg-primary-foreground/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm" onClick={handleLearnMore}>
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <ParticleField />
      <GradientBlur />
      
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>
    </section>
  );
}