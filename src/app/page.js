import Link from "next/link"
//css 
import styles from "./page.module.css"
//componentes
import Phone from "@/components/Phone"
import Btn from "@/components/Btn"

export default function Home() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.title}>
          <h1>Utiliza Nuestra App para Gestionar Pedidos desde la Mesa del Cliente</h1>
          <h3>Funcionalidades Gratuitas (gt)</h3>
          <ul>
            <li>Administrar 1 Negocio</li>
            <li>Configuración Dashboard para Admin</li>
            <li>Configuración Dashboard para Usuario</li>
            <li>Mapeo de distribución de las mesas desde el Dashboard</li>
            <li>QR por mesa para realizar pedidos</li>
            <li>Otros...</li>
          </ul>
          <Link
            target="_blank"
            href="https://kartax-express-production.up.railway.app/kartax/1"
          >
            <Btn text="Ver Demo"></Btn>
          </Link>
        </div>
        <Phone></Phone>
      </section>
    </main>
  )
}
