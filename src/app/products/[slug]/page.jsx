import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingBag, Heart, Star } from "lucide-react";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  // Fetch product from Prisma
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) return notFound();

  // Calculate discount percentage
  const discountPercentage =
    product.discount && product.price
      ? Math.round((product.discount / product.price) * 100)
      : 0;

  return (
    <section className="py-10 ">
      <div className="max-w-7xl  mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Images */}
        <div className="space-y-4">
          {product.images.map((img, i) => (
            <div key={i} className="relative aspect-square w-full shadow-sm  rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={`${product.name} image ${i + 1}`}
                fill
                className="object-contain p-2"
              />
              {i === 0 && discountPercentage > 0 && (
                <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                  -{discountPercentage}%
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4">
          <p className="text-sm text-gray-400 font-medium">{product.category}</p>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-900">৳{product.finalprice}</span>
            {product.discount && (
              <span className="text-sm text-gray-400 line-through">৳{product.price}</span>
            )}
          </div>

          {/* Stock & Delivery */}
          <p className={`text-sm font-medium ${product.unlimited || product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
            {product.unlimited
              ? "Unlimited Stock"
              : product.stock > 0
              ? `${product.stock} in stock`
              : "Out of stock"}
          </p>
          <p className="text-sm text-gray-500">Delivery in 2-5 business days</p>

          {/* Ratings */}
          <div className="flex items-center text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
            ))}
            <span className="ml-2 text-gray-500 text-sm">(24 Reviews)</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              <ShoppingBag size={18} /> Add to Cart
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
              <Heart size={18} /> Add to Wishlist
            </button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
