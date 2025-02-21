import { History } from 'lucide-react';
import { TimelineEvent } from './Timeline/TimelineEvent';

export function Timeline() {
  const events = [
    {
      id: 'founding',
      year: '2022',
      title: 'ThickTek Founded',
      description: 'Started with a vision to transform technology in Africa',
    },
    {
      id: 'emodocar',
      year: '2023',
      title: 'First Major Project',
      description: 'Successfully launched EmodoCar, revolutionizing car rental services in Rwanda',
    },
    {
      id: 'office-launch',
      year: '2023',
      title: 'Headquarters Established',
      description: 'Opened our state-of-the-art office in Kigali Innovation City',
    },
    {
      id: 'team-growth',
      year: '2024',
      title: 'Team Expansion',
      description: 'Grew to a team of 20+ talented professionals across engineering and innovation',
    },
    {
      id: 'partnerships',
      year: '2024',
      title: 'Strategic Partnerships',
      description: 'Formed key partnerships with leading technology companies and startups in East Africa',
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <History className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Our Journey</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            Milestones That Define Us
          </h2>
          
          <p className="text-muted-foreground">
            A journey of innovation and growth
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {events.map((event, index) => (
            <TimelineEvent 
              key={event.id} 
              {...event} 
              index={index} 
              isLast={index === events.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}