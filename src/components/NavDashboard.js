import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"
//css
import styles from "@/css/NavDashboard.module.css"
//components
import BurgerBtn from "@/components/BurgerBtn"

export default function NavDashboard() {
  return (
    <span className={styles.menu}>
      <div className={styles.burger}>
        <BurgerBtn isClick={false}></BurgerBtn>
      </div>
      <FontAwesomeIcon icon={faUser} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faUser} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faUser} className={styles.icon}></FontAwesomeIcon>
      <Link href={"/dashboard/resume"}>OOOTRA PRUEBA</Link>
      <Link href={"/dashboard/resume"}>OOOTRA PRUEBA</Link>
    </span>
  )
}
