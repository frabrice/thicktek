import { Sparkles } from 'lucide-react';
import { TechCard } from './EmergingTech/TechCard';

export function EmergingTech() {
  const technologies = [
    {
      name: 'Neural Interfaces',
      status: 'Development',
      progress: 75,
      description: 'Direct brain-computer communication systems',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
    },
    {
      name: 'Quantum Networks',
      status: 'Research',
      progress: 45,
      description: 'Quantum-secured communication infrastructure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
    },
    {
      name: 'Biocomputing',
      status: 'Prototype',
      progress: 60,
      description: 'DNA-based computational systems',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Emerging Technologies</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            Tomorrow's Technology Today
          </h2>
          
          <p className="text-muted-foreground">
            Cutting-edge innovations shaping the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}