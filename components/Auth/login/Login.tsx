'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import LoginGoogle2 from '../googleButton/GoogleButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (!res?.ok) {
        setError('Credenciales inválidas');
      } else {
        alert('Login exitoso');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      setError('Error al autenticar usuario');
      alert('Error de autenticación');
    }
  };

  return (
    <div className="w-[500px] space-y-5 border-2 px-5 py-3 shadow-lg">
      <p className="text-center text-[28px] font-bold text-bluePrimary">
        Iniciar sesión
      </p>
      <LoginGoogle2 />
      <p className=" text-textColor relative text-center text-xl font-semibold before:absolute before:-left-[1px] before:top-1/2 before:w-[120px] before:bg-gray-400 before:content-[''] after:-right-[1px] after:top-1/2 after:bg-gray-400 after:content-[''] md:before:h-[1px] md:after:absolute md:after:h-[1px] md:after:w-[120px]">
        o ingresa tus datos
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">Correo Electronico</label>
          <input
            className="border-red  border-2 border-slate-300 bg-transparent p-2 "
            name="email"
            type="text"
            placeholder="Ingrese su correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input
            className="border-red border-2 border-slate-300 bg-transparent p-2  "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-800">{error}</p>}
        <button
          className="w-full rounded-xl bg-bluePrimary py-2 font-bold text-white"
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
