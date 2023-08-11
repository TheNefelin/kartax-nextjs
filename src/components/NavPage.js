"use client"

//libs
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Raleway } from 'next/font/google'
//componentes
import BurgerBtn from './BurgerBtn'
//css
import styles from '@/css/NavPage.module.css'
import style_linkA from '@/css/LinkA.module.css'
import style_linkC from '@/css/LinkC.module.css'
//img
import logo from '@/img/imgApp/logo.png'

const raleway = Raleway({
  weight: '700',
  subsets: ['latin']
})

export default function NavPage() {
  const [estadoBurger, setEstadoBurger] = useState(false)
  const menu_links = !estadoBurger ? `${styles.nav_links} ${styles.nav_links_visible}` : styles.nav_links 

  const burger_click = () => {
    setEstadoBurger(!estadoBurger)
  }

  const burger_reset = () => {
    setEstadoBurger(false)
  }

  return (
    <section className={styles.nav}>
      <Link onClick={burger_reset} href="/" className={styles.logo}>
        <Image
          src={logo}
          height={50}
          width={50}
          alt='logo'
        />
        <h1 className={raleway.className}>{"Kartax"}</h1>
      </Link>

      <span onClick={burger_click} className={styles.burger_visible}>
        <BurgerBtn isClick={estadoBurger} ></BurgerBtn>
      </span>
 
      <div className={menu_links}>
        {/* <Link className={style_linkA.link} rel="preload" href="#">RRSS</Link> */}
        <Link onClick={burger_reset} className={style_linkA.link} rel="prefetch" href="/clientes">Clientes</Link>
        <Link onClick={burger_reset} className={style_linkA.link} rel="prefetch" href="/encuesta">Encuesta</Link>
        <Link onClick={burger_reset} className={style_linkC.link} rel="prefetch" href="/iniciarSesion">Iniciar Sesión</Link>
      </div>
    </section>
  )
}
