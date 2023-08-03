//components
import Clients from '@/components/Clients'

//components
import MyLoading from '@/components/MyLoading'
import { Suspense } from 'react'

export default function Clientes() {
  return (
    <Suspense fallback={<MyLoading></MyLoading>}>
        <Clients></Clients>
    </Suspense>
  )
}
