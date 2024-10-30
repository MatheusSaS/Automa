"use cliente"

import type { ReactNode } from "react"
import { Toaster } from "sonner"

import { TooltipProvider } from "@automa/ui"

import { ThemeProvider } from "./theme-provider"

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster closeButton richColors className="pointer-events-auto" />
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}
