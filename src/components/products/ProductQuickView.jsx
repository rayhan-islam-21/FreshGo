"use client"

import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ProductQuickView = ({product}) => {

    const {price,category,finalPrice,name,discount} = product

    return (
        <DialogContent className="min-w-3xl bg-white rounded-xl shadow-2xl border-0">
            <div className="grid md:grid-cols-2 gap-6">
                <div className=" bg-amber-300">
                    <Image 
                    src={product.images[0]}
                    alt="product image"
                    width={100}
                    height={100}
                    className="w-full object-center object-cover "
                    />
                </div>
                <div className="bg-red-500">
                    <h2 className="text-xl">{name}</h2>
                </div>
            </div>
        </DialogContent>
    );
};

export default ProductQuickView;