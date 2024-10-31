import { PrismaClient } from "@prisma/client"
import { remember } from "./remember"
import { Pool } from "@neondatabase/serverless"
import { PrismaNeon } from "@prisma/adapter-neon"

const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL })
const adapter = new PrismaNeon(neon)

export const prisma = remember("prisma", () => new PrismaClient({ adapter }))
