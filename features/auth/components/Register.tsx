'use client';

import React, { useState } from 'react';
import LoginGoogle from './GoogleButton';
import { PATHROUTES } from '@/helpers/pathroutes';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, type RegisterSchemaType } from '../Lib/zod/schema';

const Register = () => {
  const [phone, setPhone] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    }
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    reset();
  };

  return (
    <div className="w-[500px] space-y-5 border-2 px-5 py-3 shadow-lg">
      <p className="text-center text-[28px] font-bold text-bluePrimary">
        Registrate gratis
      </p>

      <LoginGoogle />

      <p className=" text-textColor relative text-center text-xl font-semibold before:absolute before:-left-[1px] before:top-1/2 before:w-[120px] before:bg-gray-400 before:content-[''] after:-right-[1px] after:top-1/2 after:bg-gray-400 after:content-[''] md:before:h-[1px] md:after:absolute md:after:h-[1px] md:after:w-[120px]">
        o ingresa tus datos
      </p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name">Nombre completo</label>
          <input
            className="p-2 bg-transparent border-2 border-red border-slate-300 "
            type="text"
            placeholder="Ingrese su nombre completo"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Correo Electronico</label>
          <input
            className="p-2 bg-transparent border-2 border-red border-slate-300 "
            type="email"
            placeholder="Ingrese su correo electronico"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input
            className="p-2 bg-transparent border-2 border-red border-slate-300 "
            type="password"
            placeholder="Ingrese su contraseña"
            {...register('password')}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            className="p-2 bg-transparent border-2 border-red border-slate-300 "
            type="password"
            placeholder="Confirme su contraseña"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone">Número de teléfono</label>
          <PhoneInput
            international
            defaultCountry="AR"
            value={phone}
            onChange={(value) => {
              setPhone(value || '');
              setValue('phone', value || '');
            }}
            className="border-red border-2 border-slate-300 bg-transparent p-2 [&_.PhoneInputInput]:bg-transparent"
            placeholder="Ingresa tu número de teléfono"
            countrySelectProps={{
              className:
                'rounded-md border bg-transparent border-gray-300 px-3 py-1 text-sm'
            }}
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <button
          className="flex justify-center w-full py-2 font-bold text-white rounded-xl bg-bluePrimary"
          type="submit"
        >
          Crear cuenta
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="ml-4 size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </button>
      </form>
      <p className="text-center">
        ¿Ya tienes una cuenta?{' '}
        <Link className="text-bluePrimary" href={PATHROUTES.LOGIN}>
          Inicia Sesión
        </Link>
      </p>
    </div>
  );
};

export default Register;
