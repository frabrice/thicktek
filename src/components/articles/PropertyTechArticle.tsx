import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function PropertyTechArticle() {
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
                  The Role of Smart Technology in Modern Property and Asset Management
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    March 2024
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Mihigo Charmant
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    8 min read
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-4">
                  In a world where technology continues to reshape industries, property and asset 
                  management have not been left behind. The integration of smart technology has 
                  revolutionized the way property owners, real estate managers, and investors 
                  oversee their assets.
                </p>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Automation for Efficiency and Cost Reduction</h2>
                <p className="text-lg leading-relaxed">
                  Traditional property management often involved time-consuming, manual processes. Today, 
                  smart technology streamlines these operations, reducing costs and enhancing efficiency. 
                  Automated building management systems (BMS) enable property managers to control heating, 
                  ventilation, air conditioning (HVAC), lighting, and other essential functions remotely.
                </p>
                <p className="text-lg leading-relaxed">
                  Smart scheduling for maintenance and inspections also ensures timely upkeep, preventing 
                  costly repairs and improving tenant satisfaction.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Data-Driven Decision Making</h2>
                <p className="text-lg leading-relaxed">
                  The rise of the Internet of Things (IoT) has enabled real-time data collection, providing 
                  property managers with valuable insights. Sensors embedded in buildings monitor occupancy 
                  rates, energy consumption, and structural integrity.
                </p>
                <p className="text-lg leading-relaxed">
                  This data helps managers make informed decisions about space utilization, cost optimization, 
                  and predictive maintenance. By analyzing trends, managers can identify patterns and take 
                  proactive measures to enhance asset performance.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Enhanced Security and Access Control</h2>
                <p className="text-lg leading-relaxed">
                  Smart security systems have transformed how property owners safeguard their investments. 
                  Traditional locks and keys are being replaced by biometric access control, facial recognition, 
                  and mobile-based authentication.
                </p>
                <p className="text-lg leading-relaxed">
                  Surveillance systems powered by AI detect suspicious activities, alerting security personnel 
                  in real time. This not only improves security but also reduces the risks associated with 
                  unauthorized access and property damage.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Sustainable and Energy-Efficient Management</h2>
                <p className="text-lg leading-relaxed">
                  As sustainability becomes a priority, smart technology plays a crucial role in energy-efficient 
                  property management. Smart thermostats, automated lighting, and solar energy monitoring systems 
                  optimize energy consumption, reducing carbon footprints.
                </p>
                <p className="text-lg leading-relaxed">
                  Green buildings equipped with IoT sensors adjust energy use based on occupancy, ensuring that 
                  no power is wasted. This not only benefits the environment but also lowers operational costs 
                  for property owners.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Improved Tenant Experience and Smart Living</h2>
                <p className="text-lg leading-relaxed">
                  For residential and commercial properties, tenant satisfaction is a top priority. Smart home 
                  technologies, such as voice-activated assistants, remote-controlled appliances, and app-based 
                  property services, enhance the living experience.
                </p>
                <p className="text-lg leading-relaxed">
                  Tenants can request maintenance, control utilities, and access community amenities through 
                  their smartphones. Smart leasing platforms also simplify rent payments and lease management, 
                  making transactions seamless for both landlords and tenants.
                </p>
              </section>

              <div className="bg-secondary/50 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-6">Key Takeaways</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Automation reduces operational costs and improves efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>IoT sensors enable data-driven property management decisions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Smart security systems enhance property protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Energy-efficient solutions promote sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Technology improves overall tenant experience</span>
                  </li>
                </ul>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed">
                  Smart technology has become a game-changer in modern property and asset management. By automating 
                  operations, improving security, reducing costs, and enhancing sustainability, it empowers property 
                  managers to make more informed decisions.
                </p>
                <p className="text-lg leading-relaxed">
                  As the world continues to embrace digital transformation, adopting smart solutions is no longer 
                  an option but a necessity for those looking to stay competitive in the real estate industry. 
                  The future of property management is undoubtedly smart—those who leverage technology will reap 
                  the benefits of efficiency, security, and sustainability.
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