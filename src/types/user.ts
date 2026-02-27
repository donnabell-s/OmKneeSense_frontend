export type Role = "practitioner" | "patient"

export interface User {
  id: string
  name: string
  email: string
  role: Role
}

export interface UserContextType {
  id: string
  name: string
  email: string
  role: Role | ""
}