interface PageGridProps {
  children: React.ReactNode
}

export default function PageGrid({ children }: PageGridProps) {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  )
}