import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication pages'
};

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Esquinas ? Checar */}
      <div className="absolute left-0 top-0 h-60 w-60 rounded-br-full border-b-[90px] border-r-[90px] border-bluePrimary border-opacity-40 bg-transparent"></div>
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-tl-full border-l-[110px] border-t-[110px] border-[#70c247] border-opacity-50 bg-transparent"></div>

      {/* Contenido */}
      <Image
        src="/truchilogo.png"
        alt="Segimed"
        className="mb-[35px] mt-8 flex h-12 w-40"
        width={500}
        height={500}
      />
      <div className="w-full max-w-[500px] p-6">{children}</div>
    </div>
  );
}
