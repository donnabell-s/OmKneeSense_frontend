import { IconType } from "react-icons"

export interface NavLink {
  label: string
  href: string
  icon: IconType
}

export interface NavGroup {
  section: string
  items: NavLink[]
}