import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      HOLA
      <Link href={"https://www.google.cl"} target='_blanck' className={styles.link}>CLICK</Link>
    </main>
  )
}
