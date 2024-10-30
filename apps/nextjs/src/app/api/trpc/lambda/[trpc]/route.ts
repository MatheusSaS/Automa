import type { NextRequest } from "next/server"
import { auth, validateToken } from "@automa/auth"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

import { createTRPCContext } from "@automa/api"
import { lambdaRouter } from "@automa/api/lambda"

const createContext = async (req: NextRequest) => {
  const authToken = req.headers.get("Authorization") ?? null
  const session = authToken ? await validateToken(authToken) : await auth()

  return createTRPCContext({
    headers: req.headers,
    auth: {
      session,
      token: authToken,
    },
    req,
  })
}

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc/lambda",
    router: lambdaRouter,
    req: req,
    createContext: () => createContext(req),
    onError: ({ error, path }) => {
      console.log("Error in tRPC handler (lambda) on path", path)
      console.error(error)
    },
  })

export { handler as GET, handler as POST }
