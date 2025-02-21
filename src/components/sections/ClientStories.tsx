import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Car, Wallet, Users, MessageSquare, TrendingUp, Clock, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ClientStories() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      client: 'EmodoCar',
      industry: 'Transport & Travel',
      image: 'https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Emodocar%20Feeatured%20Graphivc.png',
      quote: "Revolutionizing car rental services with a seamless mobile app solution that connects rental companies with their clients.",
      author: "Paul-Olivier R.",
      role: "CEO",
      metrics: [
        { label: 'Rental Efficiency', value: '85%' },
        { label: 'User Satisfaction', value: '92%' },
        { label: 'Processing Time', value: '-65%' },
      ],
      icon: Car,
      url: 'https://emodocar.com/',
    },
    {
      client: 'Shora Space',
      industry: 'FinTech',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=60',
      quote: "Empowering SMEs and startups through innovative crowdfunding solutions, bridging the gap between investors and opportunities.",
      author: "Camara Maurice",
      role: "CEO",
      metrics: [
        { label: 'Funds Raised', value: '$2M+' },
        { label: 'SMEs Supported', value: '150+' },
        { label: 'Investor ROI', value: '25%' },
      ],
      icon: Wallet,
      url: 'https://shoraspace.com/',
    },
    {
      client: 'Hire Me Afrika',
      industry: 'HR Platform',
      image: 'https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Hire%20Me%20Africa%20Thick%20Tek.jpeg',
      quote: "Creating opportunities by connecting African talent with global employers through our innovative HR platform.",
      author: "Terhas Legesse",
      role: "CEO",
      metrics: [
        { label: 'Talent Placed', value: '500+' },
        { label: 'Success Rate', value: '78%' },
        { label: 'Time-to-Hire', value: '-40%' },
      ],
      icon: Users,
      url: 'https://hiremeafrika.com/',
    },
  ];

  const metrics = [
    {
      icon: MessageSquare,
      value: '98%',
      label: 'Client Satisfaction',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: TrendingUp,
      value: '45%',
      label: 'Average ROI',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Coverage',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real transformations, measurable results, and lasting partnerships
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="space-y-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={story.client}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-2 relative group">
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                        <img
                          src={story.image}
                          alt={story.client}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
                        <a
                          href={story.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-primary hover:text-primary/80 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors group/link"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                        </a>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-background/80 p-2 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-6">
                      <div className="h-full flex flex-col">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold">{story.client}</h3>
                              <p className="text-sm text-primary">{story.industry}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">{story.author}</div>
                              <div className="text-xs text-muted-foreground">{story.role}</div>
                            </div>
                          </div>
                          <blockquote className="text-sm text-muted-foreground italic">
                            "{story.quote}"
                          </blockquote>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="grid grid-cols-3 gap-3">
                            {story.metrics.map((metric) => (
                              <div
                                key={metric.label}
                                className="p-2 rounded-lg bg-primary/5 text-center"
                              >
                                <div className="text-lg font-bold text-primary">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <Card className="p-8 overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Impact by Numbers</h3>
                  <p className="text-sm text-muted-foreground">
                    Measurable results that speak for themselves
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <motion.div
                        key={metric.label}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} rounded-lg`} />
                        <div className="relative p-4 text-center">
                          <div className="inline-flex items-center justify-center p-2 rounded-full bg-background/60 backdrop-blur-sm mb-3">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="text-2xl font-bold mb-1">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
    </section>
  );
}