'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { PATHROUTES } from '@/helpers/pathroutes';
import Link from 'next/link';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,

        redirect: false
      });

      if (!res?.ok) {
        setError('Credenciales inválidas');
      } else {
        alert('Login exitoso');
        setEmail('');
      }
    } catch (error) {
      setError('Error al autenticar usuario');
      alert('Error de autenticación');
    }
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

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">Correo Electronico</label>
          <input
            className="p-2 bg-transparent border-2 border-red border-slate-300 "
            name="email"
            type="text"
            placeholder="Ingrese su correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-800">{error}</p>}

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
