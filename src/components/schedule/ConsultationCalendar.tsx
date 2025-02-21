import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface ConsultationCalendarProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
];

export function ConsultationCalendar({ formData, updateFormData, onNext }: ConsultationCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    formData.date ? new Date(formData.date) : undefined
  );
  const [selectedTime, setSelectedTime] = useState(formData.time);

  const handleNext = () => {
    updateFormData({
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
      time: selectedTime,
    });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Select a Date & Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              disabled={{ before: new Date() }}
            />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Available Time Slots</h3>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleNext}
          disabled={!selectedDate || !selectedTime}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}