import { motion } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export function TimelineEvent({ year, title, description, index, isLast }: TimelineEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8"
    >
      {!isLast && (
        <div className="absolute left-[11px] top-[26px] bottom-0 w-px bg-primary/20" />
      )}
      <div className="absolute left-0 top-[6px] w-[23px] h-[23px]">
        <div className="w-full h-full rounded-full bg-primary/20" />
        <div className="absolute inset-[4px] rounded-full bg-primary" />
      </div>
      <div className="text-sm text-primary font-medium mb-2">{year}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}