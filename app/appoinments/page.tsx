import { AppointmentsClient } from '@/features/appoinments/components/appoinments-client';
import type { Appointment } from '@/features/appoinments/types';

// En el futuro, esto vendrá de una base de datos o API
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

export default async function AppointmentsPage() {
  // En el futuro, aquí irán las operaciones del servidor
  // como fetchear datos de una API o base de datos
  const appointment = mockAppointment;

  return (
    <div className="container py-6">
      <AppointmentsClient initialAppointment={appointment} />
    </div>
  );
}
