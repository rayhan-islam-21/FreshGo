import AdminSidebar from '../../components/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <html>
      <body>
        <div style={{ display: 'flex' }}>
          <AdminSidebar />
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      </body>
    </html>
  )
}
