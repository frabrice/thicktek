import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function WebsiteArticle() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16">
      <article className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Article Header */}
            <header className="space-y-8">
              <Link 
                to="/" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Publications
              </Link>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  What Makes a Website Stand Out in a Competitive Market?
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    January 2024
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Mihigo Charmant
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    6 min read
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-4">
                  In today's digital world, a website is more than just an online presence—it's a powerful 
                  tool for engagement, conversion, and brand recognition. With millions of websites competing 
                  for attention, businesses must find ways to make their sites stand out.
                </p>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Strong Visual Design and Branding</h2>
                <p className="text-lg leading-relaxed">
                  First impressions matter, and a visually appealing website instantly captures attention. 
                  A unique and cohesive design, consistent color schemes, and high-quality visuals help 
                  establish brand identity.
                </p>
                <p className="text-lg leading-relaxed">
                  A well-structured layout with clear typography enhances readability and user experience, 
                  ensuring visitors stay engaged with your content.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">User-Friendly Navigation and Experience</h2>
                <p className="text-lg leading-relaxed">
                  A standout website prioritizes intuitive navigation. Users should be able to find 
                  information effortlessly, with clear menus, well-organized content, and fast-loading pages.
                </p>
                <p className="text-lg leading-relaxed">
                  Mobile responsiveness is also crucial, as an increasing number of users browse websites 
                  on smartphones and tablets. A seamless mobile experience is no longer optional but essential.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">High-Quality and Engaging Content</h2>
                <p className="text-lg leading-relaxed">
                  Content is king when it comes to making a website memorable. Informative, relevant, and 
                  engaging content keeps users interested and encourages return visits.
                </p>
                <p className="text-lg leading-relaxed">
                  Blog posts, videos, infographics, and interactive elements add value and boost engagement, 
                  transforming passive visitors into active participants in your digital experience.
                </p>
              </section>

              <div className="bg-secondary/50 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-6">Essential Website Elements</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Clear and intuitive navigation structure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Responsive design for all devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Fast loading speed and performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Engaging and valuable content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Clear calls-to-action (CTAs)</span>
                  </li>
                </ul>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6">Search Engine Optimization (SEO) Strategies</h2>
                <p className="text-lg leading-relaxed">
                  To stand out in a crowded market, a website must be easily discoverable. Implementing 
                  SEO best practices—such as keyword optimization, meta descriptions, alt text for images, 
                  and link building—helps improve search rankings and drive organic traffic.
                </p>
                <p className="text-lg leading-relaxed">
                  Regular content updates and technical optimization ensure your website maintains its 
                  visibility in search engine results pages.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Fast Load Speed and Performance</h2>
                <p className="text-lg leading-relaxed">
                  Website speed plays a crucial role in user retention. Slow-loading websites frustrate 
                  visitors and increase bounce rates. Optimizing images, using caching, and employing a 
                  reliable hosting service ensures smooth performance.
                </p>
                <p className="text-lg leading-relaxed">
                  Regular performance monitoring and optimization help maintain fast load times across all 
                  devices and network conditions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Trust and Credibility Elements</h2>
                <p className="text-lg leading-relaxed">
                  Building trust is essential for converting visitors into customers. Features like 
                  testimonials, case studies, security certificates, and transparent policies enhance 
                  credibility and reassure users that they are engaging with a reliable business.
                </p>
                <p className="text-lg leading-relaxed">
                  Social proof and trust indicators help establish authority and encourage user confidence 
                  in your brand.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed">
                  Standing out in a competitive market requires more than just having a website—it demands 
                  strategic planning, exceptional design, and continuous optimization.
                </p>
                <p className="text-lg leading-relaxed">
                  By focusing on user experience, content quality, performance, and credibility, businesses 
                  can create websites that not only attract visitors but also convert them into loyal customers. 
                  In today's digital landscape, a well-crafted website is an invaluable asset for business success.
                </p>
              </section>
            </div>

            {/* Article Footer */}
            <footer className="border-t pt-8">
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Publications
                </Link>
              </Button>
            </footer>
          </motion.div>
        </div>
      </article>
    </main>
  );
}