"use client"

import type { UrlObject } from "url"
import type { ReactNode } from "react"
import { useState } from "react"
import Link from "next/link"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { HelpCircle } from "lucide-react"

import { cn } from "@automa/utils"

export function TooltipProvider({ children }: { children: ReactNode }) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      {children}
    </TooltipPrimitive.Provider>
  )
}

interface TooltipProps {
  children: ReactNode
  content: ReactNode | string
  side?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({ children, content, side = "top" }: TooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
      <TooltipPrimitive.Trigger
        asChild
        onClick={() => {
          setOpen(true)
        }}
        onBlur={() => {
          setOpen(false)
        }}
      >
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          sideOffset={8}
          side={side}
          className="z-[99] animate-slide-up-fade items-center overflow-hidden rounded-md border border-gray-200 bg-white shadow-md"
        >
          {typeof content === "string" ? (
            <span className="block max-w-xs px-4 py-2 text-center text-sm text-gray-700">
              {content}
            </span>
          ) : (
            content
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

export function TooltipContent({
  title,
  cta,
  href,
  target,
  onClick,
}: {
  title: string
  cta?: string
  href?: string
  target?: string
  onClick?: () => void
}) {
  return (
    <div className="flex max-w-xs flex-col items-center space-y-3 p-4 text-center">
      <p className="text-sm text-gray-700">{title}</p>
      {cta &&
        (href ? (
          <Link
            href={href}
            {...(target ? { target } : {})}
            className="mt-4 w-full rounded-md border border-black bg-black px-3 py-1.5 text-center text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            {cta}
          </Link>
        ) : onClick ? (
          <button
            type="button"
            className="mt-4 w-full rounded-md border border-black bg-black px-3 py-1.5 text-center text-sm text-white transition-all hover:bg-white hover:text-black"
            onClick={onClick}
          >
            {cta}
          </button>
        ) : null)}
    </div>
  )
}

export function InfoTooltip({ content }: { content: ReactNode | string }) {
  return (
    <Tooltip content={content}>
      <HelpCircle className="h-4 w-4 text-gray-500" />
    </Tooltip>
  )
}

type LinkTooltipProps = {
  content: ReactNode | string
  icon?: ReactNode
  href: string | UrlObject
  className?: string
}

export function LinkTooltip({
  content,
  icon,
  href,
  className,
}: LinkTooltipProps) {
  return (
    <Tooltip content={content} side="right">
      <Link
        href={href}
        className={cn(
          "rounded-md p-2 hover:bg-primary/20 hover:text-primary",
          className,
        )}
      >
        <span className="[&_svg]:h-[24px] [&_svg]:w-[24px]">{icon}</span>
      </Link>
    </Tooltip>
  )
}
