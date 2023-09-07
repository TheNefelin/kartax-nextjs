import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
//css
import styles from "@/css/Table.module.css"
//fetching class
import FetchingApi from "@/context/FetchingApi"

export default function Table(props) {
  const fetchingApi = new FetchingApi()

  // Promise.all([
  //   fetchingApi.get_business_byid_user(1).then(data => data.json()),
  //   fetchingApi.get_items_grp_byid_business(1).then(data => data.json()),
  //   fetchingApi.get_items_categ_byid_business(1).then(data => data.json()),
  //   fetchingApi.get_items_byid_business(1).then(data => data.json()),
  // ]).then(data => {
  //   console.log(data[0])
  //   console.log(data[1])
  //   console.log(data[2])
  //   console.log(data[3])
  // })

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
              {Object.values(filas).map(e => (
                <td>{`${e}`}</td>
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
