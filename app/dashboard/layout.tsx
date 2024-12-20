import { AppHeader } from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Segimed Dashboard',
  description: 'Segimed Dashboard'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col">
        <AppHeader />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
