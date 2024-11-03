import NextAuth from "next-auth"

import { authConfig } from "./auth.config"

export type { Session } from "next-auth"

const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    session: async ({ session }) => session,
  },
})

export { handlers, auth, signIn, signOut }

export {
  invalidateSessionToken,
  validateToken,
  isSecureContext,
} from "./auth.config"
