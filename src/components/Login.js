import styles from "@/css/Login.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

//componentes
import Btn from "./Btn"
//css
import style_linkB from "@/css/LinkB.module.css"

export default function Login() {
  return (
    <section className={styles.login}>
      <h2>Bienvenido</h2>
      <div>
        <FontAwesomeIcon className={styles.login_icon} icon={faUser} />
        <input className={styles.login_input} type="text" placeholder="Email / Usuario" />
      </div>
      <div>
        <FontAwesomeIcon className={styles.login_icon} icon={faKey} />
        <input className={styles.login_input} type="password" placeholder="contraseña" />
      </div>

      <Btn text="Iniciar Sesión" ></Btn>

      <div className={styles.links}>
        <Link className={style_linkB.link} rel="prefetch" href={"#"}>regístrate</Link>
        <Link className={style_linkB.link} rel="prefetch" href={"#"}>recuperar contraseña</Link>
      </div>
    </section>
  )
}
