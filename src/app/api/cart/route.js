export async function GET(req) {
  return new Response(JSON.stringify({ items: [] }), { status: 200 })
}
