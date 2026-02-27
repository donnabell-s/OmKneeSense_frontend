"use client"

import { createContext, useContext } from "react"
import { placeholderSession } from "@/lib/placeholder-session"
import { UserContextType } from "@/types/user"

const UserContext = createContext<UserContextType>({
  id: "",
  name: "",
  email: "",
  role: ""
})

export function useUser() {
  return useContext(UserContext)
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const session = placeholderSession

  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    role: session.user.role,
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}