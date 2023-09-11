import styles from "@/css/Btn.module.css"

export default function Btn(props) {
  return (
    <input className={styles.btn} type="button" value={props.text}/>
  )
}
