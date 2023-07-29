import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import style_link from '@/components/LinkA.module.css'

import img from "@/img/imgApp/backgound_03.jpg"

import Login from '@/components/Login'
import Clients from '@/components/Clients'

export default function Home() {
  return (
    <main>
      <Image 
        className={styles.background} 
        src={img}
        alt='fondo'
      />
      <Link className={style_link.link} href={"https://www.google.cl"} target='_blanck'>CLICK</Link>
      <Login></Login>
      <Clients></Clients>
    </main>
  )
}
