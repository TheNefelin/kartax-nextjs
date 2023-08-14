import { Suspense } from 'react'
import styles from './page.module.css'

//componentes
import Login from '@/components/Login'
import MyLoading from '@/components/MyLoading'

export default function IniciarSesion() {
  return (
    <Suspense fallback={<MyLoading></MyLoading>}>
      <section className={styles.section}>
        <div className={styles.form}>
          <Login ></Login>
        </div>
      </section>
    </Suspense>
  )
}
