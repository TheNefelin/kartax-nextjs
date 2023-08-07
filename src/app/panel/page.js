'use client'
import { useSession } from "next-auth/react"

export default function Panel() {
  const { data: session, state } = useSession()
  console.log("--- Panel -----------")
  console.log(session)
  console.log(state)

  return (
    <div>Panel</div>
  )
}

