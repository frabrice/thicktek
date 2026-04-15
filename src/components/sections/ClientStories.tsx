import { motion } from 'framer-motion';
import { Car, Users, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stories = [
  {
    client: 'EmodoCar',
    industry: 'Transport & Travel',
    image: 'https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Emodocar%20Feeatured%20Graphivc.png',
    quote: 'Revolutionizing car rental services with a seamless mobile app that connects rental companies with their clients.',
    author: 'Paul-Olivier R.',
    role: 'CEO',
    metrics: [
      { label: 'Rental Efficiency', value: '85%' },
      { label: 'User Satisfaction', value: '92%' },
      { label: 'Processing Time', value: '-65%' },
    ],
    icon: Car,
    url: 'https://emodocar.com/',
    accent: 'blue',
  },
  {
    client: 'Hire Me Afrika',
    industry: 'HR Platform',
    image: 'https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Hire%20Me%20Africa%20Thick%20Tek.jpeg',
    quote: 'Connecting African talent with global employers through an innovative HR platform built to scale across the continent.',
    author: 'Terhas Legesse',
    role: 'CEO',
    metrics: [
      { label: 'Talent Placed', value: '500+' },
      { label: 'Success Rate', value: '78%' },
      { label: 'Time-to-Hire', value: '-40%' },
    ],
    icon: Users,
    url: 'https://hiremeafrika.com/',
    accent: 'emerald',
  },
];

const accentMap: Record<string, { border: string; tag: string; metric: string }> = {
  blue: {
    border: 'border-blue-500/15 hover:border-blue-500/25',
    tag: 'text-blue-400',
    metric: 'text-blue-400',
  },
  emerald: {
    border: 'border-emerald-500/15 hover:border-emerald-500/25',
    tag: 'text-emerald-400',
    metric: 'text-emerald-400',
  },
};

export default function ClientStories() {
  const navigate = useNavigate();

  return (
    <section className="py-10 border-t border-border/40">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="label-mono mb-4">// Client Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
            Real systems.<br />Measurable results.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
            A sample of what we have shipped — from first commit to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {stories.map((story, i) => {
            const c = accentMap[story.accent];
            return (
              <motion.div
                key={story.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg border ${c.border} bg-card overflow-hidden transition-colors duration-200 group`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm border border-border/60 px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Live
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{story.client}</h3>
                      <p className={`text-xs ${c.tag} mt-0.5`}>{story.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-foreground/80">{story.author}</div>
                      <div className="text-xs text-muted-foreground">{story.role}</div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 italic">
                    "{story.quote}"
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/40">
                    {story.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className={`text-sm font-bold ${c.metric}`}>{m.value}</div>
                        <div className="text-xs text-muted-foreground/60 leading-tight mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => { window.scrollTo(0, 0); navigate('/case-studies'); }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all case studies
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
