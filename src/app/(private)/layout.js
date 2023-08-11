import NavApp from "@/components/NavApp"

export default function Layout({ children }) {
    
  return (
    <section>
      <NavApp></NavApp>
      {children}
    </section>
  )
}