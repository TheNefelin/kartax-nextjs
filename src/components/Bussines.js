"use client"

//components
import Image from "next/image"
import Table from "./Table"
//css
import styles from "@/css/Bussines.module.css"
import { useState } from "react"

export default function Bussines() {
  const [imagen, setImagen] = useState(null)

  const loadImg = (e) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagen(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <section>
      Bussines

      <form className={styles.form}>
        {imagen && <Image
          src={imagen}
          width={150}
          height={150}
          alt="Prueba"
        ></Image>}
        <input onChange={loadImg} type="file" name="img" accept="image/png, image/gif, image/jpeg" />

        <input type="text"></input>
        <textarea placeholder="Google Map Link"></textarea>
        <textarea placeholder="Map Link"></textarea>
        <iframe
          className={styles.map}
          src=""
          loading="lazy"
        />
        <input type="submit" value="Guardar"></input>
      </form>

      <Table></Table>
    </section>
  )
}
