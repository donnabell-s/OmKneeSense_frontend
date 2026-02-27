"use client"

import { useUser } from "@/context/UserContext"
import PractitionerDashboard from "@/components/dashboard/PractitionerDashboard"
import PatientDashboard from "@/components/dashboard/PatientDashboard"

export default function DashboardPage() {
  const { role } = useUser()

  return (
    <div>
      {role === "practitioner" && <PractitionerDashboard />}
      {role === "patient" && <PatientDashboard />}
    </div>
  )
}