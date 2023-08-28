import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 
{ 
  faUserGear, 
  faKey, 
  faBook, 
  faBarcode, 
  faGear, 
  faGears, 
  faTruck, 
  faPalette, 
  faUsersGear, 
  faPencil,
  faDesktop,
  faSquarePollVertical,
  faMobileScreenButton,
  faMapLocationDot,
  faChartLine,
  faCircleQuestion
} from "@fortawesome/free-solid-svg-icons"
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
      <FontAwesomeIcon icon={faUserGear} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faKey} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faBook} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faBarcode} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faGear} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faGears} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faTruck} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPalette} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faUsersGear} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPencil} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faDesktop} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faSquarePollVertical} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faMobileScreenButton} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faChartLine} className={styles.icon}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCircleQuestion} className={styles.icon}></FontAwesomeIcon>
      <Link href={"/dashboard/resume"}>OOOTRA PRUEBA</Link>
      <Link href={"/dashboard/resume"}>OOOTRA PRUEBA</Link>
    </span>
  )
}
