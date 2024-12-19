import patients from '@/features/patients/helpers/patientsList.json';
import Image from 'next/image';
import Avatar from '@/features/patients/assets/AvarDefault.png';
const Page = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="grid grid-cols-[20%,60%,20%] items-center px-10 py-2">
        <input
          type="text"
          placeholder="Buscar"
          className="w-[90%] rounded-[5px] px-4 py-2"
        />
        <p>Ordenar</p>
        <p>Agregar Paciente</p>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border border-gray-300 px-10 py-2">
        <thead>
          <tr className="grid grid-cols-[20%,15%,15%,20%,20%,10%] border-b border-gray-300 bg-gray-100 px-10">
            <th className="text-left">Nombre</th>
            <th className="text-left">Fecha de nacimiento</th>
            <th className="text-left">Genero</th>
            <th className="text-left">Email</th>
            <th className="text-left">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr
              key={index}
              className="grid grid-cols-[20%,15%,15%,20%,20%,10%]  items-center border-b border-gray-200 px-10"
            >
              <td className="flex items-center gap-[5px]">
                <Image
                  src={Avatar}
                  alt="Patient Avatar"
                  className="h-10 w-10 rounded-[5px]"
                />
                {/* <img src={Avatar} alt="Patient Avatar"  /> */}
                {patient.name}
              </td>
              <td>{patient.birthdate}</td>
              <td>{patient.gender}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
