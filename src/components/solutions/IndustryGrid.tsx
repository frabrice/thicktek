import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Building2, Activity, HomeIcon, Building, Briefcase, GraduationCap } from 'lucide-react';

export function IndustryGrid() {
  const industries = [
    {
      icon: Building2,
      title: 'Government',
      description: 'Modernizing public services with secure, scalable solutions',
      features: ['Digital Transformation', 'Citizen Services', 'Smart City Solutions'],
    },
    {
      icon: Activity,
      title: 'Healthcare',
      description: 'Advancing patient care through innovative technology',
      features: ['Telemedicine', 'Health Records', 'AI Diagnostics'],
    },
    {
      icon: HomeIcon,
      title: 'Real Estate',
      description: 'Transforming property management and development',
      features: ['Smart Buildings', 'Property Tech', 'Digital Twin'],
    },
    {
      icon: Building,
      title: 'Financial Services',
      description: 'Secure and innovative fintech solutions',
      features: ['Digital Banking', 'Blockchain', 'Risk Management'],
    },
    {
      icon: Briefcase,
      title: 'Enterprise',
      description: 'Empowering businesses with digital solutions',
      features: ['Cloud Migration', 'Data Analytics', 'Process Automation'],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Revolutionizing learning through technology',
      features: ['E-Learning', 'Student Analytics', 'Virtual Campus'],
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground">
            Tailored solutions for diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="relative p-6 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}