"use client";
import AdminHeader from "@/components/admin/AdminHeader";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">
      <div className={`${isSidebarOpen ? "grid grid-cols-[260px_1fr]" : "grid grid-cols-[72px_1fr]"}`}>
        <Sidebar className="bg-gray-100 dark:bg-zinc-800" />
        <div className="p-4">
          <AdminHeader />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
