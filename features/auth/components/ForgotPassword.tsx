'use client';

import React from 'react';
import { PATHROUTES } from '@/helpers/pathroutes';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotSchema, type ForgotSchemaType } from '../Lib/zod/schema';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ForgotSchemaType>({
    resolver: zodResolver(ForgotSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: ForgotSchemaType) => {
    reset();
  };

  return (
    <div className="w-[500px] space-y-5 border-2 px-5 py-3 shadow-lg">
      <p className="text-center text-[28px] font-bold text-bluePrimary">
        Recuperar contraseña
      </p>
      <p className="text-sm text-center">
        Ingresa el correo electrónico con el que te registraste y te enviaremos
        las instrucciones para restablecer tu contraseña.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="email">Correo Electronico</label>
          <input
            className="p-2 bg-transparent border-2 border-red border-slate-300 "
            type="text"
            placeholder="Ingrese su correo electronico"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <button
          className="flex justify-center w-full py-2 font-bold text-white rounded-xl bg-bluePrimary"
          type="submit"
        >
          Recuperar contraseña
        </button>
      </form>
      <p className="text-center">
        ¿Necesitas iniciar sesión?{' '}
        <Link href={PATHROUTES.LOGIN}>
          <span className="text-bluePrimary">Ingresa aca</span>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
