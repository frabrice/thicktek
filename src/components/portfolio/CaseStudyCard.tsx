import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CaseStudy } from '@/data/caseStudies';

interface Props {
  study: CaseStudy;
  index: number;
  compact?: boolean;
}

export function CaseStudyCard({ study, index, compact }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/work/${study.slug}`);
  };

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={handleClick}
        className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:border-blue-500/50 transition-all duration-300"
      >
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={study.image}
            alt={study.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              {study.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{study.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{study.tagline}</p>
          <div className="mt-4 flex items-center text-sm text-blue-500 font-medium gap-1 group-hover:gap-2 transition-all">
            View case study <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      onClick={handleClick}
      className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-4 relative">
          <div className="aspect-[16/9] lg:h-56 lg:aspect-auto relative overflow-hidden">
            <img
              src={study.image}
              alt={study.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30 hidden lg:block" />
            <div className="absolute top-4 left-4">
              <span className="text-xs font-medium bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                {study.category}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">{study.year}</p>
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{study.name}</h3>
            </div>
          </div>
          <p className="text-muted-foreground mb-5 leading-relaxed">{study.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {study.tags.slice(0, 4).map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium">{tag}</span>
            ))}
          </div>
          <div className="flex items-center text-sm text-blue-500 font-medium gap-1 group-hover:gap-2 transition-all">
            Read case study <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
