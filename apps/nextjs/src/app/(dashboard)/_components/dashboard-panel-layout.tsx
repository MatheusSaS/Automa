"use client"

import Footer from "@/components/footer"
import { useSidebar } from "@/hooks/use-sidebar"
import { useStore } from "@/hooks/use-store"
import { cn } from "@automa/utils"
import { Sidebar } from "./sidebar"

export default function DashboardPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) return null
  const { getOpenState, settings } = sidebar
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] transition-[margin-left] duration-300 ease-in-out",
          !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72"),
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] duration-300 ease-in-out",
          !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72"),
        )}
      >
        <Footer />
      </footer>
    </>
  )
}
