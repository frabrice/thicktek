import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { LeaderCard } from './Leadership/LeaderCard';

export function Leadership() {
  const leader = {
    name: 'Niyigena Fabrice',
    role: 'Founder & CEO',
    image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Fabrice%20Eleviqra.jpeg',
    bio: 'Visionary leader driving innovation and excellence in technology solutions across Africa. With a passion for transformative technology and a deep understanding of African markets, Fabrice leads ThickTek\'s mission to empower businesses through innovative solutions. His leadership has been instrumental in establishing ThickTek as a leading force in African technology innovation, focusing on delivering cutting-edge solutions that address real-world challenges.',
    linkedin: 'https://www.linkedin.com/in/niyigena-frabrice-09a346181/',
    twitter: 'https://x.com/thicktek',
    achievements: [
      'Pioneer in African Tech Innovation',
      'Digital Transformation Expert',
      'Tech Community Leader'
    ]
  };

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
            <span className="text-sm font-medium">Leadership</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Our Visionary Leadership
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            Driving innovation and excellence in African technology
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <LeaderCard {...leader} index={0} />
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      </div>
    </section>
  );
}