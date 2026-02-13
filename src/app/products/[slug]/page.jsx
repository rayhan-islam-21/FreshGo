import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  console.log("Slug:", slug);

  const product = await prisma.product.findUnique({
    where: { slug },
  });

  return <div>{product?.slug}</div>;
}
