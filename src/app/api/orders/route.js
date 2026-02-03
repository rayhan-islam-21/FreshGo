export async function GET(req) {
  return new Response(JSON.stringify({ orders: [] }), { status: 200 })
}
