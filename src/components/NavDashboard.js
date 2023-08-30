"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 
{ 
  faHome,
  faCashRegister,
  faUserGear, 
  faKey, 
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
import { useState } from "react"

export default function NavDashboard() {
  const [burgerState, setBurgerState] = useState(false)

  const menu_css = !burgerState? styles.menu : `${styles.menu} ${styles.menu_active}` 

  const burger_click = () => {
    setBurgerState(!burgerState)
  }

  const item_click = () => {
    setBurgerState(false)
  }

  return (
    <span className={menu_css}>
      <div onClick={burger_click} className={styles.burger}>
        <BurgerBtn isClick={burgerState}></BurgerBtn>
      </div>

      <hr></hr>

      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faHome} className={styles.icon}>asd</FontAwesomeIcon>
        <p>Resumen</p>
      </Link>      
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faDesktop} className={styles.icon}>asd</FontAwesomeIcon>
        <p>Resumen</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faMobileScreenButton} className={styles.icon}></FontAwesomeIcon>
        <p>App</p>
      </Link>

      <hr></hr>

      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faCashRegister} className={styles.icon}></FontAwesomeIcon>
        <p>Caja</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faChartLine} className={styles.icon}></FontAwesomeIcon>
        <p>Estadística</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faBarcode} className={styles.icon}></FontAwesomeIcon>
        <p>Etiquetas</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faPencil} className={styles.icon}></FontAwesomeIcon>
        <p>Negocios</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faUsersGear} className={styles.icon}></FontAwesomeIcon>
        <p>Usuarios</p>
      </Link>

      <hr></hr>

      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faUserGear} className={styles.icon}></FontAwesomeIcon>
        <p>Usuario</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faKey} className={styles.icon}></FontAwesomeIcon>
        <p>Contraseña</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faGears} className={styles.icon}></FontAwesomeIcon>
        <p>Configuración</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faCircleQuestion} className={styles.icon}></FontAwesomeIcon>
        <p>...</p>
      </Link>

      <hr></hr>

      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon}></FontAwesomeIcon>
        <p>XXX</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faSquarePollVertical} className={styles.icon}></FontAwesomeIcon>
        <p>XXX</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faGear} className={styles.icon}></FontAwesomeIcon>
        <p>XXX</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faTruck} className={styles.icon}></FontAwesomeIcon>
        <p>XXX</p>
      </Link>
      <Link onClick={item_click} className={styles.link} href={"/dashboard/resume"}>
        <FontAwesomeIcon icon={faPalette} className={styles.icon}></FontAwesomeIcon>
        <p>XXX</p>
      </Link>

    </span>
  )
}
