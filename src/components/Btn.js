'use client'
import styles from "@/css/Btn.module.css"
import useSWR from 'swr'

export default function Btn(props) {
  async function fetcher() {
    const res = await fetch("https://kartax-api-py.vercel.app/")
    return await res.json()
  }

  function getData() {
    const { data, error } = useSWR("myFetch", fetcher)
  
    if (error) return "Error con la API"
    if (!data) return "Cargando..."
  
    return data
  }

  console.log(getData())

  return (
    <div>
        <input className={styles.btn} type="button" value={props.text}/>
    </div>
  )
}
