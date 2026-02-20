"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Minus, Plus, Star, ArrowRight, Leaf } from "lucide-react";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProductQuickView = ({ product, onAddToCart, onAddToWishlist }) => {
  const router = useRouter();
  const { slug, price, category, finalprice, name, discount, stock, description, images } = product;

  const [weight, setWeight] = useState(1); // Default 1kg
  const [activeImg, setActiveImg] = useState(0);

  const handleIncrement = () => {
    if (weight < stock) setWeight((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setWeight((prev) => Math.max(1, prev - 1));
  };

  const handleReadMore = () => {
    router.push(`/products/${slug}`);
  };

  const totalPrice = (finalprice * weight).toLocaleString();

  return (
    <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 overflow-hidden bg-white rounded-3xl border-none shadow-2xl max-h-[95vh] overflow-y-auto">
      <DialogTitle className="sr-only">{name} - Fresh Vegetables</DialogTitle>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative  p-4 md:p-8 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-emerald-100">
          <div className="relative aspect-square w-full bg-white rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src={images[activeImg]}
              alt={name}
              fill
              className="object-cover p-6 transition-transform duration-500 group-hover:scale-101"
              priority
            />
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 text-white border-none px-3 py-1 font-bold animate-bounce">
                {discount}% OFF
              </Badge>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={cn(
                  "relative h-16 w-16 min-w-[68px] rounded-xl border-2 transition-all bg-white overflow-hidden",
                  activeImg === idx ? "border-emerald-800 shadow-md scale-105" : "border-transparent opacity-60"
                )}
              >
                <Image src={img} alt={`${name} ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* --- Right: Content Section --- */}
        <div className="flex flex-col p-6 md:p-10">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-3 py-1 flex gap-1 items-center">
                <Leaf size={12} /> {category}
              </Badge>
              <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-full text-amber-700 font-bold text-xs">
                <Star size={14} className="fill-amber-500 text-amber-500" />
                4.9 (Freshness Guaranteed)
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
              {name}
            </h2>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-black text-emerald-600 font-mono">৳{finalprice}</span>
              <span className="text-gray-500 font-medium">/ per kg</span>
              {discount > 0 && (
                <span className="text-lg text-gray-400 line-through ml-2">৳{price}</span>
              )}
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 mb-6 flex items-center justify-between">
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Availability</p>
                    <p className={cn("text-sm font-bold", stock > 0 ? "text-slate-700" : "text-red-500")}>
                        {stock > 0 ? `Fresh Stock: ${stock} kg available` : "Out of Season"}
                    </p>
                </div>
                {stock < 10 && stock > 0 && (
                    <Badge variant="destructive" className="animate-pulse">Limited Stock</Badge>
                )}
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Description</h4>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
              <Button 
                variant="link" 
                onClick={handleReadMore}
                className="p-0 h-auto text-emerald-600 font-bold flex items-center gap-1 hover:underline"
              >
                Full Details & Nutrition <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-10 pt-6 border-t border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-500">Select Weight</span>
                <span className="text-sm font-bold text-slate-900">Total: <span className="text-emerald-600 text-lg">৳{totalPrice}</span></span>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              {/* Weight Selector */}
              <div className="flex items-center border-2 border-slate-100 rounded-2xl p-1 bg-slate-50 w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDecrement}
                  disabled={weight <= 1}
                  className="h-12 w-12 rounded-xl text-slate-600 hover:bg-white"
                >
                  <Minus size={18} />
                </Button>
                <div className="flex flex-col items-center px-4 min-w-[60px]">
                    <span className="font-black text-lg text-slate-800 leading-none">{weight}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">kg</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleIncrement}
                  disabled={weight >= stock}
                  className="h-12 w-12 rounded-xl text-slate-600 hover:bg-white"
                >
                  <Plus size={18} />
                </Button>
              </div>

              <div className="flex gap-2 w-full">
                <Button 
                  onClick={() => onAddToCart?.(product, weight)}
                  disabled={stock === 0}
                  className="flex-1 h-14 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold gap-3 shadow-lg shadow-emerald-100 transition-all active:scale-95"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </Button>

                <Button 
                  onClick={() => onAddToWishlist?.(product)}
                  variant="outline" 
                  className="h-14 w-14 rounded-2xl border-slate-200 hover:bg-rose-50 hover:border-rose-100 hover:text-rose-500 transition-all group"
                >
                  <Heart size={22} className="group-active:fill-rose-500 transition-colors" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ProductQuickView;