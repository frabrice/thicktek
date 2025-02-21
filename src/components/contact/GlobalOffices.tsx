import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function GlobalOffices() {
  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Tech Avenue, San Francisco, CA 94105',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Innovation Square, London, EC2A 2BB',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60',
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Future Tower, Singapore 018956',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Global Offices</h2>
          <p className="text-muted-foreground">
            Visit us at one of our locations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    {office.city}
                  </h3>
                  <p className="text-primary mb-4">{office.country}</p>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    {office.address}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}