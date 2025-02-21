import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function ContactHero() {
  const navigate = useNavigate();

  const handleSchedule = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

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
            <MessageSquare className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start a Conversation
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Have a question or want to explore how we can help transform your business?
            We're here to help.
          </p>

          <Button size="lg" onClick={handleSchedule} className="group">
            Schedule a Meeting
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>
    </section>
  );
}