"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularProducts } from "@/store/slices/popularProductsSlice";
import Image from "next/image";
import { ShoppingBag, Heart, Eye, Star } from "lucide-react"; // Using lucide-react for icons
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ProductQuickView from "./ProductQuickView";

const PopularProducts = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state) => state.popularProducts,
  );

  const all = [...items];
  const popular10 = all.slice(0, 10);

  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, [dispatch]);

  if (loading)
    return (
      <div className="py-20 text-center text-gray-400">Loading products...</div>
    );
  if (error)
    return <div className="py-20 text-center text-red-500">{error}</div>;

  return (
    <section className="py-10 bg-white">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Popular Products</h2>
          <Link
            href="/categories"
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 transition"
          >
            View All <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Product Grid - Using a thin border-collapse style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 border-gray-100">
          {popular10.map((product) => (
            <Dialog key={product.id}>
              <div
                className="group border-2 relative p-4  rounded-lg border-gray-100 hover:shadow-lg transition-all hover:border-[#00B307] duration-300 z-10 hover:z-20 bg-white"
              >
                {/* Action Buttons (Visible on Hover) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2  transition-opacity duration-300 z-30">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="p-2 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-green-600 hover:text-white transition"
                  >
                    <Heart size={16} />
                  </button>
                  <DialogTrigger asChild>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="p-2 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-green-600 hover:text-white transition"
                    >
                      <Eye size={16} />
                    </button>
                  </DialogTrigger>
                </div>

                {/* Image Container */}
                <Link href={`/products/${product.slug}`}>
                  <div className="relative aspect-square w-full mb-4">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 font-medium">
                    {product.category}
                  </p>
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price & Cart Row */}
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">
                          ৳{product.finalprice}
                        </span>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ৳{product.oldPrice}
                          </span>
                        )}
                      </div>
                      {/* Stars */}
                      <div className="flex text-orange-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            fill={i < 4 ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="p-2.5 bg-gray-100 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </div>

            <ProductQuickView product={product} />
            </Dialog>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularProducts;
