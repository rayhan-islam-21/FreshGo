import prisma from "@/lib/prisma"

export const POST = async (req) => {
  const body = await req.json();
  const { cartId, product } = body

  const cart = await prisma.cart.findUnique({
    where: { cartId }
  })
  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        cartId
      }
    })
  }

  await prisma.cartItem.create({
    data: {
      cartId,
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      finalprice: product.finalprice,
      quantity: product.quantity,
    }
  })

  // Return updated cart
  const updatedCart = await prisma.cart.findUnique({
    where: { cartId },
    include: { items: true },
  });

  return Response.json(updatedCart);



}




const  GET = async(req)=> {
  const { searchParams } = new URL(req.url);
  const cartId = searchParams.get("cartId");

  const cart = await prisma.cart.findUnique({
    where: { cartId },
    include: { items: true },
  });

  return Response.json(cart);
}

export default GET;