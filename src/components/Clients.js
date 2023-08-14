import Image from "next/image"
//components
import MyMaps from "./MyMaps"
//img
import img from "@/img/imgApp/logo.png"
//fetching class
import FetchingApi from "@/context/FetchingApi"

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
          <MyMaps></MyMaps>
        </article>
      )}
    </section>
  )
}
