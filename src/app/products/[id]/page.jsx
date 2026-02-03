export default function ProductPage({ params }) {
  const { id } = params
  return (
    <article>
      <h2>Product {id}</h2>
      <p>Product details placeholder.</p>
    </article>
  )
}
