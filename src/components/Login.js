'use client'

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

//css
import style_form from "@/css/Form.module.css"
import style_btn from "@/css/Btn.module.css"
import style_linkB from "@/css/LinkB.module.css"

export default function Login() {
  const router = useRouter()
  const [newUsuario, setNewUsuario] = useState({
    usuario: "",
    clave: ""
  })

  console.log(newUsuario)

  // const res = await fetch("https://kartax-api-py.vercel.app/usuario-logearse", {
  //   cache: "no-store",
  //   method: "POST",
  //   headers: {
  //     "Accept": "application/json",
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: "grant_type=&username=nefelin&password=123456&scope=&client_id=&client_secret="
  // })
  // const data = await res.json()
  // const {access_token} = data

  // const res2 = await fetch("https://kartax-api-py.vercel.app/token", {
  //   headers: {
  //     "Accept": "application/json",
  //     "Authorization": `Bearer ${access_token}`
  //   }
  // })

  // const data2 = await res2.json()
  // console.log("----------------------------------------------")
  // console.log(data2)

  return (
    <form className={style_form.login} >
      <h2>Bienvenido</h2>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faUser} />
        <input onChange={(e) => {setNewUsuario({...newUsuario, usuario: e.target.value})}} className={style_form.login_input} type="text" placeholder="Email / Usuario" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faKey} />
        <input onChange={(e) => {setNewUsuario({...newUsuario, clave: e.target.value})}} className={style_form.login_input} type="password" placeholder="contraseña" />
      </div>

      <input className={`${style_btn.btn} ${style_form.btn}`} type="button" value="Iniciar Sesión"/>
 
      <div className={style_form.links}>
        <Link className={style_linkB.link} rel="prefetch" href={"/registrarse"}>registrarse</Link>
        <Link className={style_linkB.link} rel="prefetch" href={"#"}>recuperar contraseña</Link>
      </div>
    </form>
  )
}
