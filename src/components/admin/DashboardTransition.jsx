import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Filter, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"; // Recommended: shadcn Badge component

const transactions = [
  { no: "1.", id: "#6545", date: "01 Oct | 11:29 am", status: "Paid", amount: "$64" },
  { no: "2.", id: "#5412", date: "01 Oct | 11:29 am", status: "Pending", amount: "$557" },
  { no: "3.", id: "#6622", date: "01 Oct | 11:29 am", status: "Paid", amount: "$156" },
  { no: "4.", id: "#6462", date: "01 Oct | 11:29 am", status: "Paid", amount: "$265" },
  { no: "5.", id: "#6462", date: "01 Oct | 11:29 am", status: "Paid", amount: "$265" },
];

const DashboardTransition = () => {
  return (
    <div className="w-full px-6 py-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Transactions</h1>
          <p className="text-sm text-muted-foreground">Recent activity from your store</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 border-gray-200 hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Table Section */}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              <TableHead className="w-[60px]">No</TableHead>
              <TableHead>Customer Id</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((t) => (
              <TableRow key={t.no} className="hover:bg-gray-50/50 transition-colors">
                <TableCell className="font-medium text-gray-500">{t.no}</TableCell>
                <TableCell className="font-semibold text-gray-700">{t.id}</TableCell>
                <TableCell className="text-gray-600">{t.date}</TableCell>
                <TableCell>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      t.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {t.status}
                  </span>
                </TableCell>
                <TableCell className="text-right font-bold text-gray-900">
                  {t.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer / View All */}
      <div className="mt-4 flex justify-end">
        <Link 
          href="/details" 
          className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-all hover:underline"
        >
          View all transactions
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardTransition;