"use client"

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@automa/ui"
import { useState, useEffect } from "react"
import { CreateProduct, createProductSchema } from "@automa/api/validators"
import { api } from "@/trpc/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import type { FieldErrors } from "react-hook-form"
import { useZodForm } from "@/lib/zod-form"
import * as Icons from "@automa/ui"

type Categories = {
  name: string
  id: string
}[]

type Product = {
  id: string
  name: string
  description: string | null
  price: number
  createdAt: Date
  categorieName: string | null
} | null

export default function CreateEditProductForm({
  product,
  categories,
}: {
  product?: Product
  categories: Categories
}) {
  const [loading, SetLoading] = useState(false)
  const router = useRouter()
  const onError = (errors: FieldErrors) => {
    console.error("Erros de validação:", errors)
  }

  const form = useZodForm({
    schema: createProductSchema,
    defaultValues: {
      name: product?.name || "",
      price: product?.price || 0,
      categorie: product?.categorieName || "",
      description: product?.description || "",
    },
  })

  async function onSubmit(data: CreateProduct) {
    try {
      SetLoading(true)
      if (product) {
        await api.product.update.mutate({ id: product.id, ...data })
        toast.success(`Produto atualizado com sucesso`)
      } else {
        await api.product.create.mutate(data)
        toast.success(`Produto criado com sucesso`)
      }
      SetLoading(false)
      router.push("/products")
      router.refresh()
    } catch (error) {
      SetLoading(false)
      toast.error("Erro ao salvar Produto", {
        description:
          "Não foi possível realizar o cadastro/atualização do produto. Por favor, tente novamente.",
      })
    }
  }

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          {product ? "Editar produto" : "Criar novo produto"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, onError)}
            className="flex flex-col space-y-3 px-4 py-8 text-left"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormDescription>
                    Nome de identificação do Produto
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      onChange={(e) =>
                        field.onChange(e.target.valueAsNumber || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {categories.length > 0 && (
              <FormField
                control={form.control}
                name="categorie"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={product?.categorieName || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((categorie) => (
                          <SelectItem key={categorie.id} value={categorie.id}>
                            {categorie.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                </FormItem>
              )}
            />

            {loading ? (
              <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Button type="submit">
                {product ? "Salvar" : "Criar Produto"}
              </Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
