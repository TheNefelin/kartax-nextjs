import styles from "@/components/BurgerBtn.module.css"

export default function burgerBtn(props) {
  const classA = props.isClick ? `${styles.burgerBtnClick} ${styles.burgerA}` : styles.burgerA 
  const classB = props.isClick ? `${styles.burgerBtnClick} ${styles.burgerB}` : styles.burgerB 
  const classC = props.isClick ? `${styles.burgerBtnClick} ${styles.burgerC}` : styles.burgerC 

  return (
    <div className={styles.burgerBtn}>
      <div className={classA}></div>
      <div className={classB}></div>
      <div className={classC}></div>
    </div>
  )
}
