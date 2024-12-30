import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import updatePatient from '@/features/patients/actions/patient-update-action';

interface EditPatientFormProps {
  patient: Patient;
}

const EditPatientForm: React.FC<EditPatientFormProps> = ({ patient }) => {
  return (
    <form
      action={updatePatient}
      className="grid h-full w-full grid-cols-2 grid-rows-[repeat(auto-fill)] gap-x-[20px] pl-[20px] text-[#808080]"
    >
      <div className="flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="firstName">
          Nombre(s)
        </label>
        <input
          id="firstName"
          name="firstName"
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
          defaultValue={patient.names}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Apellido(s)
        </label>
        <input
          id="lastName"
          name="lastName"
          defaultValue={patient.lastNames}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Fecha de nacimiento
        </label>
        <input
          name="dateOfBirth"
          defaultValue={patient.birthdate}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Sexo
        </label>
        <input
          name="gender"
          defaultValue={patient.gender}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Correo electronico
        </label>
        <input
          name="email"
          defaultValue={patient.email}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Celular
        </label>
        <input
          name="celphone"
          defaultValue={patient.phone}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Tipo de identificación
        </label>
        <input
          name="idType"
          defaultValue={patient.idType}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Número de identificación
        </label>
        <input
          name="idNumber"
          defaultValue={patient.idNumer}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="col-start-1 col-end-3 mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Dirección
        </label>
        <input
          name="address"
          defaultValue={patient.address}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Pais
        </label>
        <input
          name="country"
          defaultValue={patient.country}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Provincia/estado
        </label>
        <input
          name="state"
          defaultValue={patient.state}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Ciudad
        </label>
        <input
          name="city"
          defaultValue={patient.city}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Código Postal
        </label>
        <input
          name="postalCode"
          defaultValue={patient.postalCode}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Número
        </label>
        <input
          name="addressNumber"
          defaultValue={patient.addressNumber}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-[10px] h-[24px]" htmlFor="">
          Piso/Departamento
        </label>
        <input
          name="departamentNumber"
          defaultValue={patient.departamentNumber}
          className="h-[46px] rounded-md border-2 border-gray-200 bg-transparent pl-4"
          type="text"
        />
      </div>
      <Button
        type="submit"
        className="-px-4 -py-2 text-l mb-5 mt-5 h-[46px] w-[189px] justify-center gap-2 border-2 border-blue-400/60 bg-[#e8efff] font-Roboto text-[#487ffa] hover:bg-blue-100 hover:text-blue-700"
      >
        <Save />
        Guardar paciente
      </Button>
    </form>
  );
};

export default EditPatientForm;
