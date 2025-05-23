import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Página Inicial</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="flex">
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              <Bell className="mr-2 sm:mr-2" />
              <span className="hidden sm:inline">Notificações</span>
            </a>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
