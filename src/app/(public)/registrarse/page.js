import { Suspense } from 'react'
import styles from './page.module.css'

//componentes
import FrmCheckIn from '@/components/FrmCheckIn'
import MyLoading from '@/components/MyLoading'

export default function Registrarse() {
  return (
    <Suspense fallback={<MyLoading></MyLoading>}>
      <div className={styles.section}>
        <div className={styles.form}>
          <FrmCheckIn></FrmCheckIn>
        </div>
      </div>
    </Suspense>
  )
}
