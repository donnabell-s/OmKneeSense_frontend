interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center">
      <p className="text-3xl font-bold text-[#1C2121]">{value}</p>
      <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{label}</p>
    </div>
  )
}