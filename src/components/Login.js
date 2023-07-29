import styles from "./Login.module.css"
import style_linkB from "./LinkB.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faUser, faKey, faXmark } from '@fortawesome/free-solid-svg-icons'

import Btn from "./Btn"

export default function Login() {
  return (
    <section className={styles.login}>
        <FontAwesomeIcon className={styles.login_close} icon={faXmark}/>
        <h2>Bienvenido</h2>
        <div>
          <FontAwesomeIcon className={styles.login_icon} icon={faUser}/>
          <input className={styles.login_input} type="text" placeholder="Email / Usuario"/>
        </div>
        <div>
          <FontAwesomeIcon className={styles.login_icon} icon={faKey}/>
          <input className={styles.login_input} type="password" placeholder="contraseña"/>
        </div>
        
        <Btn text="Iniciar Sesión" usuario="NEFELIN" clave="123456" ></Btn>

        <div className={styles.links}>
          <Link className={style_linkB.link} href={"#"}>regístrate</Link>
          <Link className={style_linkB.link} href={"#"}>recuperar contraseña</Link>
        </div>
    </section>
  )
}
