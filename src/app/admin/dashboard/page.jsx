"use client"
import AdminCard from "@/components/admin/AdminCard";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-between gap-12 px-3 mt-4">
      <AdminCard
        title="Revenue"
        stats={{ amount: 12000, action: "Up", percentage: 12 }}
        previous={{ amount: 10000, currency: "$" }}
        onDetailsClick={() => console.log("View Revenue Details")}
      />

      <AdminCard
        title="Orders"
        stats={{ amount: 320, action: "Down", percentage: -8 }}
        previous={{ amount: 350 }}
        onDetailsClick={() => console.log("View Orders")}
      />

      <AdminCard
        title="Users"
        stats={{ amount: 1200 }}
        previous={{ amount: 1100 }}
      />
    </div>
  );
};

export default page;
