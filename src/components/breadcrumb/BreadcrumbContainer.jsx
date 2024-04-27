import { cn } from "@/lib/utils"

export default function BreadcrumbContainer({children, className}) {
  return (
    <div
      className={cn(
        'flex flex-row [&_a]:mr-2 pt-4 md:pt-8 ml-3 md:mx-[6.25rem]',
        className,
      )}
    >
      {children}
    </div>
  )
}
