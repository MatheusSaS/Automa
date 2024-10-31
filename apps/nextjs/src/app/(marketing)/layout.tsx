import { Background } from "@automa/ui"
import NavBar from "@/components/nav-bar"

export default function MarketingPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Background />
      <div className="flex min-h-screen flex-col">
        <NavBar />
        {children}
      </div>
    </>
  )
}
