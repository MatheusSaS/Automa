import { lambdaExempleRoute } from "./router/lambdaExemple"
import { createTRPCRouter } from "./trpc"

// Deployed to /trpc/lambda/**
export const lambdaRouter = createTRPCRouter({
  lambdaExemple: lambdaExempleRoute,
})
