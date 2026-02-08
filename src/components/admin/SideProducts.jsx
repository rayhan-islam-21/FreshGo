import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Apple iPhone 13",
    itemNo: "#FXZ-4567",
    price: "$999.00",
    image: "/category-1.png",
  },
  {
    name: "Nike Air Jordan",
    itemNo: "#FXZ-4567",
    price: "$72.40",
    image: "/category-4.png",
  },
  {
    name: "T-shirt",
    itemNo: "#FXZ-4567",
    price: "$35.40",
    image: "/category-2.png",
  },
  {
    name: "Assorted Cross Bag",
    itemNo: "#FXZ-4567",
    price: "$80.00",
    image: "/category-3.png",
  },
];

const TopProducts = () => {
  return (
    <div className="w-full max-w-96  border border-gray-100 rounded-lg px-5 py-5 shadow-sm">
      {/* Header Area */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold  tracking-tight">
          Top Products
        </h2>
        <Link
          href="/all-products"
          className="text-xs font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
        >
          All product
        </Link>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#F8FAFC] border-none rounded-2xl py-2 pl-11 pr-4 text-[14px] focus:ring-2 focus:ring-slate-100 outline-none transition-all placeholder:text-slate-400 font-medium"
        />
      </div>

      {/* Product List */}
      <div className="flex flex-col">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                {/* Image Container */}
                <div className="h-10 w-10 rounded-full flex items-center justify-center overflow-hidden border border-gray-50 shadow-sm relative">
                  {/* Note: Ensure these images exist in your public folder */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover "
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="font-bold  text-[15px] leading-tight">
                    {product.name}
                  </span>
                  <span className="text-[12px] text-slate-400 font-medium">
                    Item: {product.itemNo}
                  </span>
                </div>
              </div>

              <div className="text-right font-bold  text-[16px] tracking-tight">
                {product.price}
              </div>
            </div>

            {/* Soft Divider */}
            {index !== products.length - 1 && (
              <div className="h-[1.5px] w-full bg-gray-50/80" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
