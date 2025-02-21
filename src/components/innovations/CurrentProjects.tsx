import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function CurrentProjects() {
  const projects = [
    {
      title: 'EmodoCar Platform',
      description: 'A comprehensive car rental management system revolutionizing the automotive rental industry in Rwanda.',
      image: 'https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Emodocar%20Feeatured%20Graphivc.png',
      status: 'Live',
      impact: 'Streamlining car rental operations across Rwanda',
    },
    {
      title: 'Hire Me Afrika',
      description: 'Digital platform connecting African talent with global employment opportunities.',
      image: 'https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Hire%20Me%20Africa%20Thick%20Tek.jpeg',
      status: 'Development',
      impact: 'Expanding job opportunities for African professionals',
    },
    {
      title: 'Digital Payment Solutions',
      description: 'Integrated payment systems for seamless financial transactions in East Africa.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60',
      status: 'Planning',
      impact: 'Simplifying digital payments for local businesses',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Current Projects</h2>
          <p className="text-muted-foreground">
            Innovative solutions we're currently developing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group cursor-pointer h-full">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center text-primary text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}