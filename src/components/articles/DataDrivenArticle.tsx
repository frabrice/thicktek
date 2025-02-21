import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function DataDrivenArticle() {
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
                  Data-Driven Decision Making: Why Every Business Needs Smart Analytics
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    February 2024
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Jean Luc H.
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    7 min read
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-4">
                  In an era where information is power, businesses that leverage smart analytics gain a 
                  significant edge over their competitors. Data-driven decision-making is no longer a 
                  luxury but a necessity in modern business environments.
                </p>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Understanding Data-Driven Decision Making</h2>
                <p className="text-lg leading-relaxed">
                  At its core, DDDM refers to using data analytics, statistical models, and machine learning 
                  to make business decisions rather than relying on intuition or guesswork. Companies collect 
                  vast amounts of data from various sources, including customer interactions, market trends, 
                  and internal operations.
                </p>
                <p className="text-lg leading-relaxed">
                  When analyzed correctly, this data provides actionable insights that help businesses optimize 
                  processes and predict future trends.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Enhanced Efficiency and Cost Reduction</h2>
                <p className="text-lg leading-relaxed">
                  One of the biggest advantages of smart analytics is its ability to streamline operations. 
                  Businesses can use data to identify inefficiencies, automate routine processes, and allocate 
                  resources effectively.
                </p>
                <p className="text-lg leading-relaxed">
                  Predictive analytics can also anticipate market demands, reducing waste and improving 
                  inventory management. By making informed decisions, companies minimize costs while 
                  maximizing productivity.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Improved Customer Experience</h2>
                <p className="text-lg leading-relaxed">
                  Data analytics enables businesses to understand their customers better. By tracking customer 
                  behavior, preferences, and feedback, companies can personalize experiences, improve customer 
                  service, and develop targeted marketing campaigns.
                </p>
                <p className="text-lg leading-relaxed">
                  Advanced AI-driven analytics tools help businesses anticipate customer needs, increasing 
                  satisfaction and loyalty while driving growth through improved customer relationships.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Risk Management and Fraud Detection</h2>
                <p className="text-lg leading-relaxed">
                  Smart analytics plays a crucial role in identifying and mitigating risks. Financial 
                  institutions use machine learning algorithms to detect fraudulent transactions in real time, 
                  protecting both the business and its customers.
                </p>
                <p className="text-lg leading-relaxed">
                  Businesses can also assess market risks and economic fluctuations through predictive models, 
                  allowing them to make proactive decisions that minimize potential losses and safeguard 
                  their operations.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Data-Driven Marketing Strategies</h2>
                <p className="text-lg leading-relaxed">
                  Marketing has transformed with the advent of big data. Companies no longer rely solely on 
                  traditional advertising but instead use analytics to track campaign performance, customer 
                  engagement, and conversion rates.
                </p>
                <p className="text-lg leading-relaxed">
                  Data-driven insights allow businesses to allocate budgets effectively, refine advertising 
                  strategies, and improve return on investment (ROI) through targeted and measurable 
                  marketing efforts.
                </p>
              </section>

              <div className="bg-secondary/50 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-6">Key Benefits of Smart Analytics</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Better decision-making through data-driven insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Improved operational efficiency and cost reduction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Enhanced customer experience and satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Better risk management and fraud prevention</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>More effective marketing and higher ROI</span>
                  </li>
                </ul>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6">The Future of Smart Analytics in Business</h2>
                <p className="text-lg leading-relaxed">
                  As artificial intelligence and machine learning continue to advance, data analytics will 
                  become even more powerful. Automated decision-making, deep learning, and predictive 
                  analytics will shape the future of business intelligence.
                </p>
                <p className="text-lg leading-relaxed">
                  Organizations that embrace smart analytics will be better positioned for growth, efficiency, 
                  and long-term success in an increasingly competitive business landscape.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed">
                  Smart analytics is revolutionizing the way businesses operate. By leveraging data for 
                  decision-making, companies can reduce costs, enhance customer experiences, mitigate risks, 
                  and maintain a competitive edge.
                </p>
                <p className="text-lg leading-relaxed">
                  In a digital-driven world, businesses that fail to adopt data analytics risk falling behind. 
                  The future belongs to those who make data work for them, turning information into actionable 
                  insights that drive success.
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