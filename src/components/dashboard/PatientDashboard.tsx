import PageHeader from "@/components/ui/PageHeader"
import SectionCard from "@/components/ui/SectionCard"
import PageGrid from "@/components/layout/PageGrid"
import UploadSession from "@/components/patient/UploadSession"
import KneeZoneMap from "@/components/patient/KneeZoneMap"
import SessionHistoryChart from "@/components/patient/SessionHistoryChart"
import PhysioNotes from "@/components/patient/PhysioNotes"
import StatCard from "@/components/ui/StatCard"

export default function PatientDashboard() {
  return (
    <div>
      <PageHeader 
        title="Dashboard" 
        subtitle="Week 5 of your recovery program · Last session: Feb 23" 
      />
      <PageGrid>

        <div className="grid grid-cols-4 gap-4">
          <StatCard value="22" label="Total Sessions" />
          <StatCard value="+4%" label="Δ Left vs Baseline" />
          <StatCard value="-3%" label="Δ Centre vs Baseline" />
          <StatCard value="+2%" label="Δ Right vs Baseline" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SectionCard title="Upload Session">
            <UploadSession />
          </SectionCard>
          <SectionCard title="Knee Zone Map">
            <KneeZoneMap />
          </SectionCard>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SectionCard title="Weekly Session History">
            <SessionHistoryChart />
          </SectionCard>
          <SectionCard title="Physio Notes">
            <PhysioNotes />
          </SectionCard>
        </div>

      </PageGrid>
    </div>
  )
}