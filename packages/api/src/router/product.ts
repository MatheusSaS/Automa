import { v4 as uuidv4 } from "uuid"
import { createTRPCRouter, protectedProcedure } from "../trpc"
import { createProductSchema } from "../validators"
import { z } from "zod"

export const productRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createProductSchema)
    .mutation(async (opts) => {
      const { userId } = opts.ctx.auth
      const { name, description, categorie, price } = opts.input
      await opts.ctx.db.$kysely
        .insertInto("Product")
        .values({
          id: uuidv4(),
          name,
          description,
          userId,
          categorieId: categorie || "",
          price,
        })
        .execute()

      return
    }),
  update: protectedProcedure
    .input(createProductSchema)
    .mutation(async (opts) => {
      const { userId } = opts.ctx.auth
      const { id, name, description, categorie, price } = opts.input
      await opts.ctx.db.$kysely
        .updateTable("Product")
        .set({
          name,
          description,
          userId,
          categorieId: categorie || "",
          price,
        })
        .where("id", "=", id || "")
        .executeTakeFirst()

      return
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      const { userId } = opts.ctx.auth
      const { id } = opts.input

      await opts.ctx.db.$kysely
        .deleteFrom("Product")
        .where("userId", "=", userId)
        .where("id", "=", id)
        .execute()

      return
    }),
  list: protectedProcedure.query(async (opts) => {
    const { userId } = opts.ctx.auth

    const products = await opts.ctx.db.$kysely
      .selectFrom("Product")
      .leftJoin("Categorie", "Product.categorieId", "Categorie.id")
      .select([
        "Product.id",
        "Product.name",
        "Product.price",
        "Product.description",
        "Product.createdAt",
        "Categorie.name as categorieName",
      ])
      .where("Product.userId", "=", userId)
      .orderBy("Product.name")
      .execute()

    return { products }
  }),
  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const { id } = opts.input

      const product = await opts.ctx.db.$kysely
        .selectFrom("Product")
        .leftJoin("Categorie", "Categorie.userId", "Product.userId")
        .select([
          "Product.id",
          "Product.name",
          "Product.price",
          "Product.description",
          "Product.createdAt",
          "Categorie.id as categorieName",
        ])
        .where("Product.id", "=", id)
        .orderBy("Product.name")
        .limit(1)
        .execute()

      return { product: product[0] }
    }),
})
