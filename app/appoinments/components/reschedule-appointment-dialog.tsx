'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface RescheduleAppointmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onReschedule: (
    date: Date,
    startTime: string,
    endTime: string
  ) => Promise<void>;
  currentDate: Date;
  currentStartTime: string;
  currentEndTime: string;
}

const timeSlots = [
  { start: '09:00', end: '09:30' },
  { start: '09:30', end: '10:00' },
  { start: '10:00', end: '10:30' },
  { start: '10:30', end: '11:00' }
  // Add more time slots as needed
];

export function RescheduleAppointmentDialog({
  isOpen,
  onClose,
  onReschedule,
  currentDate,
  currentStartTime,
  currentEndTime
}: RescheduleAppointmentDialogProps) {
  const [date, setDate] = useState<Date | undefined>(currentDate);
  const [timeSlot, setTimeSlot] = useState(
    `${currentStartTime}-${currentEndTime}`
  );

  const handleReschedule = async () => {
    if (date) {
      const [start, end] = timeSlot.split('-');
      await onReschedule(date, start, end);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reprogramar turno</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, 'PPP')
                  ) : (
                    <span>Seleccione una fecha</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un horario" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem
                    key={`${slot.start}-${slot.end}`}
                    value={`${slot.start}-${slot.end}`}
                  >
                    {slot.start} - {slot.end}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleReschedule} disabled={!date || !timeSlot}>
            Reprogramar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
