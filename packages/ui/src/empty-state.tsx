import { ComponentProps } from "react"
import Link from "next/link"

import { cn } from "@automa/utils"

import { Button } from "./button"
import { EmptyBlock } from "./empty-block"

export function EmptyState({
  buttonText,
  buttonLink,
  ...rest
}: {
  buttonText?: string
  buttonLink?: string
} & Omit<ComponentProps<typeof EmptyBlock>, "children">) {
  return (
    <EmptyBlock {...rest}>
      {buttonText && buttonLink && (
        <Link
          href={buttonLink}
          {...(buttonLink.startsWith("http") ? { target: "_blank" } : {})}
          className={cn(
            Button({ type: "secondary" }),
            "flex h-8 items-center justify-center gap-2 rounded-md border px-4 text-sm",
          )}
        >
          <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            {buttonText}
          </span>
        </Link>
      )}
    </EmptyBlock>
  )
}
