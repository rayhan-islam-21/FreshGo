"use client";
import AdminCard from "@/components/admin/AdminCard";
import WeeklyReportDashboard from "@/components/admin/Charts";
import React from "react";

const page = () => {
  return (
    <div>
        <div className="flex items-center justify-between gap-12 px-5 mt-4">
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
        title="Orders"
        stats={{ amount: 320, action: "Up", percentage: 10 }}
        previous={{ amount: 350 }}
      />
    </div>

    <div className="mt-12 grid grid-cols-4  h-screen overflow-hidden px-5">
      <div className="col-span-3">
        <WeeklyReportDashboard/>
      </div>
      <div className="col-span-1" 
      >
        <h1>Rayhan</h1>
      </div>
    </div>
    
    </div>
  );
};

export default page;
