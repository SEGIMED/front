import Image from 'next/image';
import Avatar from '@/features/patients/assets/AvarDefault.png';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@/components/ui/table';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';
import GetPatients from '@/features/patients/actions/GetPatients';

const patients = GetPatients();
const Page = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="grid grid-cols-[20%,60%,20%] items-center px-10 py-2">
        <input
          type="text"
          placeholder="Buscar"
          className="w-[90%]  rounded-[5px] border-gray-300 px-4 py-2"
        />
        <p>Ordenar</p>
        <Button
          variant="outline"
          size="default"
          className="rounded-lg border-gray-300"
        >
          Agregar Paciente
        </Button>
      </div>

      {/* Table Section */}
      <Table className="w-full border-collapse border border-gray-300 px-10 py-2">
        <TableHeader>
          <TableRow className="grid grid-cols-[20%,15%,15%,20%,20%,10%] items-center border-b border-gray-300 bg-gray-100 px-10">
            <TableHead className="text-left">Nombre</TableHead>
            <TableHead className="text-left">Fecha de nacimiento</TableHead>
            <TableHead className="text-left">Genero</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-left">Teléfono</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient, index) => (
            <TableRow
              key={index}
              className="grid grid-cols-[20%,15%,15%,20%,20%,10%] items-center border-b border-gray-200 px-10"
            >
              <TableCell className="flex items-center gap-[5px]">
                <Image
                  src={Avatar}
                  alt="Patient Avatar"
                  className="h-10 w-10 rounded-[5px]"
                />
                {patient.name}
              </TableCell>
              <TableCell>{patient.birthdate}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.email}</TableCell>
              <TableCell>{patient.phone}</TableCell>
              <TableCell>
                <Accordion type="single" collapsible className="w-48">
                  <AccordionItem value="actions">
                    <AccordionTrigger className="text-blue-600">
                      ...
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="m-0 p-0">
                        <li className="border-b border-gray-200 px-4 py-2">
                          Iniciar Consulta
                        </li>
                        <li className="border-b border-gray-200 px-4 py-2">
                          Ver Perfil
                        </li>
                        <li className="border-b border-gray-200 px-4 py-2">
                          Editar
                        </li>
                        <li className="px-4 py-2 text-red-600">Eliminar</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
