"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useState } from "react";

const ProductQuickView = ({ product }) => {
  const { price, category, finalprice, name, discount, stock, description } =
    product;

    const [count,setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }

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
            <p className="text-gray-500">
              {description.slice(0, 100)}
              {description.length > 100 ? "..." : ""}
            </p>
          </div>
          <Separator className="bg-gray-500 opacity-10" />
          <div className=" flex items-center justify-between">
            <div className=" relative">
              <Button onClick ={handleDecrement} className="absolute bg-gray-200 w-6 h-6 place-items-center flex p-2 rounded-full top-1.5 left-2">
                -
              </Button>
              <Input
                type="number"
                value={count}
                min={1}
                className="border border-black/10  text-center p-4 bg-white  rounded-full w-28 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
              />

              <Button
              onClick={handleIncrement}
                size="icon"
                className="absolute bg-gray-200 w-6 h-6 place-items-center flex p-2 rounded-full top-1.5 right-2"
              >
                +
              </Button>
            </div>
            <div className="flex-1 flex justify-evenly">
              <Button variant="outline" className="bg-green-500 text-white">Add to cart</Button>
              <Button>
                <Heart size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ProductQuickView;
