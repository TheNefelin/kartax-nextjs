import styles from "./navApp.module.css"
import Image from "next/image"

import logo from "@/img/imgApp/logo.png"
export default function NavApp() {
  return (
    <div>
      <section class="navBar-contenedor">
        <a href="/" class="navBar-logo">
          <Image
            src={logo}
            height={50}
            width={50}
          />
          <h1>{"Kartax"}</h1>
        </a>
        <div className={styles.navBtn}>
          <div className={styles.navBarA}></div>
          <div className={styles.navBarB}></div>
          <div className={styles.navBarC}></div>
        </div>
        <div class="navBar-links">
          <a id="RRSS">RRSS</a>
          <a href="/iniciarSesion">Iniciar Sesión</a>
          <a href="/registrarse">Registrarse</a>
          <a href="/encuesta">Encuesta</a>
        </div>
      </section>
    </div>
  )
}
