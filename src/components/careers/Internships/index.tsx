import { InternshipCard } from './InternshipCard';

export function Internships() {
  const internships = [
    {
      title: 'AI Research Intern',
      department: 'Research & Development',
      duration: '12 weeks (Summer 2024)',
      location: 'San Francisco, CA',
    },
    {
      title: 'Software Engineering Intern',
      department: 'Engineering',
      duration: '12 weeks (Summer 2024)',
      location: 'Remote',
    },
    {
      title: 'Product Design Intern',
      department: 'Design',
      duration: '12 weeks (Summer 2024)',
      location: 'New York, NY',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Internship Program</h2>
          <p className="text-muted-foreground">
            Launch your career with hands-on experience and mentorship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard key={internship.title} {...internship} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}