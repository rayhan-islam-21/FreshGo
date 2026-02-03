export default function ProductCard({ product }) {
  return (
    <article style={{ border: '1px solid #ddd', padding: 12 }}>
      <h4>{product?.name}</h4>
      <p>${product?.price}</p>
    </article>
  )
}
