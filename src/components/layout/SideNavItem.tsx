"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavLink } from "@/types/nav"

export default function SideNavItem({ label, href, icon: Icon }: NavLink) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-medium transition-colors
        ${isActive
          ? "bg-[#FDFDFD] text-[#12606A]"
          : "text-[#C8E6E6] hover:bg-[#FDFDFD]/20 hover:text-[#FDFDFD]"
        }
      `}
    >
      <Icon size={18} />
      {label}
    </Link>
  )
}
