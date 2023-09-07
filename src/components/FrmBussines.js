"use client"

//components
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faLocationDot } from "@fortawesome/free-solid-svg-icons"
//css
import styles from "@/css/Bussines.module.css"
import style_form from "@/css/Form.module.css"
import style_card from "@/css/Card.module.css"
import style_btn from "@/css/Btn.module.css"
//fetching class
import FetchingApi from "@/context/FetchingApi"

export default function Bussines() {
  const [imagen, setImagen] = useState(null)

  const loadImg = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setImagen(e.target.result)
      }

      reader.readAsDataURL(file)
    }
  }

  const fetchingApi = new FetchingApi()
  const res = fetchingApi.get_business_byid_user(1)

  return (
    <form className={`${style_card.card} ${style_form.form}`}>
      <h2>Negocio</h2>

      <div className={style_form.img}>
        {imagen && <Image
          src={imagen}
          width={150}
          height={150}
          alt="Prueba"
        ></Image>}
        <input onChange={loadImg} type="file" name="img" accept="image/png, image/gif, image/jpeg" />
      </div>

      <div>
        <FontAwesomeIcon className={style_form.form_icon} icon={faBuilding} />
        <input className={style_form.form_input} type="text" placeholder="Nombres" />
      </div>

      <div>
        <textarea className={style_form.form_input} placeholder="Google Map Link"></textarea>
      </div>

      <div>
        <FontAwesomeIcon className={style_form.form_icon} icon={faLocationDot} />
        <input className={style_form.form_input} type="text" placeholder="Map Link"></input>
      </div>

      <div>
        <iframe
          className={styles.map}
          src=""
          loading="lazy"
        />
      </div>

      <input className={`${style_btn.btn} ${style_form.btn}`} type="submit" value="Modificar" />
      <input className={`${style_btn.btn} ${style_form.btn}`} type="submit" value="Cerrar" />
    </form>
  )
}
