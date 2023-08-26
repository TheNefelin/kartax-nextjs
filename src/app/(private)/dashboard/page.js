import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"
//css
import styles from "./page.module.css"
//components
import BurgerBtn from "@/components/BurgerBtn"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
 
  if (!session) {
    redirect("/iniciarSesion?callbackUrl=/dashboard")
  }

  return (
    <>
      {session &&
        <section className={styles.dashboard}>
          <span>
            <div className={styles.burger}>
              <BurgerBtn isClick={false}></BurgerBtn>
            </div>
            <FontAwesomeIcon icon={faUser} className={styles.icon}></FontAwesomeIcon>
          </span>
          <div>
            contenedor
          </div>
        </section>
      }
    </>
  )
}
