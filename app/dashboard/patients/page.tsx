/* eslint-disable no-console */
'use client';
import Image from 'next/image';
import { Search, UserRoundPlus, ArrowUpDown } from 'lucide-react';
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import GetPatients from '@/features/patients/actions/GetPatients';

const patients = GetPatients();
const Page = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="grid grid-cols-[20%,60%,20%] items-center px-10 py-2">
        <div className="relative w-[90%]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full  rounded-[5px] border-gray-300 bg-transparent py-2 pl-10"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="flex items-center gap-2  rounded-[5px] border-gray-300"
          >
            <Button
              variant="outline"
              size="default"
              className="flex w-[200px] items-center gap-2 rounded-lg border-gray-300"
            >
              <ArrowUpDown />
              Ordenar
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start" className="w-48">
            <DropdownMenuItem onSelect={() => console.log('Alfabeticamente')}>
              Alfabeticamente
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => console.log('Mayor a menor edad')}
            >
              Mayor a menor edad
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log('Alfabeticamente')}>
              Alfabeticamente
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => console.log('Menor a mayor edad')}
            >
              Menor a mayor edad
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log('Por genero')}>
              Por genero
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log('Mas recientes')}>
              Mas recientes
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          size="default"
          className="flex items-center gap-2 rounded-lg border-gray-300"
        >
          <UserRoundPlus className=" text-gray-500" /> Agregar Paciente
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-blue-600">...</button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="bottom"
                    align="start"
                    className="w-48"
                  >
                    <DropdownMenuItem
                      onSelect={() => console.log('Iniciar Consulta')}
                    >
                      Iniciar Consulta
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => console.log('Ver Perfil')}
                    >
                      Ver Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => console.log('Editar')}>
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => console.log('Eliminar')}>
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
