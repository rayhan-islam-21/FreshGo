"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

const ProductQuickView = ({ product }) => {
  const { price, category, finalprice, name, discount, stock, description } =
    product;

  return (
    <DialogContent className="min-w-3xl bg-white rounded-xl shadow-2xl border-0">
      <div className="grid md:grid-cols-2 gap-6">
        <div className=" ">
          <Image
            src={product.images[0]}
            alt="product image"
            width={100}
            height={100}
            className="w-full object-center object-cover "
          />
        </div>
        <div className="flex gap-3 flex-col">
          <h2 className="text-xl flex items-center justify-start gap-2">
            {name}
            <span>
              {stock > 0 ? (
                <Badge className="bg-green-500 text-white text-xs bord">
                  In Stock
                </Badge>
              ) : (
                <Badge className="bg-red-500 text-white">Out of Stock</Badge>
              )}
            </span>
          </h2>
          <div className="flex items-center">
            <h2 className="text-xl text-gray-400 line-through">৳{price} </h2>
            <h1 className="text-2xl text-green-600 font-black mr-2 ml-1">
              ৳{finalprice}
            </h1>
            <Badge className="bg-red-500 text-gray-100">{discount}% off</Badge>
          </div>
          <Separator className="bg-gray-500 opacity-10" />
          <div>
            <p className="text-gray-500">{description.slice(0, 100)}
              {description.length > 100 ? "..." : ""}
            </p>
          </div>
          <Separator className="bg-gray-500 opacity-10" />
        </div>
      </div>
    </DialogContent>
  );
};

export default ProductQuickView;
