import Link from 'next/link'

export default function AdminSidebar() {
  return (
    <aside style={{ width: 220, padding: 12, borderRight: '1px solid #eee' }}>
      <h4>Admin</h4>
      <ul>
        <li><Link href="/admin">Dashboard</Link></li>
        <li><Link href="/admin/products">Products</Link></li>
      </ul>
    </aside>
  )
}
