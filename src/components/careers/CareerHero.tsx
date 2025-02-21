import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export function CareerHero() {
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
            <Users className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grow With Us
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Join a team of innovators dedicated to transforming Africa's technology landscape.
            While we're not actively hiring, we're always looking to connect with exceptional talent.
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