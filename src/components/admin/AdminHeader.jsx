"use client";
import { BookmarkIcon, Search } from "lucide-react";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import Image from "next/image";
import { Input } from "../ui/input";
import DarkModeToggle from "../themes/DarkModeToggle";
import { useSelector } from "react-redux";

const AdminHeader = () => {
const theme = useSelector((state)=>state.theme.mode)
  return (
    <div className="grid grid-cols-2 p-3">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="flex items-center justify-center gap-12">
        <div className="flex relative md:w-64 lg:w-88 items-center">
          <Input type="text" placeholder="search data,users,or reports" />
          <Search className="absolute right-3 place-content-center" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <IoNotifications />
          <DarkModeToggle />

          <div className="w-10 relative h-10 rounded-full">
            <Image
              src="/admin.jpg"
              fill
              alt="adminiamge"
              className="w-full h-full object-center object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black dark:bg-zinc-900 dark:text-white p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p>Current mode: {theme}</p>
      </div>
    </div>
  );
};

export default AdminHeader;
