import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';

export const metadata: Metadata = {
  title: 'Segimed',
  description: 'Segimed'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={'overflow-hidden font-Poppins'}>
        <NextTopLoader showSpinner={false} />
        <Toaster />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
