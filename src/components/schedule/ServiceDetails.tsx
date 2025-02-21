import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ServiceDetailsProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const services = [
  'Web & Mobile Development',
  'Cloud Solutions',
  'AI & Machine Learning',
  'Digital Infrastructure',
  'Data Analytics',
  'Cybersecurity',
  'Other',
];

export function ServiceDetails({ formData, updateFormData, onNext, onPrev }: ServiceDetailsProps) {
  const handleNext = () => {
    updateFormData({
      service: formData.service,
      description: formData.description,
    });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Service Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service">Type of Service</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => updateFormData({ service: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              placeholder="Tell us about your project and requirements..."
              value={formData.description}
              onChange={(e) => updateFormData({ description: e.target.value })}
              className="min-h-[150px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Previous Step
        </Button>
        <Button
          onClick={handleNext}
          disabled={!formData.service || !formData.description}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}