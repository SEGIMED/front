const LoginGoogle = () => {
  const handleGoogleLogin = () => {
    const googleAuthWindow = window.open(
      '/api/auth/signin/google',
      '_blank',
      'width=500,height=600'
    );

    const interval = setInterval(() => {
      if (googleAuthWindow?.closed) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div className="flex">
      <div className="border-2 border-bluePrimary"></div>
      <div className="h-[54px]"></div>
      <button
        className="bg-bluePrimary w-[440px] py-1 font-bold text-white"
        onClick={handleGoogleLogin}
      >
        Ingresar con Google
      </button>
    </div>
  );
};

export default LoginGoogle;
