import { v4 as uuidv4 } from "uuid"
import { createTRPCRouter, protectedProcedure } from "../trpc"
import { createCategorieSchema } from "../validators"
import { z } from "zod"

export const categorieRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createCategorieSchema)
    .mutation(async (opts) => {
      const { userId } = opts.ctx.auth
      const { name } = opts.input

      const categorie = await opts.ctx.db.$kysely
        .insertInto("Categorie")
        .values({
          id: uuidv4(),
          userId,
          name,
        })
        .execute()
      console.log(categorie)

      return
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      const { userId } = opts.ctx.auth
      const { id } = opts.input

      await opts.ctx.db.$kysely
        .deleteFrom("Categorie")
        .where("userId", "=", userId)
        .where("id", "=", id)
        .execute()

      return
    }),
  list: protectedProcedure.query(async (opts) => {
    const { userId } = opts.ctx.auth

    const categories = await opts.ctx.db.$kysely
      .selectFrom("Categorie")
      .select(["id", "name"])
      .where("userId", "=", userId)
      .orderBy("name")
      .execute()

    return { categories }
  }),
})
