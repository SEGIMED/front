'use client';

import { useState } from 'react';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
  const [view, setView] = useState<'calendar' | 'week'>('calendar');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 sm:max-w-[800px]">
        <DialogHeader className="border-b p-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Reprogramar turno
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Select defaultValue="doctor1">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Seleccionar médico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="doctor1">Dr. Smith</SelectItem>
                  <SelectItem value="doctor2">Dra. Johnson</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Button
              variant={view === 'calendar' ? 'default' : 'outline'}
              onClick={() => setView('calendar')}
            >
              Calendario
            </Button>
            <Button
              variant={view === 'week' ? 'default' : 'outline'}
              onClick={() => setView('week')}
            >
              Semana
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6">
          {view === 'calendar' ? (
            <div className="flex gap-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                locale={es}
              />
              <div className="flex-1">
                <h3 className="mb-4 font-medium">Horarios disponibles</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={`${slot.start}-${slot.end}`}
                      variant="outline"
                      className={cn(
                        'justify-start',
                        timeSlot === `${slot.start}-${slot.end}` &&
                          'border-primary'
                      )}
                      onClick={() => setTimeSlot(`${slot.start}-${slot.end}`)}
                    >
                      {slot.start} - {slot.end}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="min-h-[400px] rounded-lg bg-gray-50 p-4">
              {/* Week view implementation */}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 border-t bg-gray-50 p-6">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              if (date) {
                const [start, end] = timeSlot.split('-');
                onReschedule(date, start.trim(), end.trim());
              }
            }}
            disabled={!date || !timeSlot}
          >
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
