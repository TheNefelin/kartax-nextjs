import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import MyLoading from "@/components/MyLoading"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  console.log("**********************************")
  console.log(session)

  if (!session) {
    redirect("/iniciarSesion?callbackUrl=/dashboard")
  }

  return (
    <Suspense fallback={<MyLoading></MyLoading>}>
      {session && <div>Dashboard</div>}
    </Suspense>
  )
}
