import { Heart, Leaf, GraduationCap, Plane } from 'lucide-react';
import { BenefitCard } from './BenefitCard';

export function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family.',
    },
    {
      icon: Leaf,
      title: 'Time Off',
      description: 'Generous PTO, paid holidays, and flexible work arrangements.',
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget and learning resources.',
    },
    {
      icon: Plane,
      title: 'Travel & Events',
      description: 'Team retreats and opportunities to work from global offices.',
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
          <p className="text-muted-foreground">
            We take care of our team with comprehensive benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}