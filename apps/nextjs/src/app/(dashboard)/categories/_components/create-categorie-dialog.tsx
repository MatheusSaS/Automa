import { useZodForm } from "@/lib/zod-form"
import { api } from "@/trpc/client"
import { CreateCategorie, createCategorieSchema } from "@automa/api/validators"
import * as Icons from "@automa/ui"
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
} from "@automa/ui"
import { useRouter } from "next/navigation"
import { useState } from "react"
import type { FieldErrors } from "react-hook-form"
import { toast } from "sonner"

export function CreateCategorieDialog() {
  const [loading, SetLoading] = useState(false)
  const router = useRouter()
  const onError = (errors: FieldErrors) => {
    console.error("Erros de validação:", errors)
  }

  const form = useZodForm({
    schema: createCategorieSchema,
  })
  async function onSubmit(data: CreateCategorie) {
    try {
      SetLoading(true)
      await api.categorie.create.mutate(data)
      router.refresh()
      toast.success(`Categoria criado com sucesso`)
      SetLoading(false)
    } catch (error) {
      SetLoading(false)
      toast.error("Erro ao criar categoria", {
        description:
          "Não foi possível realizar o cadastro da categoria. Por favor, tente novamente.",
      })
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-2 md:ml-auto">Adicionar Categoria</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionr categoria</DialogTitle>
          <DialogDescription>
            Adicione as categorias dos produtos
          </DialogDescription>
        </DialogHeader>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              {loading ? (
                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Button type="submit">Salvar</Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
