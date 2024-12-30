import patients from '@/features/patients/helpers/patientsList.json';

const getPatientById = (id: string) => {
  return patients.find((patient) => patient.id === id);
};

export default getPatientById;
