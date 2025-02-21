import { Heart, Users, Lightbulb, Globe } from 'lucide-react';
import { CultureCard } from './CultureCard';

export function WorkCulture() {
  const values = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to help you thrive both personally and professionally.',
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'A diverse, equitable, and inclusive workplace where every voice matters.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Freedom to experiment, learn, and create groundbreaking solutions.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a real difference across the world.',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
          <p className="text-muted-foreground">
            Experience a workplace that values creativity, growth, and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <CultureCard key={value.title} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}