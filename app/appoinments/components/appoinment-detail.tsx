'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, Clock, Pencil, Printer, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback>
              {appointment.patient.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-primary">
              {appointment.patient.name}
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Edad</p>
                <p>{appointment.patient.age} años</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Fecha de nacimiento
                </p>
                <p>
                  {format(
                    new Date(appointment.patient.birthDate),
                    'dd/MM/yyyy'
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p>{appointment.patient.phone}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Email</p>
              <p>{appointment.patient.email}</p>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>
                  {format(new Date(appointment.date), 'd MMMM, yyyy', {
                    locale: es
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>
                  {appointment.startTime} - {appointment.endTime}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowRescheduleDialog(true)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Reprogramar
          </Button>
          <Button
            variant="destructive"
            onClick={() => setShowCancelDialog(true)}
          >
            <Trash className="mr-2 h-4 w-4" />
            Cancelar
          </Button>
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
