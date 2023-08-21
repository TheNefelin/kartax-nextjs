//css 
import styles from "./page.module.css"
//componentes
import Phone from "@/components/Phone"

export default function Home() {
  return (
    <main>
      <section className={styles.section}>
        <div>
          <h1>Prueba</h1>
        </div>
        <Phone></Phone>
      </section>
    </main>
  )
}
