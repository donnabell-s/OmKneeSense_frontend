"use client"

import { useUser } from "@/context/UserContext"
import SideNavItem from "@/components/layout/SideNavItem"
import SideNavUserCard from "@/components/layout/SideNavUserCard"
import { NavGroup } from "@/types/nav"
import { MdSpaceDashboard } from "react-icons/md";
import { TbProgressDown } from "react-icons/tb";
import { MdFactCheck } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const practitionerLinks: NavGroup[] = [
  {
    section: "General",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: MdSpaceDashboard },
    ]
  },
  {
    section: "Account",
    items: [
      { label: "Settings", href: "/settings", icon: MdSettings },
      { label: "Profile", href: "/profile", icon: FaUserAlt },
    ]
  }
]

const patientLinks: NavGroup[] = [
  {
    section: "General",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: MdSpaceDashboard },
      { label: "My Progress", href: "/my-progress", icon: TbProgressDown },
      { label: "Session", href: "/sessions", icon: MdFactCheck },
    ]
  },
  {
    section: "Account",
    items: [
      { label: "Settings", href: "/settings", icon: MdSettings },
      { label: "Profile", href: "/profile", icon: FaUserAlt },
    ]
  }
]

export default function SideNav() {
  const { role } = useUser()
  const links = role === "practitioner" ? practitionerLinks : patientLinks

  return (
    <aside 
      className="w-64 h-screen sticky top-0 p-2 flex flex-col justify-between"
      style={{ background: "linear-gradient(to bottom, #12606A, #399195)" }}
    >

      <div>
        <div className="px-4 mb-12 mt-10">
          <h1 className="text-2xl font-bold text-[#FDFDFD]">OmKneeSense</h1>
        </div>

        <nav className="flex flex-col gap-4">
          {links.map((group) => (
            <div key={group.section} className="mb-5">
              <p className="text-xs font-medium text-[#C8E6E6] uppercase tracking-wider px-4 mb-2">
                {group.section}
              </p>
              <div className="flex flex-col gap-1">
                {group.items.map((link) => (
                  <SideNavItem
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    icon={link.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>


      <SideNavUserCard />
    </aside>
  )
}
