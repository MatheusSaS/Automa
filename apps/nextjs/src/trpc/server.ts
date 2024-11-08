import { headers } from "next/headers"
import { createTRPCProxyClient, loggerLink } from "@trpc/client"

import type { AppRouter } from "@automa/api"

import { endingLink, transformer } from "./shared"

export const api = createTRPCProxyClient<AppRouter>({
  transformer: transformer,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    endingLink({
      headers: () => {
        const h = new Map(headers())
        h.delete("connection")
        h.delete("transfer-encoding")
        h.set("x-trpc-source", "server")
        return Object.fromEntries(h.entries())
      },
    }),
  ],
})

export { type RouterInputs, type RouterOutputs } from "@automa/api"
