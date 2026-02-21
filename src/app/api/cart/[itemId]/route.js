import prisma from "@/lib/prisma";

export async function DELETE(req, { params }) {
  const { itemId } = params;

  await prisma.cartItem.delete({
    where: { id: itemId },
  });

  return Response.json({ message: "Item deleted" });
}