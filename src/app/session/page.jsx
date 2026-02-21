import { auth } from "@/lib/auth"

export default async function SessionPage() {
  const session = await auth()

  if (!session) {
    return <div>Not logged in</div>
  }

  return (
    <div>
      <h2>Logged In ✅</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}