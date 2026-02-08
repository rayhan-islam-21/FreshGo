"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MoreHorizontal, ArrowUpRight, TrendingUp } from "lucide-react";

const data = [
  { day: "Sun", value: 12000 },
  { day: "Mon", value: 20000 },
  { day: "Tue", value: 15000 },
  { day: "Wed", value: 30000 },
  { day: "Thu", value: 14000 },
  { day: "Fri", value: 25000 },
  { day: "Sat", value: 20000 },
];

const metrics = [
  { label: "Customers", value: "52,420", growth: "+12%" },
  { label: "Total Products", value: "3,512", growth: "+2%" },
  { label: "Stock Products", value: "2,500", growth: "-1%" },
  { label: "Out of Stock", value: "512", growth: "+5%" },
  { label: "Revenue", value: "$250,000", growth: "+18%" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-800 p-3 rounded-xl shadow-2xl">
        <p className="text-gray-400 text-xs font-medium mb-1 uppercase tracking-wider">
          {payload[0].payload.day}
        </p>
        <p className="text-white text-lg font-bold">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function WeeklyReportDashboard() {
  const [activeMetric, setActiveMetric] = useState("Customers");
  const [weekFilter, setWeekFilter] = useState("This week");

  return (
    <div className="w-full max-w-5xl p-8  rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-2xl font-bold  tracking-tight">
            Weekly Performance
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Real-time data for the current period
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-2xl border border-gray-100">
          {["This week", "Last week"].map((week) => (
            <button
              key={week}
              onClick={() => setWeekFilter(week)}
              className={`px-5 py-2 text-sm font-semibold transition-all duration-200 rounded-xl ${
                weekFilter === week
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {week}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-10">
        {metrics.map((metric) => (
          <button
            key={metric.label}
            onClick={() => setActiveMetric(metric.label)}
            className={`flex flex-col items-start p-4 rounded-2xl transition-all duration-300 text-left ${
              activeMetric === metric.label 
                ? "bg-green-50 ring-1 ring-green-100" 
                : "hover:bg-gray-50"
            }`}
          >
            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-2">
              {metric.label}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-bold ${
                activeMetric === metric.label ? "text-green-700" : "text-gray-900"
              }`}>
                {metric.value}
              </span>
            </div>
            <div className={`mt-2 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
              metric.growth.startsWith('+') ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {metric.growth}
            </div>
          </button>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="w-full h-72 relative py-3 mt-4  ">
        
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F3F4F6" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
              dy={15}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              tickFormatter={(val) => `${val / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E5E7EB', strokeWidth: 2 }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#chartGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer / Insight */}
      <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-gray-500">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span>Setting a new record for {activeMetric.toLowerCase()} this week!</span>
        </div>
        <button className="text-green-600 font-semibold hover:underline">
          View Full Report
        </button>
      </div>
    </div>
  );
}