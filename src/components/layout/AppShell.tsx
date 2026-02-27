"use client"

import { UserProvider } from "@/context/UserContext"
import SideNav from "@/components/layout/SideNav"

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <UserProvider>
      <div className="flex min-h-screen">
        <SideNav />
      <main className="flex-1 bg-[#F5F5F5] min-h-screen p-8 flex flex-col">
        {children}
      </main>
      </div>
    </UserProvider>
  )
}