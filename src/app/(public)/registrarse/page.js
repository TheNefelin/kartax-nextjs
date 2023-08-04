import { Suspense } from 'react'
import styles from './page.module.css'

//componentes
import CheckIn from '@/components/CheckIn'
import MyLoading from '@/components/MyLoading'

export default function Registrarse() {
  return (
    <Suspense fallback={<MyLoading></MyLoading>}>
      <div className={styles.section}>
        <div className={styles.form}>
          <CheckIn></CheckIn>
        </div>
      </div>
    </Suspense>
  )
}
