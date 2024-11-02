import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "./user-nav"
import { SheetMenu } from "./sheet-menu"
import { LangueToggle } from "@/components/langue-toggle"
import { auth } from "@automa/auth"

interface NavbarProps {
  title: string
}

export default async function NavbarDashboard({ title }: NavbarProps) {
  const user = await auth()
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <LangueToggle />
          <ModeToggle />
          <UserNav user={user} />
        </div>
      </div>
    </header>
  )
}
