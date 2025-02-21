import { Heart } from 'lucide-react';
import { ValueCard } from './Values/ValueCard';

export function Values() {
  const values = [
    {
      title: 'Innovation First',
      description: 'Pushing boundaries and embracing new possibilities',
      icon: 'Lightbulb',
    },
    {
      title: 'Client Success',
      description: 'Dedicated to delivering exceptional value',
      icon: 'Trophy',
    },
    {
      title: 'Sustainability',
      description: 'Building solutions for a better tomorrow',
      icon: 'Leaf',
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve greatness',
      icon: 'Users',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <Heart className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Our Values</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            What Drives Us Forward
          </h2>
          
          <p className="text-muted-foreground">
            Our core values shape everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}