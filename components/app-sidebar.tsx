'use client';

import React from 'react';
import Link from 'next/link';
import {
  ClipboardList,
  Calendar,
  UserRoundCheck,
  LogOut,
  MessageSquareText,
  CircleDollarSign,
  BarChart2,
  Star,
  Crown,
  Hospital
} from 'lucide-react';
import { Button } from '../components/ui/button';
import Image from 'next/image';

const menuItems = [
  { icon: UserRoundCheck, label: 'Pacientes', href: '/pacientes' },
  { icon: Calendar, label: 'Turnos', href: '/turnos' },
  { icon: ClipboardList, label: 'Consultas', href: '/consultas' },
  { icon: MessageSquareText, label: 'Mensajes', href: '/mensajes' },
  { icon: CircleDollarSign, label: 'Facturación', href: '/facturacion' },
  { icon: BarChart2, label: 'Estadísticas', href: '/estadisticas' },
  { icon: Star, label: 'Sugerencias', href: '/sugerencias' }
];

{
  /* Nombre de la organización */
}
const organizationName = 'Sanatorio Trinidad';

export function AppSidebar() {
  return (
    <div className="flex max-h-screen w-64 flex-col border-r border-gray-400/50 bg-[#fafafc]">
      {/* Logo */}
      <div>
        <Link className="flex w-full justify-center" href="/dashboard">
          <Image
            src="/truchilogo.png"
            alt="Segimed"
            className="mb-[35px] mt-8 flex
                h-12 w-40"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="m-auto ml-[15px] mr-5 flex h-12 w-[215px] items-center justify-start rounded-md border-2 border-gray-200 text-gray-500">
        <Hospital className="mx-[11px] my-[10px] h-[26px] w-[26px]" />
        <span className="ml-[4px] text-base">{organizationName}</span>
      </div>

      {/* Navegación */}
      <nav className="m-auto ml-4 mr-5 mt-[35px] w-[215px] flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className=" mb-[5px] w-[215px] rounded-md hover:bg-[#e8efff]"
            >
              <Link href={item.href} className="flex items-center">
                <item.icon className="m-[10px] h-[26px] w-[26px]" />
                <span className="ml-[5px] text-xl">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de cerrar sesión */}
      <div className="m-auto mb-8 w-[215px] space-y-[10px]">
        <Button
          variant="ghost"
          className="-px-4 -py-2 h-[50px] w-full justify-start border-2 border-blue-400/60 bg-[#e8efff] font-Roboto text-xl text-[#487ffa] hover:bg-blue-100 hover:text-blue-700"
        >
          <Crown
            fill="#f2ad23"
            className=" mx-[10px] my-[13px] h-6 w-6 text-yellow-400"
          />
          <span className="ml-[5px]">Hacete Premium</span>
        </Button>
        <Button
          variant="ghost"
          className="-px-4 -py-2 h-11 w-full justify-start font-Poppins text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="m-[10px] h-6 w-6 rotate-180" />
          <span className="ml-[5px]">Cerrar sesión</span>
        </Button>
      </div>
    </div>
  );
}
