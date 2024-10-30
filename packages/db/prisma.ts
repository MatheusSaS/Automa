import { remember } from "./remember"
import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

export const prisma = remember("prisma", () =>
  new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } },
  }).$extends(withAccelerate()),
)
