import Image from "next/image"
//img
import img from "@/img/imgApp/logo.png"
//fetching class
import FetchingApi from "@/context/FetchingApi"

export default async function Clients() {
  const fetchingApi = new FetchingApi()
  const data = await fetchingApi.get_clientes()
  console.log(data)

  return (
    <section>
      {/* {data.length > 0 && data.map(e =>
        <div key={e.id_negocio}>
          <div>
            <h2>{e.msge}</h2>
          </div>
        </div>
      )} */}
      {/* {data.length > 0 && data.map(e =>
        <div key={e.id_negocio}>
          <Image 
            src={img}
            height={50}
            width={50}
            alt={e.nombre}
          />
          <div>
            <h2>{e.nombre}</h2>
            <p>{e.descripcion}</p>
          </div>
        </div>
      )} */}
    </section>
  )
}
