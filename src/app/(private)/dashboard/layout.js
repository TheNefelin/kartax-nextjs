//components
import NavDashboard from "@/components/NavDashboard"
//css
import styles from "./page.module.css"

export default function DashboardLayout({ children, props }) {
  return (
    <div className={styles.dashboard}>
      <NavDashboard></NavDashboard>
      {children}
    </div>
  )
}
