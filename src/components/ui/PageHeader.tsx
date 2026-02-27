interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
        <h2 className="text-3xl font-semibold whitespace-nowrap">
            {title}
        </h2>
      {subtitle && (
        <p className="text-md text-[#455858] mt-1">{subtitle}</p>
      )}
    </div>
  )
}