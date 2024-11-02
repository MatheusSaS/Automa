import DashboardPanelLayout from "./_components/dashboard-panel-layout"
import NavbarDashboard from "./_components/navbar"

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardPanelLayout>
      <NavbarDashboard title={"title"} />
      {children}
    </DashboardPanelLayout>
  )
}
