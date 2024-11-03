import { redirect } from "next/navigation" // Função de redirecionamento do Next.js
import DashboardPanelLayout from "./_components/dashboard-panel-layout"
import NavbarDashboard from "./_components/navbar"
import { auth } from "@automa/auth"

export default async function DashboardPage({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await auth()

  if (!user) {
    // Redireciona o usuário para a página de login se ele não estiver autenticado
    redirect("/signin")
  }

  return (
    <DashboardPanelLayout>
      <NavbarDashboard title={"title"} />
      {children}
    </DashboardPanelLayout>
  )
}
