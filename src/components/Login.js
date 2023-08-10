'use client'

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
//css
import style_form from "@/css/Form.module.css"
import style_btn from "@/css/Btn.module.css"
import style_linkB from "@/css/LinkB.module.css"

export default function Login() {
  const router = useRouter()

  //state thaht validate
  const [validate, setValidate] = useState({
    err_estado: false,
    err_msge: ""
  })

  // state for my credentials login access
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  //validate credential on api folder auth
  const loginAcces = async (e) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      username: credentials.username,
      password: credentials.password,
      redirect: false
    })

    console.log(result)
    if (result?.error) {
      console.error('Error de autenticación:', result.error);
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <form className={style_form.login} onSubmit={loginAcces}>
      <h2>Bienvenido</h2>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faUser} />
        <input onChange={(e) => { setCredentials({ ...credentials, username: e.target.value }) }} className={style_form.login_input} type="text" placeholder="Email / Usuario" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faKey} />
        <input onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }} className={style_form.login_input} type="password" placeholder="contraseña" />
      </div>

      <input className={`${style_btn.btn} ${style_form.btn}`} type="submit" value="Iniciar Sesión" />
      {validate.err_estado && <p className={style_form.err}>{validate.err_msge}</p>}

      <div className={style_form.links}>
        <Link className={style_linkB.link} rel="prefetch" href={"/registrarse"}>registrarse</Link>
        <Link className={style_linkB.link} rel="prefetch" href={"#"}>recuperar contraseña</Link>
      </div>
    </form>
  )
}

