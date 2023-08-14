import MyLoading from "@/components/MyLoading";
import { Suspense } from "react";

export default function Encuesta() {
  return (
    <Suspense fallback={<MyLoading></MyLoading>}>
      <div>Encuesta</div>
    </Suspense>
  )
}
