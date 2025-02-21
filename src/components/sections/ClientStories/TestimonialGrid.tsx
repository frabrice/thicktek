import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialGridProps {
  inView: boolean;
}

export function TestimonialGrid({ inView }: TestimonialGridProps) {
  const testimonials = [
    {
      quote: "Thick Technologies transformed our operations with their innovative solutions. The results exceeded our expectations.",
      author: "Sarah Chen",
      role: "CTO, Global Finance Corp",
      avatar: "SC",
    },
    {
      quote: "Their expertise in cloud architecture helped us scale efficiently while reducing costs significantly.",
      author: "Michael Roberts",
      role: "CEO, TechStart Innovation",
      avatar: "MR",
    },
    {
      quote: "The security framework they implemented gave us peace of mind and full compliance with regulations.",
      author: "Dr. Emily Watson",
      role: "Director, HealthCare Plus",
      avatar: "EW",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6">
            <blockquote className="text-lg mb-6">{testimonial.quote}</blockquote>
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}