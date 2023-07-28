import styles from "./Login.module.css"
import Link from "next/link"

export default function Login() {
  return (
    <section>
        <h4>Bienvenido</h4>
        <input className={styles.login__input} type="text" placeholder="Email / Usuario"/>
        <input type="password" placeholder="contraseña"/>
        <input type="button" value="Iniciar Sesión"/>
        <Link href={"#"}>recuperar contraseña</Link>
    </section>
  )
}
