"use client";

import { FileClock, Home, Settings, ShieldPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UsageTrack from "./UsageTrack";

const MenuList = [
  {
    name: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: FileClock,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: ShieldPlus,
    path: "/dashboard/upgrade",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const SideNav = () => {
  const path = usePathname();

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="Logo" width={140} height={140} />
      </div>

      <hr className="my-6 border" />

      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex items-center gap-3 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                path === menu.path ? "bg-primary text-white" : ""
              }`}
            >
              <menu.icon className="h-8 w-8" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
