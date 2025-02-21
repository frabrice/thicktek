import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

interface StoryCarouselProps {
  inView: boolean;
}

export function StoryCarousel({ inView }: StoryCarouselProps) {
  const stories = [
    {
      client: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Legacy System Modernization',
      solution: 'Cloud-Native Platform',
      impact: '40% Cost Reduction',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60',
    },
    {
      client: 'TechStart Innovation',
      industry: 'Technology',
      challenge: 'Scalability Issues',
      solution: 'Microservices Architecture',
      impact: '300% Performance Boost',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60',
    },
    {
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Data Security',
      solution: 'Zero-Trust Framework',
      impact: '100% Compliance',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Carousel className="w-full">
        <CarouselContent>
          {stories.map((story) => (
            <CarouselItem key={story.client} className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={story.image}
                    alt={story.client}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.client}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{story.industry}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Challenge:</span>
                      <span className="text-sm ml-2">{story.challenge}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Solution:</span>
                      <span className="text-sm ml-2">{story.solution}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Impact:</span>
                      <span className="text-sm ml-2 text-primary">{story.impact}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}