import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export function ContactCards() {
  const contacts = [
    {
      region: 'Kigali Office',
      phone: '+250 780 849 228',
      whatsapp: '+250 780 849 228',
      location: 'Kigali Innovation City, Rwanda',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      region: 'USA Office',
      phone: '+1 (401) 523-2934',
      location: 'Rhode Island, USA',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      region: 'Canada Office',
      phone: '+1 (613) 410-5242',
      location: 'Ottawa, Canada',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      region: 'Europe Office',
      phone: '+33 7 81 72 90 70',
      location: 'Paris, France',
      gradient: 'from-indigo-500/20 to-blue-500/20',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Global Contacts</h2>
          <p className="text-muted-foreground">
            Reach out to our offices worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient}`} />
                <div className="relative p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{contact.region}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      <span>{contact.phone}</span>
                    </div>
                    
                    {contact.whatsapp && (
                      <div className="flex items-center text-sm">
                        <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                        <span>WhatsApp: {contact.whatsapp}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span>{contact.location}</span>
                    </div>
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