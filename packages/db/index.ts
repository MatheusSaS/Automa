import {
  Kysely,
  PostgresAdapter,
  PostgresIntrospector,
  PostgresQueryCompiler,
} from "kysely"
import kyselyExtension from "prisma-extension-kysely"

import { DB } from "./prisma/types"
import { remember } from "./remember"
import { prisma } from "./prisma"

export * from "./prisma/enums"

export const db = remember("kyselyPrisma", () =>
  prisma.$extends(
    kyselyExtension({
      kysely: (driver) =>
        new Kysely<DB>({
          dialect: {
            createAdapter: () => new PostgresAdapter(),
            createDriver: () => driver,
            createIntrospector: (db) => new PostgresIntrospector(db),
            createQueryCompiler: () => new PostgresQueryCompiler(),
          },
        }),
    }),
  ),
)
