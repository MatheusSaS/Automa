import * as z from "zod"

/**
 * Shared validators used in both the frontend and backend
 */

export const createProductSchema = z.object({
  id: z.string().optional(),
  name: z
    .string({ message: "O campo é obrigatório" })
    .min(3, "Nome do produto deve ter pelo menos 3 caracteres."),
  description: z.string().optional(),
  categorie: z.string().optional(),
  price: z.number({ message: "O campo é obrigatório" }),
})
export type CreateProduct = z.infer<typeof createProductSchema>

export const createCategorieSchema = z.object({
  name: z
    .string({ message: "O campo é obrigatório" })
    .min(3, "Categoria deve ter pelo menos 3 caracteres."),
})
export type CreateCategorie = z.infer<typeof createCategorieSchema>
