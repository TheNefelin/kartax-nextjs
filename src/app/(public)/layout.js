import NavPage from "@/components/NavPage"

export default function Layout({ children }) {
  return (
    <section>
      <NavPage></NavPage>
      {children}
    </section>
  )
}