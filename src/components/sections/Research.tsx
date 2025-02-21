import { useInView } from 'react-intersection-observer';
import { ResearchHighlights } from './Research/ResearchHighlights';
import { PublicationsList } from './Research/PublicationsList';
import { ResearchPartners } from './Research/ResearchPartners';

export default function Research() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="research" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Research & Innovation</h2>
          <p className="text-muted-foreground">
            Pushing the boundaries of technology through groundbreaking research
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          <ResearchHighlights inView={inView} />
          <PublicationsList inView={inView} />
          <ResearchPartners inView={inView} />
        </div>
      </div>
    </section>
  );
}