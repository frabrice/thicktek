import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  const projects = [
    {
      name: 'Grit Africa Analytics',
      description: 'A consultancy firm delivering impactful research, strategic planning, and sustainable development insights across Africa.',
      url: 'https://gritafricaanalytics.com',
      category: 'Analytics & Research',
      year: '2024',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Grit%20Africa%20Analytics.PNG',
      tags: ['Research', 'Strategy', 'Development'],
    },
    {
      name: 'Wito Support',
      description: 'A global customer support outsourcing company delivering tailored solutions.',
      url: 'https://witosupport.com',
      category: 'Customer Support',
      year: '2024',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Wito%20Support.PNG',
      tags: ['Customer Support', 'Outsourcing', 'Global'],
    },
    {
      name: 'Hello Fraser Valley',
      description: 'A local Canadian platform connecting residents and newcomers with community events, businesses, and helpful services.',
      url: 'https://hellofraservalley.com',
      category: 'Community Platform',
      year: '2024',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Hello%20Fraser%20Valley.PNG',
      tags: ['Community', 'Local', 'Canada'],
    },
    {
      name: 'Travel2Rwanda',
      description: 'A tourism platform offering educational and cultural experiences across Rwanda.',
      url: 'https://travel2rwanda.com',
      category: 'Tourism & Travel',
      year: '2024',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Travel%202%20Rwamda.jpg',
      tags: ['Tourism', 'Education', 'Culture'],
    },
    {
      name: 'Umurimo',
      description: 'A job listing platform connecting employers with Rwandan talent.',
      url: 'https://umurimo.rw',
      category: 'Employment',
      year: '2024',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Umurimo.PNG',
      tags: ['Jobs', 'Recruitment', 'Rwanda'],
    },
    {
      name: 'ShoraSpace',
      description: 'A crowdfunding platform linking African SMEs and startups with global investors.',
      url: 'https://shoraspace.com',
      category: 'FinTech',
      year: '2024',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Shoraspace.PNG',
      tags: ['Crowdfunding', 'Investment', 'SMEs'],
    },
    {
      name: 'Dajah Group',
      description: 'A professional service firm delivering business solutions across Rwanda.',
      url: 'https://dajahgroup.com',
      category: 'Business Services',
      year: '2024',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Dajah%20Group.PNG',
      tags: ['Consulting', 'Business', 'Professional'],
    },
    {
      name: 'Idembe Heritage',
      description: 'A cultural organization preserving and celebrating African heritage.',
      url: 'https://idembeheritage.com',
      category: 'Culture & Heritage',
      year: '2023',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Idembe%20Heritage.jpg',
      tags: ['Culture', 'Heritage', 'Africa'],
    },
    {
      name: 'Thick Tek Solutions',
      description: 'A multi-product tech company creating impactful software across Africa.',
      url: 'https://thicktek.com',
      category: 'Technology',
      year: '2023',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/thick%20tek.PNG',
      tags: ['Software', 'Technology', 'Africa'],
    },
    {
      name: 'Widen Nature',
      description: 'A green-focused initiative promoting conservation and environmental innovation.',
      url: 'https://widennature.com',
      category: 'Environment',
      year: '2023',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Widen%20Nature.PNG',
      tags: ['Environment', 'Conservation', 'Green'],
    },
    {
      name: 'Ingoga Place',
      description: 'A guesthouse and restaurant offering modern accommodations in Kigali.',
      url: 'https://ingogaplace.com',
      category: 'Hospitality',
      year: '2023',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Ingoga%20Place.PNG',
      tags: ['Hospitality', 'Restaurant', 'Kigali'],
    },
    {
      name: 'EmodoCar',
      description: 'A car rental app connecting clients with car rental companies in Rwanda.',
      url: 'https://emodocar.com',
      category: 'Transport & Travel',
      year: '2023',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Emodocar%20Feeatured%20Graphivc.png',
      tags: ['Car Rental', 'Mobile App', 'Transport'],
    },
    {
      name: 'FairyScape Apartments',
      description: 'Fully furnished apartments for rent with modern amenities in Kimihurura, Kigali.',
      url: 'https://fairyscapeapartments.com',
      category: 'Real Estate',
      year: '2023',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Fairyscape%20Apartments.PNG',
      tags: ['Real Estate', 'Apartments', 'Rental'],
    },
    {
      name: 'Insightium',
      description: 'A content creation company inspiring smart, creative youth through media.',
      url: 'https://theinsightium.com',
      category: 'Media & Content',
      year: '2022',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/the%20insightium.PNG',
      tags: ['Content', 'Media', 'Youth'],
    },
    {
      name: 'Eleviqra',
      description: 'A global consultancy by three freelancers offering IT, marketing, and systems solutions.',
      url: 'https://eleviqra.com',
      category: 'Consultancy',
      year: '2022',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Eleviqra.PNG',
      tags: ['IT', 'Marketing', 'Consulting'],
    },
    {
      name: 'Hire Me Africa',
      description: 'A platform connecting vetted African talents with employers worldwide.',
      url: 'https://hireme.africa',
      category: 'Employment',
      year: '2022',
      image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Hire%20Me%20Afrika.PNG',
      tags: ['Employment', 'Africa', 'Global'],
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Projects List */}
        <div className="max-w-6xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-4 relative">
                    <div className="aspect-[16/9] lg:aspect-[3/2] lg:h-48 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent lg:from-transparent lg:via-background/20 lg:to-background/80" />
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 p-4 lg:p-6 flex flex-col justify-center">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-1">
                        <Button
                          asChild
                          size="sm"
                          className="group/btn text-xs"
                        >
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Project
                            <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-primary/5">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative solutions 
              that make a real impact.
            </p>
            <Button size="lg" asChild>
              <a href="/schedule">
                Schedule a Consultation
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
