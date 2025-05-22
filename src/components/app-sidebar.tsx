"use client"

import * as React from "react"
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
  IconSearch,
  IconSettings,
  IconSchool,
  IconMessageChatbot,
} from "@tabler/icons-react"

import { LogoIcon } from "@/components/icons/logo-icon"
import { NavDocuments } from "@/components/nav-documents"
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
      url: "#",
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
      title: "Minha Escola",
      url: "#",
      icon: IconSchool,
    },
    {
      title: "Meu Desempenho",
      url: "#",
      icon: IconChartDots3,
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
      title: "Configurações",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Pesquisa",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Tutor Jibbit",
      url: "#",
      icon: IconMessageChatbot,
    },
    {
      name: "Simulados",
      url: "#",
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
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2.5"
            >
              <a href="#">
                <LogoIcon className="h-[96px] w-auto !min-h-[96px]" />
                <span className="text-xl font-black font-redhat">Jibbit</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
