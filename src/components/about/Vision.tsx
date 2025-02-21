import { motion } from 'framer-motion';
import { Rocket, Target, Lightbulb, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function Vision() {
  const navigate = useNavigate();

  const handleSchedule = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  const stats = [
    { label: 'Founded', value: '2022' },
    { label: 'Team Members', value: '20+' },
    { label: 'Countries', value: '5+' },
    { label: 'Projects', value: '30+' },
  ];

  return (
    <section className="min-h-[90vh] relative flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 0.3, 0.5], 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[100px] transform -translate-x-1/2"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3], 
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/2 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* About Us Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20"
            >
              <Rocket className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                ABOUT US
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
              Pioneering{' '}
              <div className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Tomorrow's
                </span>
                <motion.div
                  className="absolute -inset-1 bg-primary/20 blur-lg"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <br />Technology
            </h1>
            
            <div className="text-base text-muted-foreground space-y-6 leading-relaxed">
              <p>
                At ThickTek, we are more than just a technology company. We are innovators, 
                problem-solvers, and visionaries dedicated to transforming businesses through 
                cutting-edge technology solutions.
              </p>
              <p>
                Founded in 2022 in the heart of Africa, we've grown from a small team of 
                passionate technologists to a global force in digital innovation. Our journey 
                is marked by continuous learning, relentless innovation, and an unwavering 
                commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" onClick={handleSchedule} className="group">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-lg group-hover:opacity-100 opacity-0 transition-opacity" />
                  <div className="relative p-4 rounded-lg border border-primary/10 bg-background/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4 pt-16 lg:pt-24"
          >
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20" />
              <div className="relative p-6">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-blue-500/10 mr-3 group-hover:scale-110 transition-transform">
                      <Target className="w-4 h-4 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">Our Mission</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    To empower businesses through innovative technology solutions, fostering 
                    digital transformation and sustainable growth while showcasing African 
                    excellence in the global tech landscape.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20" />
              <div className="relative p-6">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-emerald-500/10 mr-3 group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">Our Vision</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    To be the leading force in technological innovation from Africa, 
                    creating solutions that drive global progress and positively impact 
                    communities worldwide.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
    </section>
  );
}