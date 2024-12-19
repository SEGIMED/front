'use client';

import { useState } from 'react';
import { AppointmentDetail } from './components/appoinment-detail';
import type { Appointment } from './types';

const mockAppointment: Appointment = {
  id: '1',
  patientId: '1',
  patient: {
    id: '1',
    name: 'John Doe',
    age: 34,
    birthDate: '1990-01-01',
    phone: '9632500902',
    email: 'demo@nimbo-x.com'
  },
  date: '2024-12-03',
  startTime: '10:15',
  endTime: '10:45',
  reason: 'stomach ache',
  status: 'scheduled'
};

export default function AppointmentsPage() {
  const [appointment, setAppointment] = useState<Appointment>(mockAppointment);

  const handleCancel = async (
    reason: string,
    comments: string,
    notify: boolean
  ) => {
    console.log('Cancelando turno:', { reason, comments, notify });
    // Aquí iría la lógica para cancelar el turno y notificar al paciente
    // Por ahora, solo actualizamos el estado local
    setAppointment((prev) => ({ ...prev, status: 'cancelled' }));
  };

  const handleReschedule = async (
    date: Date,
    startTime: string,
    endTime: string
  ) => {
    console.log('Reprogramando turno:', { date, startTime, endTime });
    // Aquí iría la lógica para reprogramar el turno y notificar al paciente
    // Por ahora, solo actualizamos el estado local
    setAppointment((prev) => ({
      ...prev,
      date: date.toISOString().split('T')[0],
      startTime,
      endTime
    }));
  };

  return (
    <div className="container py-6">
      <AppointmentDetail
        appointment={appointment}
        onCancel={handleCancel}
        onReschedule={handleReschedule}
      />
    </div>
  );
}
