"use client";
import { Search } from "lucide-react";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import Image from "next/image";
import { Input } from "../ui/input";
import DarkModeToggle from "../themes/DarkModeToggle";

const AdminHeader = () => {
  return (
   <header className="flex items-center justify-between border-b border-b-gray-200/20 px-3 py-5">

      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center justify-end gap-6">
        <div className="relative hidden md:flex lg:w-88 md:w-64 items-center">
          <Input
            type="text"
            placeholder="Search data, users, or reports"
            className="pr-10  "
          />
          <Search className="absolute right-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        </div>

        <div className="flex items-center gap-4">
          <IoNotifications className="text-xl text-zinc-600 dark:text-zinc-300" />
          <DarkModeToggle />

          <div className="relative h-9 w-9 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700">
            <Image
              src="/admin.jpg"
              fill
              alt="admin image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
