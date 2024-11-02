import type { NextRequest } from "next/server"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { createTRPCContext } from "@automa/api"
import { edgeRouter } from "@automa/api/edge"
import { auth, validateToken } from "@automa/auth"
//export const runtime = "edge"
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
    endpoint: "/api/trpc/edge",
    router: edgeRouter,
    req: req,
    createContext: () => createContext(req),
    onError: ({ error, path }) => {
      console.log("Error in tRPC handler (edge) on path", path)
      console.error(error)
    },
  })
export { handler as GET, handler as POST }
