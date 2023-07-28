import styles from "./Login.module.css"
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  return (
    <section className={styles.login}>
        <h2>Bienvenido</h2>
     
        <div>
          <FontAwesomeIcon className={styles.login_icon} icon={faUser}/>
          <input className={styles.login_input} type="text" placeholder="Email / Usuario"/>
        </div>
        <div>
          <FontAwesomeIcon className={styles.login_icon} icon={faKey}/>
          <input className={styles.login_input} type="password" placeholder="contraseña"/>
        </div>
        <div>
          <input className={styles.btn} type="button" value="Iniciar Sesión"/>
        </div>

        <Link href={"#"}>recuperar contraseña</Link>
    </section>
  )
}
