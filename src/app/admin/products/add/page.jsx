import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-between p-5 ">
      <div>
        <h1 className="text-lg font-medium">Add New product</h1>
      </div>
      <div className="flex items-center">
        <Button size="sm" variant="outline" className="bg-[#4EA674] cursor-pointer hover:bg-[#5fcf90] text-white">Publish Product</Button>
      </div>
    </div>
  );
};

export default page;
