import Image from "next/image"

//img
import img from "@/img/imgApp/logo.png"

const getData = async () => {
  const res = await fetch("https://kartax-api-py.vercel.app/negocio/", { cache: 'no-store' })
  return await res.json()
}

export default async function Clients() {
  const data = await getData()

  return (
    <section>
      {data.map(e =>
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
      )}
    </section>
  )
}
