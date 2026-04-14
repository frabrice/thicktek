import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SelectedWork } from '@/data/caseStudies';

interface Props {
  work: SelectedWork;
  index: number;
}

export function SelectedWorkCard({ work, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-xl border border-border bg-card overflow-hidden hover:border-border/80 transition-all duration-300"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={work.image}
          alt={work.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-xs text-white/80 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
            {work.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-base">{work.name}</h3>
          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-muted-foreground hover:text-foreground transition-colors ml-2 mt-0.5 flex-shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{work.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {work.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded bg-secondary text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
