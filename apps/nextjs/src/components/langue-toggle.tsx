"use client"

import * as React from "react"
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@automa/ui"
import Image from "next/image"
import { useContext } from "use-context-selector"
import I18NContext from "@/context/i18n"

export function LangueToggle() {
  const { locale, setLocaleOnClient } = useContext(I18NContext)

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className="mr-2 h-8 w-8 rounded-full bg-background"
            variant="outline"
            size="icon"
            onClick={() =>
              setLocaleOnClient(locale === "pt-BR" ? "en-US" : "pt-BR")
            }
          >
            <Image
              src={"/brasil-16.png"}
              alt="logo Automa trade"
              className={`h-[1.2rem] w-[1.2rem] scale-0 transition-transform duration-500 ease-in-out ${locale === "pt-BR" ? "scale-100" : "hidden"}`}
              width={10}
              height={10}
            />
            <Image
              src={"/eua-16.png"}
              alt="logo Automa trade"
              className={`scale-1000 absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-transform duration-500 ease-in-out ${locale === "pt-BR" ? "hidden" : "scale-100"}`}
              width={10}
              height={10}
            />
            <span className="sr-only">Troca idioma</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Troca idioma</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
