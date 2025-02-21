import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Cloud, Database, Shield, Smartphone, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SolutionGrid() {
  const navigate = useNavigate();

  const handleSchedule = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  const solutions = [
    {
      icon: Code2,
      title: "Web & Mobile Development",
      description: "Custom web and mobile applications built with modern technologies and best practices.",
      features: [
        "Progressive Web Apps",
        "Native Mobile Apps",
        "Cross-platform Solutions",
        "UI/UX Design",
      ],
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure designed for your business needs.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Serverless Architecture",
        "DevOps Implementation",
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transform raw data into actionable insights with our data engineering solutions.",
      features: [
        "Data Warehousing",
        "ETL Pipelines",
        "Real-time Analytics",
        "Data Visualization",
      ],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Security Training",
      ],
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      icon: Smartphone,
      title: "Digital Infrastructure",
      description: "Build robust digital foundations for your organization's growth.",
      features: [
        "Network Architecture",
        "System Integration",
        "API Development",
        "Microservices",
      ],
      gradient: "from-pink-500/20 to-purple-500/20",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Make data-driven decisions with our advanced analytics solutions.",
      features: [
        "Business Intelligence",
        "Predictive Analytics",
        "Machine Learning",
        "Custom Dashboards",
      ],
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section id="solutions" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
          <p className="text-muted-foreground">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient}`} />
                  <div className="relative p-6 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
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

        <div className="text-center">
          <Button size="lg" onClick={handleSchedule} className="group">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}