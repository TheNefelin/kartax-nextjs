// estilos
import styles from './NavPage.module.css'
import style_linkA from '@/components/LinkA.module.css'
// elementos de Next
import Link from 'next/link'
import Image from 'next/image'
// mis componentes
import BurgerBtn from './BurgerBtn'
import logo from '@/img/imgApp/logo.png'
// fuentes
import { Lato, Poppins, Montserrat, Raleway } from 'next/font/google'

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
