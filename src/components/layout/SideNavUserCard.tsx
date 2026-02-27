"use client"

import { useUser } from "@/context/UserContext"

export default function SideNavUserCard() {
  const { name, role } = useUser()

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div
      className="flex items-center justify-between rounded-lg p-3 mb-2"
      style={{ background: "rgba(255,255,255,0.15)" }}
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-[#90E6DD] flex items-center justify-center text-[#12606A] text-sm font-semibold">
          {initials}
        </div>
        {/* Name + role */}
        <div>
          <p className="text-sm font-medium text-[#FDFDFD]">{name}</p>
          <p className="text-xs text-[#C8E6E6] capitalize">{role}</p>
        </div>
      </div>
      {/* Options button */}
      <button className="text-[#C8E6E6] opacity-70 hover:opacity-100 transition-opacity">
        ⋯
      </button>
    </div>
  )
}
