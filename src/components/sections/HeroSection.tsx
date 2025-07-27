import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto py-8 sm:py-12 lg:py-16 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center px-2.5 py-1 rounded-full border border-blue-400/40 bg-blue-400/10 backdrop-blur-sm">
                <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">
                  INTRODUCING
                </span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Thick<span className="text-blue-400">Tek</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Transforming industries through cutting-edge solutions and innovative technologies. 
              We're not just adapting to the future—we're creating it.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white border-0 px-6 sm:px-8 py-3 rounded-lg group transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                  onClick={handleSchedule}
                >
                  Build With Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-300 hover:text-white hover:border-white bg-transparent px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-800 w-full sm:w-auto text-sm sm:text-base"
                  onClick={handleLearnMore}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-4"
            >
              <a href="https://www.linkedin.com/in/niyigena-frabrice-09a346181/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/thicktek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/thicktek?igsh=Zm1pc2NpNjlsMWRw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - AI Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Main AI Head Visualization */}
            <div className="relative w-64 sm:w-80 h-64 sm:h-80">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Main Circle */}
              <div className="absolute inset-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full border border-blue-400/40 backdrop-blur-sm">
                {/* Inner Circles */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-300/15 to-blue-500/15 rounded-full border border-blue-300/25">
                  <div className="absolute inset-6 bg-gradient-to-br from-blue-200/15 to-blue-400/15 rounded-full border border-blue-200/25">
                    {/* Center Core */}
                    <div className="absolute inset-8 bg-blue-400/30 rounded-full flex items-center justify-center">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full"
                  style={{
                    top: `${20 + Math.sin(i * 45 * Math.PI / 180) * (window.innerWidth < 640 ? 90 : 120)}px`,
                    left: `${20 + Math.cos(i * 45 * Math.PI / 180) * (window.innerWidth < 640 ? 90 : 120)}px`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1="160"
                    y1="160"
                    x2={160 + Math.cos(i * 60 * Math.PI / 180) * 100}
                    y2={160 + Math.sin(i * 60 * Math.PI / 180) * 100}
                    stroke="rgba(59, 130, 246, 0.4)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-16 sm:top-20 right-16 sm:right-20"
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full opacity-80" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}