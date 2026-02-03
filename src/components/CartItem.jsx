export default function CartItem({ item }) {
  return (
    <div style={{ borderBottom: '1px solid #eee', padding: 8 }}>
      <strong>{item?.name}</strong>
      <div>Qty: {item?.quantity}</div>
    </div>
  )
}
