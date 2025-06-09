"use client"

import * as React from "react"
import { Bell } from "lucide-react"
import { IconHome } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { useWhitelabel } from "@/providers/whitelabel-provider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LogoIcon } from "@/components/icons/logo-icon"

const pageTitles: Record<string, string> = {
  "practice-tests": "Simulados",
  // Adicione mais mapeamentos conforme necessário
}

export function SiteHeader() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  const { info } = useWhitelabel()
  
  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    const isLast = index === segments.length - 1
    const label = pageTitles[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
    
    return {
      href,
      label,
      isLast,
    }
  })

  return (
    <header className="mx-2 mt-2 mb-0 flex h-(--header-height) shrink-0 items-center gap-2 rounded-xl border bg-card shadow-sm transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center md:hidden group-[[data-desktop-sidebar-state=collapsed]]/sidebar-wrapper:md:flex">
          <Link href="/" className="flex items-center gap-2 mr-2">
            <LogoIcon className="h-6 w-auto" />
            <span className="font-black font-redhat">{info.name}</span>
          </Link>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <SidebarTrigger className="mx-2" />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <IconHome className="size-4" />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((breadcrumb) => (
              <React.Fragment key={breadcrumb.href}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {breadcrumb.isLast ? (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={breadcrumb.href} className="hover:text-primary transition-colors">
                        {breadcrumb.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center">
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
