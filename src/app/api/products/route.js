import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log("Incoming Data:", data);
    const product = await prisma.product.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        category: data.category,
        price: parseFloat(data.price),
        finalPrice: parseFloat(data.finalPrice),
        discount: data.discount ? parseInt(data.discount) : null,
        stock: data.stock ? parseInt(data.stock) : null,
        unlimited: !!data.unlimited,
        images: Array.isArray(data.images) ? data.images : [],
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json(
      { error: "Failed to create product", details: error.message },
      { status: 500 }
    );
  }
};
