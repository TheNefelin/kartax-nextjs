import './globals.css'
import Image from 'next/image'
import { Lato, Roboto, Raleway, Montserrat, Poppins } from 'next/font/google'

//componentes
import NavPage from '@/components/NavPage'
//img
import img from "@/img/imgApp/backgound_03.jpg"

export const metadata = {
  title: 'Kartax Next App',
  description: "Everything it's About Food",
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <NavPage></NavPage>
        <Image
          id='background'
          src={img}
          alt='fondo'
          rel="prefetch"
        />
        {children}
      </body>
    </html>
  )
}
