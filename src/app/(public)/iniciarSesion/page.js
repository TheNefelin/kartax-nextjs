import styles from './page.module.css'
import Login from '@/components/Login'

export default function iniciarSesion() {
  return (
    <div className={styles.section}>
      <Login></Login>
    </div>
  )
}
