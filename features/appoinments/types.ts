export interface Patient {
  id: string;
  name: string;
  age: number;
  birthDate: string;
  phone: string;
  email: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patient: Patient;
  date: string;
  startTime: string;
  endTime: string;
  reason: string;
  status: 'scheduled' | 'cancelled' | 'completed';
}

export interface CancellationReason {
  id: string;
  name: string;
}
