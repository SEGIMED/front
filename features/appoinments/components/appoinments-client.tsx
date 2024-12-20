'use client';

import { useState } from 'react';
import { AppointmentDetail } from './appoinment-detail';
import type { Appointment } from '../types';

interface AppointmentsClientProps {
  initialAppointment: Appointment;
}

export function AppointmentsClient({
  initialAppointment
}: AppointmentsClientProps) {
  const [appointment, setAppointment] =
    useState<Appointment>(initialAppointment);

  const handleCancel = async (
    reason: string,
    comments: string,
    notify: boolean
  ) => {
    console.log('Cancelando turno:', { reason, comments, notify });
    // Aquí iría la lógica para cancelar el turno y notificar al paciente
    setAppointment((prev) => ({ ...prev, status: 'cancelled' }));
  };

  const handleReschedule = async (
    date: Date,
    startTime: string,
    endTime: string
  ) => {
    console.log('Reprogramando turno:', { date, startTime, endTime });
    // Aquí iría la lógica para reprogramar el turno y notificar al paciente
    setAppointment((prev) => ({
      ...prev,
      date: date.toISOString().split('T')[0],
      startTime,
      endTime
    }));
  };

  return (
    <AppointmentDetail
      appointment={appointment}
      onCancel={handleCancel}
      onReschedule={handleReschedule}
    />
  );
}
