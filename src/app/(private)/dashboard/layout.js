import NavDashboard from "@/components/NavDashboard"

export default function Layout({children}) {
  return (
    <div>
        <NavDashboard></NavDashboard>
        {children}
    </div>
  )
}
