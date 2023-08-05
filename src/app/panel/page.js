'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Panel() {
  const { data: session, status } = useSession();
  const prueba = useSession();
  const router = useRouter();

  console.log("-- Panel -----------")
  console.log(status)
  console.log(session)
  console.log("-- Prueba ----------")
  console.log(prueba)

  return (
    <div>Panel</div>
  )
}

