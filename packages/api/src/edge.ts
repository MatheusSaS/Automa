import { categorieRouter } from "./router/categorie"
import { productRouter } from "./router/product"
import { createTRPCRouter } from "./trpc"

// Deployed to /trpc/edge/**
export const edgeRouter = createTRPCRouter({
  product: productRouter,
  categorie: categorieRouter,
})
