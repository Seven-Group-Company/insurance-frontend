import {LayoutDashboard, LucideIcon, Settings} from "lucide-react";

export type DashboardSideBarLinkItemType = {
    name: string,
    icon?: LucideIcon,
    link: string,
    predicate?: (param?: any) => boolean,
}

export const dashboardSideBarLinkMainItems: DashboardSideBarLinkItemType[] = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: LayoutDashboard,
    },

]

export const dashboardSideBarLinkSettingItems: DashboardSideBarLinkItemType[] = [
    {
        name: "Settings",
        link: "/dashboard/settings",
        icon: Settings,
    },
]

export  type SettingsLayoutLink = {
    name: string,
    link: string,
}

export const SettingsLayoutLinks: SettingsLayoutLink[] = [
    {
        name: "Access Level",
        link: "/dashboard/settings/access-level",
    },

]
