import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
//css
import styles from "@/css/Table.module.css"

export default function Table(props) {
  const tabla = props.tabla
  const columnas = Object.keys(tabla[0])

  return (
    <section className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columnas.map((columna, index) => (
              <th key={index}>{columna}</th>
            ))}
            <th>modificar</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((filas, index) => (
            <tr key={index}>
              {Object.values(filas).map((e, eIndex) => (
                <td key={eIndex}>{`${e}`}</td>
              ))}
              <td>
                <FontAwesomeIcon icon={faPenToSquare} className={styles.icon}></FontAwesomeIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
