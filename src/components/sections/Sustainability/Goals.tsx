import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Target } from 'lucide-react';

interface GoalsProps {
  inView: boolean;
}

export function Goals({ inView }: GoalsProps) {
  const goals = [
    {
      year: 2025,
      goals: [
        'Carbon neutral operations',
        '100% renewable energy usage',
        'Zero e-waste to landfill',
      ],
    },
    {
      year: 2030,
      goals: [
        'Net-zero supply chain',
        'Circular technology ecosystem',
        'Water-positive operations',
      ],
    },
  ];

  return (
    <Card className="p-8">
      <div className="flex items-center mb-6">
        <Target className="w-6 h-6 text-primary mr-3" />
        <h3 className="text-xl font-semibold">Sustainability Goals</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {goals.map((period, periodIndex) => (
          <motion.div
            key={period.year}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: periodIndex * 0.2 }}
          >
            <div className="text-2xl font-bold mb-4">{period.year}</div>
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
                  <span>{goal}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}