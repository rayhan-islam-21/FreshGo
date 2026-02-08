import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Filter, ArrowUpRight, Search, MoreHorizontal } from "lucide-react";
import Link from "next/link";

const transactions = [
  { no: "1.", id: "#6545", date: "01 Oct | 11:29 am", status: "Paid", amount: "$64" },
  { no: "2.", id: "#5412", date: "01 Oct | 11:29 am", status: "Pending", amount: "$557" },
  { no: "3.", id: "#6622", date: "01 Oct | 11:29 am", status: "Paid", amount: "$156" },
  { no: "4.", id: "#6462", date: "01 Oct | 11:29 am", status: "Paid", amount: "$265" },
  { no: "5.", id: "#6462", date: "01 Oct | 11:29 am", status: "Paid", amount: "$265" },
];

const DashboardTransition = () => {
  return (
    <div className="w-full  border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* --- Section Header --- */}
      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Transactions</h1>
          <p className="text-xs text-gray-500 font-medium">Monitoring your latest store activity</p>
        </div>
        
        <div className="flex items-center gap-2">
           <div className="relative group hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 group-focus-within:text-gray-900 transition-colors" />
            <input 
              placeholder="Search..." 
              className="pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-gray-200 outline-none w-48 transition-all"
            />
          </div>
          <Button variant="outline" className="h-9 rounded-lg border-gray-200 text-gray-600 hover:bg-gray-50 gap-2 font-semibold">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* --- Table Section --- */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              <TableHead className="w-16 text-center font-bold text-gray-400 text-xs uppercase tracking-wider">No</TableHead>
              <TableHead className="font-bold text-gray-700">Customer Id</TableHead>
              <TableHead className="font-bold text-gray-700">Order Date</TableHead>
              <TableHead className="font-bold text-gray-700">Status</TableHead>
              <TableHead className="text-right font-bold text-gray-700 pr-8">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((t) => (
              <TableRow key={t.no} className="group hover:bg-slate-50/50 transition-colors cursor-default border-b border-gray-50 last:border-0">
                <TableCell className="text-center font-medium text-gray-400">{t.no}</TableCell>
                <TableCell className="font-mono text-sm font-semibold text-gray-600">{t.id}</TableCell>
                <TableCell className="text-sm text-gray-500">{t.date}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide border ${
                      t.status === "Paid"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-amber-50 text-amber-700 border-amber-100"
                    }`}
                  >
                    <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${t.status === "Paid" ? "bg-emerald-500" : "bg-amber-500"}`} />
                    {t.status}
                  </span>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <span className="font-bold text-gray-900">{t.amount}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* --- Footer Action --- */}
      <div className="p-4 bg-gray-50/30 border-t border-gray-100 flex justify-center sm:justify-end">
        <Link 
          href="/details" 
          className="group flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-all"
        >
          View Detailed Analytics
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardTransition;