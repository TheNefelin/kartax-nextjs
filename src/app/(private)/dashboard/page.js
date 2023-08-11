import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  console.log("**********************************")
  console.log(session)

  if (!session) {
    redirect("/iniciarSesion?callbackUrl=/dashboard")
  }

  return (
    <div>Dashboard</div>
  )
}
