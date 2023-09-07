//components
import NavDashboard from "@/components/NavDashboard"
//css
import styles from "./page.module.css"

export default function DashboardLayout({ children, props }) {
  return (
    <div className={styles.dashboard}>
      <menu className={styles.menu}>
        <NavDashboard></NavDashboard>
      </menu>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
