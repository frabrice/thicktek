import { Card } from '@/components/ui/card';
import { Mail, Phone, Clock } from 'lucide-react';

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Our team will respond within 24 hours',
      value: 'contact@thicktek.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm EST',
      value: '+1 (555) 123-4567',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      description: '24/7 support for enterprise clients',
      value: 'Always Available',
    },
  ];

  return (
    <div className="space-y-6">
      {contactMethods.map((method) => {
        const Icon = method.icon;
        return (
          <Card key={method.title} className="p-6">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {method.description}
                </p>
                <p className="text-primary font-medium">{method.value}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}