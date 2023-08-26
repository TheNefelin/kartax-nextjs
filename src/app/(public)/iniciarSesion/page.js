import styles from './page.module.css'

//componentes
import Login from '@/components/Login'

export default function IniciarSesion() {
  return (
    <section className={styles.section}>
      <div className={styles.form}>
        <Login ></Login>
      </div>
    </section>
  )
}
