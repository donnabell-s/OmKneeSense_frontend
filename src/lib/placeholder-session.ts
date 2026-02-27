import { Session, } from "@/types/session"
import { Role } from "@/types/user"

export const practitionerSession: Session = {
  user: {
    id: "001",
    name: "Dr. Jane Doe",
    email: "janedoe@email.com",
    role: "practitioner" as Role
  }
}

export const patientSession: Session = {
  user: {
    id: "002",
    name: "John Doe",
    email: "johndoe@email.com",
    role: "patient" as Role
  }
}

// export const placeholderSession = practitionerSession
export const placeholderSession = patientSession