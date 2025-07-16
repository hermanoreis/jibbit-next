"use client"

import * as React from "react"
import Link from "next/link"
import {
  IconChartDots3,
  IconBook,
  IconCamera,
  IconCalendarWeek,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconHome,
  IconReport,
  IconMessageChatbot,
} from "@tabler/icons-react"
import { ListChecksIcon } from "lucide-react"
import { useWhitelabel } from "@/providers/whitelabel-provider"

import { LogoIcon } from "@/components/icons/logo-icon"
import { NavTools } from "@/components/nav-tools"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Hermano Reis",
    email: "hermano.reis@jovensgenios.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Página Inicial",
      url: "/",
      icon: IconHome,
    },
    {
      title: "Cronograma",
      url: "#",
      icon: IconCalendarWeek,
    },
    {
      title: "Cursos",
      url: "#",
      icon: IconBook,
    },
    {
      title: "Tarefas e Lembretes",
      url: "#",
      icon: ListChecksIcon,
    },
    {
      title: "Meu Desempenho",
      url: "#",
      icon: IconChartDots3,
    },
    {
      title: "Tutor Jibbit",
      url: "/chat",
      icon: IconMessageChatbot,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Ajuda",
      url: "#",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "Simulados",
      url: "/practice-tests",
      icon: IconReport,
    },
    {
      name: "Redação",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { info } = useWhitelabel()

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="py-4">
        <SidebarMenu className="flex flex-row w-full items-center justify-between">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2.5"
            >
              <Link href="/">
                <LogoIcon className="h-[96px] w-auto !min-h-[96px]" />
                <span className="text-xl font-black font-redhat">{info.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem className="hidden md:block">
            <SidebarTrigger />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavTools items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
