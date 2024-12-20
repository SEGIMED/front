'use client';
import { Bell, Settings } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export function AppHeader() {
  const pathname = usePathname();
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <header className="flex h-[89px] w-[calc(100vw-250px)] items-center justify-between border-b border-[#d7d7d7] bg-white px-6">
      <h1 className="text-xl font-normal text-gray-900">
        {pathname === '/'
          ? 'Dashboard'
          : capitalize(pathname.split('/').pop() || '')}
      </h1>
      <div className="flex items-center gap-2 space-x-[10px]">
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 border-2 border-gray-200 text-gray-500 hover:text-gray-900"
        >
          <Bell className="h-[26px] w-[26px]" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 border-2 border-gray-200 text-gray-500 hover:text-gray-900"
        >
          <Settings className="h-[26px] w-[26px]" />
        </Button>
        <Avatar className="h-11 w-11 rounded-[6px] border-2 border-gray-200">
          <AvatarImage
            className="object-cover"
            src="https://wallpapers.com/images/hd/white-astronaut-cartoon-iphone-dubzue0ncd7tr0m7.jpg"
            alt="User"
            width={500}
            height={500}
          />
        </Avatar>
      </div>
    </header>
  );
}
