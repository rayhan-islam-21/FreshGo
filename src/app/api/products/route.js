export async function GET(req) {
  const products = [
    { id: 1, name: 'Apple', price: 1.2 },
    { id: 2, name: 'Banana', price: 0.8 },
  ]
  return new Response(JSON.stringify(products), { status: 200 })
}
