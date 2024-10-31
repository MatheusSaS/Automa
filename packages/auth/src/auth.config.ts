import type {
  DefaultSession,
  NextAuthConfig,
  Session as NextAuthSession,
} from "next-auth"
import { skipCSRFCheck } from "@auth/core"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"

import { prisma } from "@automa/db/prisma"

// @ts-ignore
import { env } from "../env"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}

const adapter = PrismaAdapter(prisma)

const publicPages = ["/", "/signin"]
export const isSecureContext = env.NODE_ENV !== "development"

export const authConfig: NextAuthConfig = {
  adapter,
  // In development, we need to skip checks to allow Expo to work
  pages: {
    signIn: "/signin",
  },
  ...(!isSecureContext
    ? {
        skipCSRFCheck: skipCSRFCheck,
        trustHost: true,
      }
    : {}),
  secret: env.AUTH_SECRET,
  providers: [Google],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isPublicPages = publicPages.includes(nextUrl.pathname)
      if (!isPublicPages) {
        if (isLoggedIn) return true
        return false
      }
      return true
    },
    async redirect({ baseUrl, url }) {
      const callbackUrl = new URL(url).searchParams.get("callbackUrl")

      // Se existir `callbackUrl`, redireciona para ela após o login
      if (callbackUrl) {
        return callbackUrl
      }

      // Se não houver `callbackUrl`, redireciona para o dashboard
      if (url === baseUrl || url.endsWith("/signin")) {
        return baseUrl + "/dashboard"
      }

      // Mantém o redirecionamento para outras URLs, se for válido
      return url.startsWith(baseUrl) ? url : baseUrl
    },
    async session(opts) {
      if (!("user" in opts))
        throw new Error("unreachable with session strategy")

      return {
        ...opts.session,
        user: {
          ...opts.session.user,
          id: opts.user.id,
        },
      }
    },
  },
}

export const validateToken = async (
  token: string,
): Promise<NextAuthSession | null> => {
  const sessionToken = token.slice("Bearer ".length)
  const session = await adapter.getSessionAndUser?.(sessionToken)
  return session
    ? {
        user: {
          ...session.user,
        },
        expires: session.session.expires.toISOString(),
      }
    : null
}

export const invalidateSessionToken = async (token: string) => {
  const sessionToken = token.slice("Bearer ".length)
  await adapter.deleteSession?.(sessionToken)
}
