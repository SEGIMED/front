import { signIn } from 'next-auth/react';

const LoginGoogle2 = () => {
  const handleGoogleLogin = () => {
    signIn('google');
  };

  return (
    <div className="flex">
      <div className="h-[54px] border-2 border-bluePrimary"></div>
      <button
        className="w-[440px] bg-bluePrimary py-1 font-bold text-white"
        onClick={handleGoogleLogin}
      >
        Ingresar con google
      </button>
    </div>
  );
};

export default LoginGoogle2;
