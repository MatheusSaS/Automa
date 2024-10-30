import { z } from "zod"

import { createTRPCRouter, protectedProcedure } from "../trpc"

globalThis.File = File

export const lambdaExempleRoute = createTRPCRouter({
  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      return "ingestion"
    }),
})
