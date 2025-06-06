import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Overview } from "@/components/overview"

export default function Home() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 60)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      className="bg-sidebar"
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="bg-transparent m-0 !shadow-none md:m-0 md:!shadow-none lg:!shadow-none !rounded-none">
        {/* Header card */}
        <SiteHeader />

        {/* Page content card */}
        <div className="m-2 flex flex-1 flex-col rounded-xl border bg-card shadow-sm">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <Overview />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
