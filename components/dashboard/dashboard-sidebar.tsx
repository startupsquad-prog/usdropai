"use client";

import {
  IconHome,
  IconOrders,
  IconCart,
  IconAnalytics,
  IconSettings,
  IconStore,
  IconAI,
  IconLightning,
  IconChevronRight,
} from "@/components/ui/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Home",
    icon: IconHome,
    href: "/dashboard",
  },
  {
    title: "AI Product Discovery",
    icon: IconAI,
    href: "/dashboard/ai-discovery",
  },
  {
    title: "Products",
    icon: IconOrders,
    href: "/dashboard/products",
  },
  {
    title: "Orders",
    icon: IconCart,
    href: "/dashboard/orders",
  },
  {
    title: "Analytics",
    icon: IconAnalytics,
    href: "/dashboard/analytics",
  },
  {
    title: "Stores",
    icon: IconStore,
    href: "/dashboard/stores",
  },
  {
    title: "Settings",
    icon: IconSettings,
    href: "/dashboard/settings",
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="h-16 border-b border-gray-200 flex items-center px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex h-9 w-9 items-center justify-center rounded-lg">
                  <IconLightning className="h-5 w-5 text-white" />
                </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-base font-bold text-gray-900">
              UsDrop <span className="text-[#1E40AF]">Ai</span>
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`
                        h-10 px-3 hover:bg-gray-100
                        ${
                          isActive
                            ? "bg-[#1E40AF] text-white hover:bg-[#1E40AF] hover:text-white"
                            : "text-gray-700"
                        }
                      `}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                        {item.title === "AI Product Discovery" && (
                          <span className="ml-auto rounded-full bg-[#3B82F6] px-2 py-0.5 text-xs font-semibold text-white group-data-[collapsible=icon]:hidden">
                            New
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

