import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { LeaderCard } from './Leadership/LeaderCard';

export function Leadership() {
  const leaders = [
    {
      name: 'Niyigena Fabrice',
      role: 'Founder & CEO',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Fabrice%20Eleviqra.jpeg',
      bio: 'Visionary leader driving innovation and excellence in technology solutions across Africa.',
      linkedin: 'https://www.linkedin.com/in/niyigena-fabrice-09a346181/',
    },
    {
      name: 'Rukundo Providence U.',
      role: 'Chief Operations Officer',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Provi%20Thick%20Tek.jpeg',
      bio: 'Strategic operations leader ensuring seamless delivery of innovative solutions.',
      linkedin: 'https://www.linkedin.com/in/providence-uwimana-rukundo-534236218/',
    },
    {
      name: 'Sandrine Ishimwe',
      role: 'Chief Innovation Officer',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Sando%20Thick%20Tek.jpeg',
      bio: 'Leading breakthrough research and innovation initiatives.',
      linkedin: 'https://www.linkedin.com/in/ishimwe-sandrine-44ab9512b/',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10"
          >
            <Users className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Leadership Team</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Meet Our Visionaries
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            Exceptional leaders driving innovation and excellence in African technology
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <LeaderCard key={leader.name} {...leader} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      </div>
    </section>
  );
}