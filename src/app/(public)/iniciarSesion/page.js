import styles from './page.module.css'

//componentes
import FrmLogin from '@/components/FrmLogin'

export default function IniciarSesion() {
  return (
    <section className={styles.section}>
      <div className={styles.form}>
        <FrmLogin ></FrmLogin>
      </div>
    </section>
  )
}
