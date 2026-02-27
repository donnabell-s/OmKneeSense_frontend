interface SectionCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: string
}

export default function SectionCard({ title, subtitle, children, footer }: SectionCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6">
      {/* Header + line */}
      <div className="flex items-center gap-3 mb-1">
        <h3 className="text-sm font-semibold text-[#1C2121] uppercase tracking-wider whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-px bg-[#455858]" />
      </div>
      {/* Subtitle */}
      {subtitle && (
        <p className="text-xs text-gray-400 mb-4">{subtitle}</p>
      )}
      {/* Content */}
      <div className="mt-4">
        {children}
      </div>
      {/* Footer */}
      {footer && (
        <p className="text-xs text-gray-400 mt-4">{footer}</p>
      )}
    </div>
  )
}