import styles from '@/css/NavPage.module.css'
import Link from 'next/link'
import Image from 'next/image'

//fuente
import { Raleway } from 'next/font/google'
//css
import style_linkA from '@/css/LinkA.module.css'
//componentes
import BurgerBtn from './BurgerBtn'
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
        <div className="navBar-links">
          <Link className={style_linkA.link} id="RRSS" href="#">RRSS</Link>
          <Link className={style_linkA.link} href="/iniciarSesion">Iniciar Sesión</Link>
          <Link className={style_linkA.link} href="/registrarse">Registrarse</Link>
          <Link className={style_linkA.link} href="/encuesta">Encuesta</Link>
        </div>
    </section>
  )
}
