import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingBag, Heart, Star, ShieldCheck, Truck, RefreshCcw } from "lucide-react";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) return notFound();

  const discountPercentage =
    product.discount && product.price
      ? Math.round((product.discount / product.price) * 100)
      : 0;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
              {discountPercentage > 0 && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {discountPercentage}% OFF
                </span>
              )}
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 ">
              {product.images.map((img, i) => (
                <button key={i} className="relative w-20 h-20 shrink-0 rounded-md border-2 border-transparent hover:border-green-500 overflow-hidden bg-gray-50">
                  <Image src={img} alt="thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-8 space-y-6">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm font-medium">(24 verified reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4 border-b border-gray-100 pb-6">
              <span className="text-4xl font-bold text-gray-900">৳{product.finalprice}</span>
              {product.discount && (
                <span className="text-xl text-gray-400 line-through">৳{product.price}</span>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                product.unlimited || product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {product.unlimited ? "In Stock" : product.stock > 0 ? `${product.stock} Units Left` : "Out of Stock"}
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 active:scale-95 transition-all shadow-md">
                  <ShoppingBag size={20} /> Add to Cart
                </button>
                <button className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                  <Heart size={20} className="group-hover:text-red-500 transition-colors" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <Truck size={18} className="text-green-600" />
                <span className="text-xs font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ShieldCheck size={18} className="text-green-600" />
                <span className="text-xs font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <RefreshCcw size={18} className="text-green-600" />
                <span className="text-xs font-medium">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}