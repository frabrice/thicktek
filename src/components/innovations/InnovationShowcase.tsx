import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export function InnovationShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <Lightbulb className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Innovation Hub</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building Tomorrow's Solutions
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Developing innovative solutions that address real challenges in the African market
          </p>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>
    </section>
  );
}