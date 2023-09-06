//css
import styles from "@/css/Table.module.css"

export default function Table() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
            <th>Encabezado 4</th>
            <th>Encabezado 5</th>
            <th>Encabezado 6</th>
            <th>Encabezado 7</th>
            <th>Encabezado 8</th>
            <th>Encabezado 9</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
            <td>Dato 7</td>
            <td>Dato 8</td>
            <td>Dato 9</td>
          </tr>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
            <td>Dato 7</td>
            <td>Dato 8</td>
            <td>Dato 9</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  )
}
