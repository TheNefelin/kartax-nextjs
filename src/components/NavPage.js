import styles from '@/css/NavPage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Raleway } from 'next/font/google'

//componentes
import BurgerBtn from './BurgerBtn'
//css
import style_linkA from '@/css/LinkA.module.css'
//img
import logo from '@/img/imgApp/logo.png'

const raleway = Raleway({
  weight: '700',
  subsets: ['latin']
})

export default function NavPage() {
  return (
    <section className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src={logo}
          height={50}
          width={50}
          alt='logo'
        />
        <h1 className={raleway.className}>{"Kartax"}</h1>
      </Link>
      <BurgerBtn></BurgerBtn>
      <div className={styles.nav_links}>
        {/* <Link className={style_linkA.link} rel="preload" href="#">RRSS</Link> */}
        <Link className={style_linkA.link} rel="prefetch" href="/clientes">Clientes</Link>
        <Link className={style_linkA.link} rel="prefetch" href="/encuesta">Encuesta</Link>
        <Link className={style_linkA.link} rel="prefetch" href="/iniciarSesion">Iniciar Sesión</Link>
      </div>
    </section>
  )
}
