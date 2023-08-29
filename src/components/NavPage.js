"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Permanent_Marker, Raleway } from 'next/font/google'
import { signOut, useSession } from 'next-auth/react'
//componentes
import BurgerBtn from './BurgerBtn'
//css
import styles from '@/css/NavPage.module.css'
import style_linkA from '@/css/LinkA.module.css'
import style_linkC from '@/css/LinkC.module.css'
//img
import logo from '@/img/imgApp/logo.png'

const pmarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin']
})

const raleway = Raleway({
  weight: '400',
  subsets: ['latin']
})

export default function NavPage() {
  const { data: session, status } = useSession()
  const [estadoBurger, setEstadoBurger] = useState(false)
  const menu_links_css = !estadoBurger ? `${styles.nav_links} ${styles.nav_links_visible}` : styles.nav_links

  const burger_click = () => {
    setEstadoBurger(!estadoBurger)
  }

  const burger_reset = () => {
    setEstadoBurger(false)
  }

  const cerrarSesion = async () => {
    await signOut({callbackUrl: "/"})
  }
  
  return (
    <section className={styles.nav}>
      {status !== "authenticated" &&
        <>
          <Link onClick={burger_reset} href="/" className={styles.logo}>
            <Image
              src={logo}
              height={50}
              width={50}
              alt='logo'
            />
            <h1 className={pmarker.className}>{"Kartax"}</h1>
          </Link>

          <span onClick={burger_click} className={styles.burger_visible}>
            <BurgerBtn isClick={estadoBurger} ></BurgerBtn>
          </span>

          <div className={menu_links_css}>
            {/* <Link onClick={burger_reset} className={style_linkA.link} rel="prefetch" href="#">RRSS</Link> */}
            <Link onClick={burger_reset} className={style_linkA.link} rel="prefetch" href="/clientes">Clientes</Link>
            <Link onClick={burger_reset} className={style_linkA.link} rel="prefetch" href="/encuesta">Encuesta</Link>
            <Link onClick={burger_reset} className={style_linkC.link} rel="prefetch" href="/iniciarSesion">Iniciar Sesión</Link>
          </div>
        </>
      }
      {status === "authenticated" &&
        <>
          <Link onClick={burger_reset} href="/dashboard" className={styles.logo}>
            <Image
              src={session.user.image}
              height={50}
              width={50}
              alt='logo'
            />
            <p className={raleway.className}>{session.user.name}</p>
          </Link>

          <span onClick={burger_click} className={styles.burger_visible}>
            <BurgerBtn isClick={estadoBurger} ></BurgerBtn>
          </span>

          <div className={menu_links_css}>
            <Link onClick={cerrarSesion} className={style_linkC.link} rel="prefetch" href="/#">Cerrar Sesión</Link>
          </div>
        </>
      }
    </section>
  )
}
