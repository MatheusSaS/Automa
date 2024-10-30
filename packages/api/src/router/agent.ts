import { z } from "zod"

import { genId } from "@automa/utils"

import { createTRPCRouter, protectedProcedure } from "../trpc"
import { createAgentSchema } from "../validators"

export const agentRouter = createTRPCRouter({
  create: protectedProcedure.input(createAgentSchema).mutation(async (opts) => {
    const { userId } = opts.ctx.auth
    const { name, description, promptSystem, modelName, temperature } =
      opts.input

    const projectId = "agent_" + genId()

    await opts.ctx.db.$kysely
      .insertInto("Agents")
      .values({
        id: projectId,
        name,
        description,
        userId: userId,
        promptSystem,
        modelName,
        temperature,
      })
      .execute()

    return projectId
  }),
  list: protectedProcedure.query(async (opts) => {
    const { userId } = opts.ctx.auth

    const agents = await opts.ctx.db.$kysely
      .selectFrom("Agents")
      .select(["id", "name", "description", "modelName"])
      .where("userId", "=", userId)
      .orderBy("name")
      .execute()

    return {
      agents,
    }
  }),
  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const { userId } = opts.ctx.auth
      const { id } = opts.input

      const agents = await opts.ctx.db.$kysely
        .selectFrom("Agents")
        .select(["id", "name", "description", "modelName"])
        .where("userId", "=", userId)
        .where("id", "=", id)
        .execute()

      return {
        agents,
      }
    }),
})
