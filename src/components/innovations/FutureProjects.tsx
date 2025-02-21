import { Rocket } from 'lucide-react';
import { ProjectCard } from './FutureProjects/ProjectCard';

export function FutureProjects() {
  const projects = [
    {
      title: 'Project Nexus',
      category: 'Quantum Computing',
      timeline: '2024-2026',
      description: 'Next-generation quantum computing platform for enterprise applications',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
      goals: [
        'Scalable quantum processors',
        'Error correction systems',
        'Hybrid quantum-classical algorithms',
      ],
    },
    {
      title: 'Project Aurora',
      category: 'AI & Robotics',
      timeline: '2024-2025',
      description: 'Advanced autonomous systems with human-like decision making',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60',
      goals: [
        'Neural architecture optimization',
        'Real-time learning systems',
        'Ethical AI frameworks',
      ],
    },
    {
      title: 'Project Genesis',
      category: 'Biotechnology',
      timeline: '2024-2027',
      description: 'Revolutionary bio-computing platform using DNA-based storage',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60',
      goals: [
        'DNA data storage',
        'Molecular computing',
        'Bio-electronic interfaces',
      ],
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <Rocket className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Future Projects</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            Shaping Tomorrow's World
          </h2>
          
          <p className="text-muted-foreground">
            Groundbreaking initiatives that will define the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}