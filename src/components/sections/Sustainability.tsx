import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Sustainability() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const goals = [
    {
      year: 2027,
      goals: [
        'AI-powered sustainability monitoring',
        'Zero-carbon data centers',
        'Sustainable supply chain optimization',
        'Green energy adoption',
        'Waste reduction initiatives',
      ],
    },
    {
      year: 2035,
      goals: [
        'Climate positive operations',
        'Zero-waste technology lifecycle',
        'Regenerative business model',
        'Full circular economy integration',
        'Global sustainability leadership',
      ],
    },
  ];

  return (
    <section className="py-24 w-full bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Long Term Goals</h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {goals.map((period, periodIndex) => (
            <motion.div
              key={period.year}
              initial={{ opacity: 0, x: periodIndex === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: periodIndex === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: periodIndex * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-primary mr-3" />
                <div className="text-3xl font-bold">{period.year}</div>
              </div>
              <div className="space-y-4">
                {period.goals.map((goal, goalIndex) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: (periodIndex * 0.2) + (goalIndex * 0.1) }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                    <span className="text-lg">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}