import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
//css
import styles from "./page.module.css"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
 
  if (!session) {
    redirect("/iniciarSesion?callbackUrl=/dashboard")
  }

  return (
    <>
      {session &&
        <section>
          contenedor
        </section>
      }
    </>
  )
}
