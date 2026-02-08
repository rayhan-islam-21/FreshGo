"use client";

import AdminCard from "@/components/admin/AdminCard";
import WeeklyReportDashboard from "@/components/admin/Charts";
import DashboardTransition from "@/components/admin/DashboardTransition";
import UserCharts from "@/components/admin/UserCharts";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 mt-4">
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

      {/* Main Dashboard */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6 px-5">
        {/* Chart Section */}
        <div className="lg:col-span-3">
          <WeeklyReportDashboard />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="shadow-sm rounded-xl p-4 ">
            <p className="text-sm text-gray-500">
              Users in last 30 minutes
            </p>
            <h1 className="text-2xl font-bold mt-1">21.5k</h1>

            <div className="mt-4">
              <UserCharts />
            </div>
          </div>
        </div>
      </div>
      {/* transition */}
      <div className="px-5 mt-8">
        <DashboardTransition/>
      </div>

    </div>
  );
};

export default Page;
