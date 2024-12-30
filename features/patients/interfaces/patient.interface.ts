interface MedicalHistory {
  vacines: string[];
  alergies: string[];
  antecedentesNoPatologicos: string[];
  antecedentesPatologico: string[];
  antecedentesFamiliares: string[];
  antecedentesQuirirjicos: string[];
  antecedentesJuventud: string[];
}

interface Patient {
  id: string;
  names: string;
  lastNames: string;
  birthdate: string;
  gender: string;
  email: string;
  phone: string;
  idType: string;
  idNumer: number | string; // Can be string if IDs might include non-numeric characters
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  addressNumber: string;
  departamentNumber: string;
  height: number;
  weight: number;
  imc: number;
  temperature: number;
  frecRespi: number;
  sistolica: number;
  distolica: number;
  medicalHistori: MedicalHistory;
  actualMedication: string[];
  notes: string[];
  proximasConsultas: string[];
  pastConsultas: string[];
}
