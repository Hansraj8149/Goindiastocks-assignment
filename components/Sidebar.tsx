"use client";

import Link from "next/link";
import { Montserrat } from 'next/font/google'
import { Shield,BellDot, CircleDollarSign, MessageSquareQuote, BadgeCent, Factory, User, Watch, CalendarSearch, Mails,} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Disscussion Fourm',
    icon: MessageSquareQuote,
    href: '/disscussionfourm',
    color: "text-sky-500"
  },
  {
    label: 'Market Stories',
    icon: CircleDollarSign,
    href: '/marketstories',
    color: "text-green-700",
},
{
    label: 'Sentiment',
    icon: Shield,
    color: "text-pink-700",
    href: '/image',
},
{
    label: 'Market',
    icon: BadgeCent,
    color: "text-slate-700",
    href: '/video',
},
{
    label: 'Sector',
    icon: Factory,
    color: "text-emerald-500",
    href: '/music',
},
{
    label: 'WatchList',
    icon: Watch,
    color: "text-violet-500",
    href: '/code',
},
{
    label: 'Events',
    icon: CalendarSearch,
    color: "text-zinc-700",
    
    href: '/settings',
},
{
    label: 'News/Interview',
    
    color: "text-orange-700",
    icon: Mails,
    href: '/settings',
},
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 w-full py-4 flex flex-col h-screen bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8">
            <User/>
          </div>
          <h1 className={cn("text-xl font-bold mr-4", poppins.className)}>
            Hello, User
          </h1>
          <div className="h-8 w-8">
            <BellDot/>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
     
    </div>
  );
};