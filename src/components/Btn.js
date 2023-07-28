import styles from "./Btn.module.css"

export default function Btn(props) {
  return (
    <div>
        <input className={styles.btn} type="button" value={props.text}/>
    </div>
  )
}
