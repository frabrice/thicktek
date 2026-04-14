import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, User, CircleCheck as CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ConsultationCalendar } from '@/components/schedule/ConsultationCalendar';
import { ServiceDetails } from '@/components/schedule/ServiceDetails';
import { ContactInfo } from '@/components/schedule/ContactInfo';
import { ReviewSubmit } from '@/components/schedule/ReviewSubmit';
import { sendEmail } from '@/lib/supabase';

const steps = [
  { icon: Calendar, label: 'Choose Date & Time' },
  { icon: FileText, label: 'Service Details' },
  { icon: User, label: 'Your Information' },
  { icon: CheckCircle, label: 'Review & Submit' },
];

export default function SchedulePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    service: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    await sendEmail({
      type: 'consultation',
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        position: formData.position,
        preferred_date: formData.date,
        preferred_time: formData.time,
        service: formData.service,
        description: formData.description,
      },
    });

    setFormData({
      date: '',
      time: '',
      service: '',
      description: '',
      name: '',
      email: '',
      phone: '',
      company: '',
      position: '',
    });

    setCurrentStep(0);
  };

  return (
    <main className="pt-[52px] pb-16 min-h-screen">
      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Schedule a Consultation</h1>
            <p className="text-muted-foreground">
              Let's discuss how we can help transform your business
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index <= currentStep;
                return (
                  <div key={step.label} className="relative">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-background relative z-10 transition-colors ${
                          isActive
                            ? 'border-primary text-primary'
                            : 'border-muted-foreground text-muted-foreground'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-sm mt-2 transition-colors ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 && (
                  <ConsultationCalendar
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={nextStep}
                  />
                )}
                {currentStep === 1 && (
                  <ServiceDetails
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={nextStep}
                    onPrev={prevStep}
                  />
                )}
                {currentStep === 2 && (
                  <ContactInfo
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={nextStep}
                    onPrev={prevStep}
                  />
                )}
                {currentStep === 3 && (
                  <ReviewSubmit
                    formData={formData}
                    onPrev={prevStep}
                    onSubmit={handleSubmit}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </main>
  );
}
