"use client";

import AdminCard from "@/components/admin/AdminCard";
import WeeklyReportDashboard from "@/components/admin/Charts";
import DashboardTransition from "@/components/admin/DashboardTransition";
import TopProducts from "@/components/admin/SideProducts";
import UserCharts from "@/components/admin/UserCharts";
import React from "react";

const Page = () => {
  return (
    // Added a subtle background color to make cards stand out
    <div className="w-full min-h-screen  pb-10">
      
      {/* 1. Top Stats Row - Consistent 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pt-6">
        <AdminCard
          title="Revenue"
          stats={{ amount: 12000, action: "Up", percentage: 12 }}
          previous={{ amount: 10000, currency: "৳" }}
        />
        <AdminCard
          title="Orders"
          stats={{ amount: 320, action: "Down", percentage: -8 }}
          previous={{ amount: 350 }}
        />
        <AdminCard
          title="Customers"
          stats={{ amount: 1500, action: "Up", percentage: 10 }}
          previous={{ amount: 1350 }}
        />
      </div>

      {/* 2. Main Content Grid - Using 4 columns for balance */}
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-4 gap-6 px-6">
        
        {/* Left Section (3 Columns wide) */}
        <div className="xl:col-span-3 space-y-6">
          
          {/* Main Chart Card */}
          <div className=" border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <WeeklyReportDashboard />
          </div>

          {/* Transactions Table - Keeping it under the chart for visual alignment */}
          <div className=" border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
             <DashboardTransition />
          </div>
        </div>

        {/* Right Sidebar (1 Column wide) */}
        <div className="xl:col-span-1 space-y-6">
          
          {/* Real-time Users Card */}
          <div className=" border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Active Users (30m)
              </p>
              <h1 className="text-3xl font-extrabold text-slate-900 mt-1">21,500</h1>
            </div>

            <div className="mt-6 h-[200px]">
              <UserCharts />
            </div>
          </div>

          {/* Top Products Card */}
          <div className=" border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <TopProducts />
          </div>

          {/* Quick Action/Support Card - Adds "Admin" feel */}
          <div className="p-5 bg-green-600 rounded-2xl text-white shadow-lg ">
            <h3 className="font-bold text-lg">System Update</h3>
            <p className="text-indigo-100 text-xs mt-1">New features are available for your store.</p>
            <button className="mt-4 w-full py-2 text-green-400  bg-green-100 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors">
              View Changelog
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Page;