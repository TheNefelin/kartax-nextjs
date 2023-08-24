import Link from "next/link"
//css
import styles from "@/css/Footer.module.css"
import style_link from "@/css/LinkB.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={style_link.link} href={"https://www.francisco-dev.cl/"}>© 2023 Francisco Dev</Link>
      <p>|</p>
      <p>Todos los derechos reservados</p>
    </footer>
  )
}
