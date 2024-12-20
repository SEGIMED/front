import { signIn } from 'next-auth/react';

const LoginGoogle2 = () => {
  const handleGoogleLogin = () => {
    signIn('google');
  };

  return (
    <div className="flex">
      <button
        className="w-[440px] rounded-xl bg-sky-400 py-2 font-bold text-white"
        onClick={handleGoogleLogin}
      >
        Ingresar con google
      </button>
    </div>
  );
};

export default LoginGoogle2;
