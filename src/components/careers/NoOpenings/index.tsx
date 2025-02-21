import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, AlertCircle } from 'lucide-react';

export function NoOpenings() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>

                <h2 className="text-2xl font-bold">No Current Openings</h2>
                
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  While we don't have any open positions at the moment, we're always interested 
                  in connecting with talented individuals who are passionate about technology 
                  and innovation in Africa.
                </p>

                <div className="pt-4">
                  <Button className="group">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Your Resume
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground pt-4">
                  You can email your resume to{' '}
                  <a 
                    href="mailto:careers@thicktek.com" 
                    className="text-primary hover:underline"
                  >
                    careers@thicktek.com
                  </a>
                  {' '}and we'll keep you in mind for future opportunities.
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}