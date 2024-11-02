import type { ReactNode } from "react"

import { Background } from "@automa/ui"
import NavBar from "@/components/nav-bar"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Background />
      <NavBar />
      <div className="relative z-10 flex h-screen w-screen justify-center">
        {children}
      </div>
    </>
  )
}
