'use client';

import Avatar from '@/features/patients/assets/AvarDefault.png';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import { ArrowLeft, Upload } from 'lucide-react';
import getPatientById from '@/features/patients/actions/getPatientById';
import Image from 'next/image';
import EditPatientForm from '@/features/patients/components/edit-patient-form';

interface EditPatientPageProps {
  params: { id: string }; // Define the type for the dynamic route parameter
}

const EditPatient: React.FC<EditPatientPageProps> = ({ params }) => {
  const { id } = params;
  const router = useRouter(); // Use next/navigation's router

  const [patient, setPatient] = useState<any>(null); // State to hold patient data
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchPatient = async () => {
      const fetchedPatient = await getPatientById(id); // Assuming this returns patient data
      setPatient(fetchedPatient);
      setIsLoading(false);
    };
    fetchPatient();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!patient) {
    return <div>No patient found</div>;
  }

  return (
    <div className="grid h-full w-full grid-cols-3 px-10">
      {/* Header Section */}
      <div className="col-start-1 col-end-4 row-start-1 row-end-2 flex h-[62px] items-center px-[20px] py-[8px]">
        <button
          onClick={() => router.back()} // Correct use of router.back()
          className="flex items-center text-center font-Roboto text-[16px] font-normal leading-[20px] tracking-[0.3px]"
        >
          <ArrowLeft className="mr-2 h-[26px] w-[26px]" />
          Anterior
        </button>
      </div>

      {/* Patient Avatar Section */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-4">
        <div className="rounded-md border-2 border-gray-200">
          <Image
            src={Avatar}
            alt="Patient Avatar"
            className="w-full rounded-[5px] p-10"
          />
        </div>
        <Button
          variant="link"
          size="default"
          className="-px-4 -py-2 text-l h-[50px] w-full justify-center gap-2 border-2 border-blue-400/60 bg-[#e8efff] font-Roboto text-[#487ffa] hover:bg-blue-100 hover:text-blue-700"
        >
          <Upload />
          Subir foto
        </Button>
        <Button
          variant="outline"
          size="default"
          className="-px-4 -py-2 h-11 w-full justify-center font-Poppins text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          Eliminar foto
        </Button>
      </div>

      {/* Patient Form Section */}
      <div className="col-start-2 col-end-4 row-start-2 row-end-4">
        <EditPatientForm patient={patient} />
      </div>
    </div>
  );
};

export default EditPatient;
