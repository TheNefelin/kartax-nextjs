"use client"

//components
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faLocationDot, faArrowRight, faCamera } from "@fortawesome/free-solid-svg-icons"
//css
import style_form from "@/css/Form.module.css"
import style_card from "@/css/Card.module.css"
import style_btn from "@/css/Btn.module.css"

export default function Business() {
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

  return (
    <form className={`${style_card.card} ${style_form.form}`}>
      <h2>Negocio</h2>

      <label for="inputTag" className={style_form.img_load}>
        {imagen && <Image
          className={style_form.img}
          src={imagen}
          width={150}
          height={150}
          alt="Prueba"
        ></Image>}
        <p>Seleccione un Logo (200 x 200)</p>
        <FontAwesomeIcon className={style_form.form_icon2} icon={faCamera} />
        <input id="inputTag" onChange={loadImg} type="file" name="img" accept="image/png, image/gif, image/jpeg" />
      </label>

      <div>
        <FontAwesomeIcon className={style_form.form_icon} icon={faBuilding} />
        <input className={style_form.form_input} type="text" placeholder="Nombre de Negocio" />
      </div>

      <div>
        <FontAwesomeIcon className={style_form.form_icon} icon={faBuilding} />
        <input className={style_form.form_input} type="text" placeholder="Rut de Negocio" />
      </div>

      <div>
        <FontAwesomeIcon className={style_form.form_icon} icon={faBuilding} />
        <input className={style_form.form_input} type="text" placeholder="Dirección del Negocio" />
      </div>

      <div>
        <textarea className={style_form.form_input} type="text" placeholder="Descripción Negocio" />
      </div>

      <div>
        <textarea className={style_form.form_input} type="text" placeholder="Google Map Link"></textarea>
      </div>

      <div>
        <FontAwesomeIcon className={style_form.form_icon} icon={faLocationDot} />
        <input className={style_form.form_input} type="text" placeholder="Map Link"></input>
      </div>
      
      <div>
        <iframe
          className={style_form.map}
          src=""
          loading="lazy"
        />
      </div>

      <input className={`${style_btn.btn} ${style_form.btn}`} type="submit" value="Modificar" />
      <input className={`${style_btn.btn} ${style_form.btn}`} type="submit" value="Cerrar" />
    </form>
  )
}
