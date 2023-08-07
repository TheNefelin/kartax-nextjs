'use client'
import { SessionProvider } from "next-auth/react"

export default function Provider({ children, session }) {
  console.log("--- Provider -----------")
  console.log(session)
  console.log(children)

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
