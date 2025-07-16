import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { ChatInterface } from "@/components/chat-interface"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function ChatPage() {
  return (
    <SidebarProvider
      className="bg-sidebar"
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 60)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="bg-transparent m-0 !shadow-none md:m-0 md:!shadow-none lg:!shadow-none !rounded-none">
        {/* Header card */}
        <SiteHeader />

        {/* Chat interface */}
        <ChatInterface />
      </SidebarInset>
    </SidebarProvider>
  )
} 