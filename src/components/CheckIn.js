'use client'

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faUser, faKey } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRouter } from "next/navigation"
//utils
import FetchingApi from "@/utils/fetchingApi"
//css
import style_form from "@/css/Form.module.css"
import style_btn from "@/css/Btn.module.css"
import style_linkB from "@/css/LinkB.module.css"

export default function CheckIn() {
  const router = useRouter()
  const fetchingApi = new FetchingApi()

  const [newUser, setNewUser] = useState({
    nombres: null,
    apellidos: null,
    usuario: null,
    correo: null,
    clave: null
  })  

  const [validate, setValidate] = useState({
    err_estado: false,
    err_msge: "",
    clave: "",
  })

  const newSubmit = async (e) => {
    e.preventDefault()

    if (validarCampos()) {
      const res = await fetchingApi.post_register(newUser)

      if (res.ok) {
        router.push("/iniciarSesion")
      } else {
        const data = await res.json()
  
        setValidate({
          ...validate,
          err_estado: true,
          err_msge: data.detail
        })
      }
    }
  }

  const validarCampos = () => {
    if (!newUser.nombres || !newUser.apellidos || !newUser.usuario || !newUser.correo || !newUser.clave ){
      setValidate({
        ...validate,
        err_estado: true,
        err_msge: "Debes Completar Todos Los Campos"
      })
      return false 
    }
   
    if (newUser.clave !== validate.clave) {
      setValidate({
        ...validate,
        err_estado: true,
        err_msge: "Las Contraseñas no Coinciden"
      })   
      return false 
    }

    if (newUser.clave.length < 7) {
      setValidate({
        ...validate,
        err_estado: true,
        err_msge: "Las Contraseñas Debe Tener al Menos 7 Caracteres"
      })   
      return false 
    }

    return true
  }

  return (
    <form className={style_form.login} onSubmit={newSubmit}>
      <h2>Registrarse</h2>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faCheckCircle} />
        <input onChange={(e) => setNewUser({...newUser, nombres: e.target.value})} className={style_form.login_input} type="text" placeholder="Nombres" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faCheckCircle} />
        <input onChange={(e) => setNewUser({...newUser, apellidos: e.target.value})} className={style_form.login_input} type="text" placeholder="Apellidos" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faUser} />
        <input onChange={(e) => setNewUser({...newUser, correo: e.target.value})} className={style_form.login_input} type="email" placeholder="Email" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faUser} />
        <input onChange={(e) => setNewUser({...newUser, usuario: e.target.value})} className={style_form.login_input} type="text" placeholder="Usuario" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faKey} />
        <input onChange={(e) => setNewUser({...newUser, clave: e.target.value})} className={style_form.login_input} type="password" placeholder="contraseña" />
      </div>
      <div>
        <FontAwesomeIcon className={style_form.login_icon} icon={faKey} />
        <input onChange={(e) => setValidate({...validate, clave: e.target.value})} className={style_form.login_input} type="password" placeholder="confirmar contraseña" />
      </div>

      <input className={`${style_btn.btn} ${style_form.btn}`} type="submit" value="Registrarse" />
      {validate.err_estado && <p className={style_form.err}>{validate.err_msge}</p>}

      <div className={style_form.links}>
        <Link className={style_linkB.link} rel="prefetch" href={"/iniciarSesion"}>iniciar sesión</Link>
        <Link className={style_linkB.link} rel="prefetch" href={"#"}>recuperar contraseña</Link>
      </div>
    </form>
  )
}
