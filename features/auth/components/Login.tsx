'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import LoginGoogle from './GoogleButton';
import { PATHROUTES } from '@/helpers/pathroutes';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, type LoginSchemaType } from '../Lib/zod/schema';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      });

      if (!res?.ok) {
      } else {
        alert('Login exitoso');
        reset();
      }
    } catch (error) {
      alert('Error de autenticación');
    }
  };

  return (
    <div className="w-[500px] space-y-5 border-2 px-5 py-3 shadow-lg">
      <p className="text-center text-[28px] font-bold text-bluePrimary">
        Iniciar sesión
      </p>
      <LoginGoogle />

      <p className=" text-textColor relative text-center text-xl font-semibold before:absolute before:-left-[1px] before:top-1/2 before:w-[120px] before:bg-gray-400 before:content-[''] after:-right-[1px] after:top-1/2 after:bg-gray-400 after:content-[''] md:before:h-[1px] md:after:absolute md:after:h-[1px] md:after:w-[120px]">
        o ingresa tus datos
      </p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

        <Link href={PATHROUTES.FORGOTPASSWORD}>
          <p className="my-2 text-end text-bluePrimary">Recuperar Contraseña</p>
        </Link>

        <button
          className="flex justify-center w-full py-2 font-bold text-white rounded-xl bg-bluePrimary"
          type="submit"
        >
          Iniciar sesión
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
        ¿No tienes una cuenta?{' '}
        <Link href={PATHROUTES.REGISTER}>
          <span className="text-bluePrimary">Registrate aca</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
