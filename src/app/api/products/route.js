import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();

    const product = await prisma.product.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        category: data.category,        // match your model: "vegetable"
        price: parseFloat(data.price),  // convert to Float
        discount: data.discount ? parseInt(data.discount) : null, // convert to Int
        stock: data.stock ? parseInt(data.stock) : null,          // convert to Int
        unlimited: data.unlimited,
        images: images,                  // must be "images" not "productImages"
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
};
