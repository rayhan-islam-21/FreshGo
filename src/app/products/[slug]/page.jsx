import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

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
    <ProductClient 
      product={product} 
      discountPercentage={discountPercentage} 
    />
  );
}