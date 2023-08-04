import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faUser, faKey } from "@fortawesome/free-solid-svg-icons"

//css
import style_form from "@/css/Form.module.css"
import style_btn from "@/css/Btn.module.css"
import style_linkB from "@/css/LinkB.module.css"

export default function CheckIn() {
  return (
    <form className={style_form.login} >
      <h2>Registrarse</h2>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faCheckCircle} />
        <input className={style_form.login_input} type="text" placeholder="Nombres" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faCheckCircle} />
        <input className={style_form.login_input} type="text" placeholder="Apellidos" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faUser} />
        <input className={style_form.login_input} type="text" placeholder="Email" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faUser} />
        <input className={style_form.login_input} type="text" placeholder="Usuario" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faKey} />
        <input className={style_form.login_input} type="password" placeholder="contraseña" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faKey} />
        <input className={style_form.login_input} type="password" placeholder="confirmar contraseña" />
      </div>

      <input className={`${style_btn.btn} ${style_form.btn}`} type="button" value="Registrarse" />

      <div className={style_form.links}>
        <Link className={style_linkB.link} rel="prefetch" href={"/iniciarSesion"}>iniciar sesión</Link>
        <Link className={style_linkB.link} rel="prefetch" href={"#"}>recuperar contraseña</Link>
      </div>
    </form>
  )
}
