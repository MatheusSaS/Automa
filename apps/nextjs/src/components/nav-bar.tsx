import Link from "next/link"
import LogoAutoma from "./logo-automa"
import { Button } from "@automa/ui"
import { ModeToggle } from "./mode-toggle"
import { LangueToggle } from "./langue-toggle"

export default function NavBar() {
  return (
    <header className="sticky top-0 z-[999] w-full border-b border-border/40 bg-background/95 backdrop-blur-sm dark:bg-black/[0.6]">
      <div className="container flex h-14 items-center">
        <Link
          href="/"
          className="flex items-center justify-start transition-opacity duration-300 hover:opacity-85"
        >
          <LogoAutoma />
          <span className="font-bold">Automa teste</span>
          <span className="sr-only">Automa teste</span>
        </Link>
        <nav className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-background"
            asChild
          ></Button>
          <LangueToggle />
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
