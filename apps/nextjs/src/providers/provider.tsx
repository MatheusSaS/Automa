"use cliente"

import type { ReactNode } from "react"
import { Toaster } from "sonner"

import { ThemeProvider } from "./theme-provider"

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster closeButton className="pointer-events-auto" />
      {children}
    </ThemeProvider>
  )
}
