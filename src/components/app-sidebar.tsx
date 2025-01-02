
import * as React from "react"
import {
    Bot,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },

    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Page1",
                    url: "/page1",
                },
                {
                    title: "Page2",
                    url: "/page2",
                },
                {
                    title: "Page3",
                    url: "/page3",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
    ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="h-12 border-b-sidebar-border">
                {/* <TeamSwitcher teams={data.teams} /> */}
                <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent >
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                {/* <NavUser user={data.user} /> */}
                {/* <NavUser user={user} /> */}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
