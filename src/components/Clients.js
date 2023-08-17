import Image from "next/image"
//img
import img from "@/img/imgApp/logo.png"
//fetching class
import FetchingApi from "@/context/FetchingApi"
//css
import styles from "@/css/Clients.module.css"

export default async function Clients() {
  const fetchingApi = new FetchingApi()
  const result = await fetchingApi.get_clients()
  const data = await result.json()

  console.log(data)

  return (
    <section>
      {data.length > 0 && data.map(e =>
        <article>
          <Image
            src={img}
            height={50}
            width={50}
            alt="img"
          />
          <div>
            <h2>{e.nombre}</h2>
            <p>{e.direccion}</p>
            <p>{e.descripcion}</p>
          </div>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9459.223845818151!2d-71.62368401760413!3d-33.04749709788379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e127f719c547%3A0x56e25c26d3c529bd!2sPlaza%20Victoria!5e0!3m2!1ses-419!2scl!4v1692228455230!5m2!1ses-419!2scl"
            loading="lazy"
          />
        </article>
      )}
    </section>
  )
}
