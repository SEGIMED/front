'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, Clock, Pencil, Printer, Trash, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { CancelAppointmentDialog } from './cancel-appoinment-dialog';
import { RescheduleAppointmentDialog } from './reschedule-appointment-dialog';
import { Appointment } from '../types';

interface AppointmentDetailProps {
  appointment: Appointment;
  onCancel: (
    reason: string,
    comments: string,
    notify: boolean
  ) => Promise<void>;
  onReschedule: (
    date: Date,
    startTime: string,
    endTime: string
  ) => Promise<void>;
}

export function AppointmentDetail({
  appointment,
  onCancel,
  onReschedule
}: AppointmentDetailProps) {
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showRescheduleDialog, setShowRescheduleDialog] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  return (
    <Card className="mx-auto w-full max-w-3xl shadow-lg">
      <CardContent className="p-0">
        <div className="space-y-6 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 rounded-full bg-gray-100">
                <AvatarFallback className="text-lg">
                  {appointment.patient.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  {appointment.patient.name}
                </h2>
                <div className="mt-2 flex gap-8 text-gray-600">
                  <span>{appointment.patient.age} años</span>
                  <span>
                    {format(
                      new Date(appointment.patient.birthDate),
                      'dd/MM/yyyy'
                    )}
                  </span>
                  <span>{appointment.patient.phone}</span>
                </div>
                <div className="mt-1 text-gray-600">
                  {appointment.patient.email}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">
                {format(new Date(appointment.date), 'd MMMM, yyyy', {
                  locale: es
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-lg">
                {appointment.startTime} → {appointment.endTime}
              </span>
            </div>
            <div className="flex items-center">
              <Pencil className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">{appointment.reason}</h3>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Ingresa el número del ticket
            </label>
            <Input
              value={ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value)}
              className="mt-1 max-w-xs"
              placeholder="Número de ticket"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t bg-gray-50 px-6 py-4">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Printer className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-red-600"
              onClick={() => setShowCancelDialog(true)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowRescheduleDialog(true)}
            >
              Empezar
            </Button>
          </div>
        </div>
      </CardContent>

      <CancelAppointmentDialog
        isOpen={showCancelDialog}
        onClose={() => setShowCancelDialog(false)}
        onCancel={onCancel}
        reasons={[
          { id: '1', name: 'Paciente canceló' },
          { id: '2', name: 'Médico no disponible' },
          { id: '3', name: 'Emergencia' }
        ]}
      />
      <RescheduleAppointmentDialog
        isOpen={showRescheduleDialog}
        onClose={() => setShowRescheduleDialog(false)}
        onReschedule={onReschedule}
        currentDate={new Date(appointment.date)}
        currentStartTime={appointment.startTime}
        currentEndTime={appointment.endTime}
      />
    </Card>
  );
}

