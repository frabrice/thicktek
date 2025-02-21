import { JobCard } from './JobCard';

export function OpenPositions() {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
    {
      title: 'Cloud Architect',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Boston, MA',
      type: 'Full-time',
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground">
            Join our mission to transform industries through innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <JobCard key={position.title} {...position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}