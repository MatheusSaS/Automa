import { cn } from "@automa/utils"

export function DashboardShell(props: {
  title?: string
  description?: React.ReactNode
  headerAction?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <div>
      {props.title && (
        <div className="flex h-36 items-center border-b border-gray-200 bg-white">
          <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
            <div className="flex items-center justify-between">
              <div className="w-1/2 md:w-full">
                <h1 className="truncate text-xl text-gray-600 sm:text-2xl">
                  {props.title}
                </h1>
                <h2 className="text-base text-muted-foreground">
                  {props.description}
                </h2>
              </div>

              {props.headerAction}
            </div>
          </div>
        </div>
      )}

      <div
        className={cn(
          props.className,
          "mx-auto mt-10 w-full max-w-screen-xl px-2.5 pb-5 lg:px-20",
        )}
      >
        {props.children}
      </div>
    </div>
  )
}
