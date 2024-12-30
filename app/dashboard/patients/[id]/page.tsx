import Link from 'next/link';
import getPatientById from '@/features/patients/actions/getPatientById';
import { ArrowLeft } from 'lucide-react';
import PatienteProfileCard from '@/features/patients/components/Patient/patiente-profile-card';
interface PatientPageProps {
  params: { id: string }; // Define the type for the dynamic route parameter
}

const Patient: React.FC<PatientPageProps> = ({ params }) => {
  const { id } = params;
  const patient = getPatientById(id);

  if (!patient) {
    return <div>no Patient</div>;
  }

  return (
    <div className="grid h-full w-full grid-cols-[repeat(3,_370px)] grid-rows-[62px_repeat(6,_1fr)] justify-center">
      <div className="row-end-2] col-start-1 col-end-4 row-start-1 flex h-[62px] items-center px-[20px] py-[8px]">
        <Link
          href="/dashboard/patients"
          className="flex items-center text-center font-Roboto text-[16px] font-normal leading-[20px] tracking-[0.3px] "
        >
          <ArrowLeft className="mr-2 h-[26px] w-[26px]" />
          Anterior
        </Link>
      </div>
      <div className="row-end-4] col-start-1 col-end-2 row-start-2">
        <PatienteProfileCard patient={patient} />
      </div>

      <div className="col-start-1 col-end-2 row-start-3 row-end-5 ">
        <textarea
          name=""
          id=""
          style={{ backgroundColor: 'rgb(253, 243, 211)' }}
          className="h-full w-full"
        >
          NOtas
        </textarea>
      </div>
      <div className="border bg-blue-300">3</div>
      <div className="border bg-blue-400">4</div>
      <div className="border bg-blue-500">5</div>
      <div className="border bg-blue-600">6</div>
      <div className="border bg-blue-700">7</div>
      <div className="border bg-blue-800">8</div>
      <div className="border bg-blue-300">9</div>
      <div className="border bg-blue-300">10</div>
      <div className="border bg-blue-300">11</div>
      <div className="border bg-blue-300">12</div>
      <div className="border bg-blue-300">13</div>
      <div className="border bg-blue-300">14</div>
      <div className="border bg-blue-300">15</div>
      <div className="border bg-blue-300">16</div>
      <div className="border bg-blue-300">17</div>
    </div>
  );
};

export default Patient;
