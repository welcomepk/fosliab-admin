
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
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { useAuth } from "@/context/authProvider"

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
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
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
    const { user } = useAuth();
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                {/* <TeamSwitcher teams={data.teams} /> */}
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                {/* <NavUser user={data.user} /> */}
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
