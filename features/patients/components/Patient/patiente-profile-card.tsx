import Image from 'next/image';
import Avatar from '@/features/patients/assets/AvarDefault.png';

interface PatienteProfileCardProps {
  patient: {
    name: string;
    birthdate: string;
    email: string;
  };
}

const PatienteProfileCard: React.FC<PatienteProfileCardProps> = ({
  patient
}) => {
  return (
    <div className="grid grid-cols-[120px_auto_10px]">
      <div>
        <Image
          src={Avatar}
          alt="Patient Avatar"
          className="h-[115px] w-[115px] overflow-hidden rounded-[5px]"
        />
      </div>
      <div className="text-left">
        <p className="font-medium">Name: {patient.name}</p>
        <p className="text-sm">Birthdate: {patient.birthdate}</p>
        <p className="text-sm">Email: {patient.email}</p>
      </div>
      <div>...</div>
    </div>
  );
};

export default PatienteProfileCard;
