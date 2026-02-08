"use client";
import AdminCard from "@/components/admin/AdminCard";
import React from "react";

const page = () => {
  return (
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
  );
};

export default page;
