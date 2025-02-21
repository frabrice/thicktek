import { motion } from 'framer-motion';
import { Microscope } from 'lucide-react';
import { LabCard } from './ResearchLabs/LabCard';

export function ResearchLabs() {
  const labs = [
    {
      name: 'Quantum Computing Lab',
      description: 'Exploring quantum algorithms and computing architectures',
      focus: ['Quantum Algorithms', 'Error Correction', 'Quantum-Classical Integration'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
    },
    {
      name: 'AI Research Center',
      description: 'Advancing artificial intelligence and machine learning',
      focus: ['Neural Networks', 'Natural Language', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60',
    },
    {
      name: 'Robotics Innovation Lab',
      description: 'Developing next-generation robotics and automation',
      focus: ['Autonomous Systems', 'Human-Robot Interaction', 'Soft Robotics'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <Microscope className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Research Labs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Where Innovation Takes Shape
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Our state-of-the-art research facilities pushing the boundaries of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab, index) => (
            <LabCard key={lab.name} {...lab} index={index} />
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>
    </section>
  );
}