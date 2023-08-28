import Link from "next/link"
//css 
import styles from "./page.module.css"
//componentes
import Phone from "@/components/Phone"
import Btn from "@/components/Btn"
import CardList, {CardListLeft, CardListRight} from "@/components/CardList"

const listaEjemplo = [
  "under development",
  "This is under development to",
  "Still under development",
  "under development",
  "This is under development to",
  "Still under development",
]

export default function Home() {
  return (
    <main>
      <section className={styles.free}>
        <div>
          <h1>Utiliza Nuestra App para Gestionar Pedidos desde la Mesa del Cliente</h1>
          <h3>Funcionalidades Gratuitas (gt)</h3>
          <CardList></CardList>
          <Link
            className={styles.btn}
            target="_blank"
            href="https://kartax-express-production.up.railway.app/kartax/1"
          >
            <Btn text="Ver Demo"></Btn>
          </Link>
        </div>
        <Phone></Phone>
      </section>
      <section className={styles.paid}>
        <h1>Otros beneficiarios con la extensión de pago bla bla bla...</h1>
        <CardListLeft lista={listaEjemplo}></CardListLeft>
        <CardListRight lista={listaEjemplo}></CardListRight>
      </section>
    </main>
  )
}
