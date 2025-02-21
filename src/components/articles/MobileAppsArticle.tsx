import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function MobileAppsArticle() {
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
                  The Power of Mobile Apps in Business Growth
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    October 2023
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Mihigo Charmant
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    7 min read
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-4">
                  In the digital age, mobile apps have become indispensable tools for businesses looking to 
                  expand their reach, enhance customer engagement, and drive revenue growth. With billions 
                  of smartphone users worldwide, companies that leverage mobile technology can create seamless 
                  experiences and strengthen brand loyalty.
                </p>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Expanding Market Reach</h2>
                <p className="text-lg leading-relaxed">
                  A mobile app provides businesses with a direct channel to a global audience. Unlike 
                  traditional brick-and-mortar establishments or web-based platforms, apps allow companies 
                  to engage customers anytime, anywhere.
                </p>
                <p className="text-lg leading-relaxed">
                  With the rise of mobile commerce, businesses can tap into new markets and increase sales 
                  opportunities, reaching customers wherever they are.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Enhancing Customer Engagement and Loyalty</h2>
                <p className="text-lg leading-relaxed">
                  Mobile apps foster stronger relationships between businesses and their customers. Features 
                  like personalized notifications, loyalty programs, and real-time updates keep users engaged 
                  and encourage repeat interactions.
                </p>
                <p className="text-lg leading-relaxed">
                  Push notifications remind users about special offers, product launches, and important 
                  updates, ensuring continuous engagement and building lasting customer relationships.
                </p>
              </section>

              <div className="bg-secondary/50 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-6">Key Benefits of Mobile Apps</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Direct access to global customer base</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Enhanced customer engagement and loyalty</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Streamlined operations and efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Personalized user experiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                    <span>Valuable data collection and analytics</span>
                  </li>
                </ul>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6">Streamlining Operations and Efficiency</h2>
                <p className="text-lg leading-relaxed">
                  Mobile apps are not just for customer-facing interactions—they also help businesses 
                  optimize internal operations. From managing inventory and processing payments to tracking 
                  employee performance and automating workflows, customized apps improve efficiency and 
                  reduce operational costs.
                </p>
                <p className="text-lg leading-relaxed">
                  By digitizing and automating processes, businesses can significantly reduce manual work 
                  and focus on strategic growth initiatives.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Personalized User Experiences</h2>
                <p className="text-lg leading-relaxed">
                  A well-designed mobile app leverages data analytics to offer personalized experiences. 
                  By tracking user behavior and preferences, businesses can tailor recommendations, 
                  promotions, and content to enhance customer satisfaction.
                </p>
                <p className="text-lg leading-relaxed">
                  Personalization fosters deeper connections with customers and improves conversion rates, 
                  leading to increased revenue and customer loyalty.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Integration with Emerging Technologies</h2>
                <p className="text-lg leading-relaxed">
                  Mobile apps can incorporate advanced technologies like artificial intelligence, augmented 
                  reality, and blockchain to offer innovative experiences. AI-powered chatbots, AR-driven 
                  virtual try-ons, and secure blockchain transactions enhance user experience.
                </p>
                <p className="text-lg leading-relaxed">
                  By staying ahead of technology trends, businesses can offer cutting-edge features that 
                  differentiate them from competitors and meet evolving customer expectations.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Building Community and Customer Trust</h2>
                <p className="text-lg leading-relaxed">
                  Mobile apps enable businesses to create strong communities around their brands. Features 
                  like in-app messaging, forums, and exclusive content foster a sense of belonging among users.
                </p>
                <p className="text-lg leading-relaxed">
                  Additionally, apps with robust security measures assure users that their data is safe, 
                  increasing trust and credibility in the brand.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed">
                  The power of mobile apps in business growth is undeniable. By expanding market reach, 
                  improving engagement, streamlining operations, and offering personalized experiences, 
                  mobile technology transforms how businesses interact with customers.
                </p>
                <p className="text-lg leading-relaxed">
                  In a world where convenience and digital connectivity drive success, companies that 
                  embrace mobile apps position themselves for sustained growth and industry leadership. 
                  The future of business is mobile, and those who adapt will thrive in the digital economy.
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