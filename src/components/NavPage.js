import styles from './NavPage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import BurgerBtn from './BurgerBtn'
import logo from '@/img/imgApp/logo.png'

export default function NavPage() {
  return (
    <section className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            height={50}
            width={50}
          />
          <h1>{"Kartax"}</h1>
        </Link>
        <BurgerBtn></BurgerBtn>
    </section>
  )
}
