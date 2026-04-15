import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    href: '/articles/property-tech',
    category: 'PropTech',
    title: 'How Property Tech is Reshaping Real Estate in Africa',
    excerpt: 'Digital platforms and smart systems are disrupting a historically fragmented market — and the opportunity is enormous for businesses that move early.',
    author: 'Jean Luc H.',
    readTime: '6 min',
    date: 'March 2024',
  },
  {
    href: '/articles/data-driven',
    category: 'Analytics',
    title: 'Data-Driven Decision Making: Why Every Business Needs Smart Analytics',
    excerpt: 'Companies that make decisions based on real data consistently outperform those that operate on instinct.',
    author: 'Jean Luc H.',
    readTime: '7 min',
    date: 'February 2024',
  },
  {
    href: '/articles/website-design',
    category: 'Strategy',
    title: 'What Makes a Website Stand Out in a Competitive Market?',
    excerpt: 'Most websites fail not because they look bad — but because they are built without a clear job to do.',
    author: 'Mihigo Charmant',
    readTime: '6 min',
    date: 'January 2024',
  },
  {
    href: '/articles/custom-software',
    category: 'Engineering',
    title: 'How Custom Software is Changing the Way Companies Operate',
    excerpt: 'Off-the-shelf tools create operational ceilings. Custom systems remove them.',
    author: 'Minega Elton',
    readTime: '8 min',
    date: 'December 2023',
  },
  {
    href: '/articles/mobile-apps',
    category: 'Mobile',
    title: 'The Power of Mobile Apps in Business Growth',
    excerpt: 'For many businesses in Africa, mobile is not a secondary channel — it is the primary one.',
    author: 'Mihigo Charmant',
    readTime: '7 min',
    date: 'October 2023',
  },
];

const categoryColors: Record<string, string> = {
  PropTech: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Analytics: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Strategy: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Engineering: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  Mobile: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
};

export default function Insights() {
  const navigate = useNavigate();

  const [featured, ...rest] = articles;

  return (
    <section className="py-16 border-t border-border/40">
      <div className="container max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 font-mono">// Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Thinking on technology,<br />strategy, and growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => { window.scrollTo(0, 0); navigate(featured.href); }}
            className="lg:col-span-7 group cursor-pointer rounded-lg border border-border/60 bg-card hover:border-primary/20 transition-colors duration-200 overflow-hidden"
          >
            <div className="p-6 h-full flex flex-col">
              <span className={`inline-flex self-start px-2.5 py-0.5 rounded-full text-xs font-semibold border mb-5 ${categoryColors[featured.category]}`}>
                {featured.category}
              </span>
              <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3 h-3" />
                    {featured.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {featured.readTime} read
                  </span>
                </div>
                <div className="flex items-center text-xs text-primary font-medium gap-1 group-hover:gap-1.5 transition-all">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            {rest.map((article, i) => (
              <motion.div
                key={article.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                viewport={{ once: true }}
                onClick={() => { window.scrollTo(0, 0); navigate(article.href); }}
                className="group cursor-pointer rounded-lg border border-border/60 bg-card hover:border-primary/20 transition-colors duration-200 p-4 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`inline-flex self-start px-2 py-0.5 rounded-full text-xs font-semibold border ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground/50 shrink-0">{article.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                  <div className="flex items-center text-xs text-primary/70 font-medium gap-1 group-hover:gap-1.5 group-hover:text-primary transition-all">
                    Read <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
