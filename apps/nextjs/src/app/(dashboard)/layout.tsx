import DashboardPanelLayout from "./_components/dashboard-panel-layout"

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardPanelLayout>{children}</DashboardPanelLayout>
}
