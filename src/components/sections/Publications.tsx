import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Publications() {
  const publications = [
    {
      title: 'The Role of Smart Technology in Modern Property and Asset Management',
      author: 'Mihigo Charmant',
      date: 'March 2024',
      link: '/articles/property-tech',
    },
    {
      title: 'Data-Driven Decision Making: Why Every Business Needs Smart Analytics',
      author: 'Jean Luc H.',
      date: 'February 2024',
      link: '/articles/data-driven',
    },
    {
      title: 'What Makes a Website Stand Out in a Competitive Market?',
      author: 'Mihigo Charmant',
      date: 'January 2024',
      link: '/articles/website-design',
    },
    {
      title: 'How Custom Software is Changing the Way Companies Operate',
      author: 'Minega Elton',
      date: 'December 2023',
      link: '/articles/custom-software',
    },
    {
      title: 'The Power of Mobile Apps in Business Growth',
      author: 'Mihigo Charmant',
      date: 'October 2023',
      link: '/articles/mobile-apps',
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold">Our Latest Publications</h2>
        </div>
        <Card className="p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={pub.link} className="block">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pub.date} by {pub.author}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
                {index < publications.length - 1 && (
                  <div className="h-px bg-border mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}