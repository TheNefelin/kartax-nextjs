'use client'

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import route from "@/app/api/auth/[...nextauth]/route"
//utils
import FetchingApi from "@/utils/fetchingApi"
//css
import style_form from "@/css/Form.module.css"
import style_btn from "@/css/Btn.module.css"
import style_linkB from "@/css/LinkB.module.css"

export default function Login() {
  const router = useRouter()
  const fetchingApi = new FetchingApi()

  const [newLogin, setNewLogin] = useState({
    usuario: null,
    clave: null
  })

  const [validate, setValidate] = useState({
    err_estado: false,
    err_msge: ""
  })

  const loginAcces = async (e) => {
    e.preventDefault()

    const res = await fetchingApi.post_login(newLogin.usuario, newLogin.clave)
    const data = await res.json()

    if (res.ok) {
      const prueba1 = await fetchingApi.get_token(data.access_token)
      const prueba2 = await prueba1.json()
      console.log(prueba2)

      router.push("/panel")
    } else {
      setValidate({
        ...validate,
        err_estado: true,
        err_msge: data.detail
      })
    }
  }

  return (
    <form className={style_form.login} onSubmit={loginAcces}>
      <h2>Bienvenido</h2>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faUser} />
        <input onChange={(e) => { setNewLogin({ ...newLogin, usuario: e.target.value }) }} className={style_form.login_input} type="text" placeholder="Email / Usuario" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faKey} />
        <input onChange={(e) => { setNewLogin({ ...newLogin, clave: e.target.value }) }} className={style_form.login_input} type="password" placeholder="contraseña" />
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
