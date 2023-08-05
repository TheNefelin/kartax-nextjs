'use client'

import { SessionProvider } from "next-auth/react"

export default async function Layout({ children, ...props }) {
  console.log("-- Layout ---------")
  console.log(props.session)

  return (
    <div>
      <h1>Prueba</h1>
      <SessionProvider session={props.session}>
        {children}
      </SessionProvider>
    </div>
  )
}
