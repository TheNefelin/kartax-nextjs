'use client'

import styles from "@/css/Btn.module.css"
import { useState, useEffect } from "react"

export default function Btn(props) {
  const [estado, setEstado] = useState(false)

  return (
    <input className={styles.btn} type="button" value={props.text}/>
  )
}
