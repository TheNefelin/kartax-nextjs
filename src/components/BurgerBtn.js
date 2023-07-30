'use client'
import styles from "@/css/BurgerBtn.module.css"
import { useState } from "react"

export default function BurgerBtn(props) {
  const[estado, setEstado] = useState(false)
  
  function click() {
    setEstado(!estado)
  }

  // const classA = props.isClick ? `${styles.burgerBtnClick} ${styles.burgerA}` : styles.burgerA 
  // const classB = props.isClick ? `${styles.burgerBtnClick} ${styles.burgerB}` : styles.burgerB 
  // const classC = props.isClick ? `${styles.burgerBtnClick} ${styles.burgerC}` : styles.burgerC 

  const classA = estado ? `${styles.burgerBtnClick} ${styles.burgerA}` : styles.burgerA 
  const classB = estado ? `${styles.burgerBtnClick} ${styles.burgerB}` : styles.burgerB 
  const classC = estado ? `${styles.burgerBtnClick} ${styles.burgerC}` : styles.burgerC 

  return (
    <div onClick={click} className={styles.burgerBtn}>
      <div className={classA}></div>
      <div className={classB}></div>
      <div className={classC}></div>
    </div>
  )
}
