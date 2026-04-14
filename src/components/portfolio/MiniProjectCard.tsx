import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MiniProject } from '@/data/caseStudies';

const categoryColors: Record<string, { dot: string; badge: string }> = {
  'Property & Hospitality': { dot: 'bg-amber-400', badge: 'text-amber-500 bg-amber-400/10 border-amber-400/20' },
  'NGO & Social Impact': { dot: 'bg-emerald-400', badge: 'text-emerald-500 bg-emerald-400/10 border-emerald-400/20' },
  'Social Enterprise': { dot: 'bg-teal-400', badge: 'text-teal-500 bg-teal-400/10 border-teal-400/20' },
  'Platforms & Digital Infrastructure': { dot: 'bg-blue-400', badge: 'text-blue-500 bg-blue-400/10 border-blue-400/20' },
  'Consultancy & Analytics': { dot: 'bg-sky-400', badge: 'text-sky-500 bg-sky-400/10 border-sky-400/20' },
  'Consultancy & Support': { dot: 'bg-cyan-400', badge: 'text-cyan-500 bg-cyan-400/10 border-cyan-400/20' },
};

const defaultColor = { dot: 'bg-slate-400', badge: 'text-slate-500 bg-slate-400/10 border-slate-400/20' };

interface Props {
  project: MiniProject;
  index: number;
}

export function MiniProjectCard({ project, index }: Props) {
  const colors = categoryColors[project.category] ?? defaultColor;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
      viewport={{ once: true }}
      className="group relative rounded-xl border border-border bg-card p-5 hover:border-border/60 hover:bg-secondary/30 transition-all duration-300 flex flex-col gap-3 h-full"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
          <h3 className="font-semibold text-sm leading-snug">{project.name}</h3>
        </div>
        {project.url && (
          <span className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:bg-secondary transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{project.description}</p>

      <span className={`self-start text-[10px] font-medium px-2 py-0.5 rounded-full border ${colors.badge}`}>
        {project.category}
      </span>
    </motion.div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}
