//css
import styles from "@/css/Loading.module.css"

export default function MyLoading() {
  const loadingItems = Array.from({ length: 20 }, (_, i) => (
    <span key={i} className={styles.loading_span} style={{ "--i": i + 1 }} />
  ));

  return (
    <section className={styles.loading_contenedor}>
      <div className={styles.loading}>
        {loadingItems}
      </div>
    </section>
  )
}
