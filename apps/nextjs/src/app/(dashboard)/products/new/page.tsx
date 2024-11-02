import { api } from "@/trpc/server"
import { ContentLayout } from "../../_components/content-layout"
import CreateEditProductForm from "../_components/create-edit-product-form"

export default async function NewProduct() {
  const { categories } = await api.categorie.list.query()
  return (
    <ContentLayout title="Novo Produto">
      <CreateEditProductForm categories={categories} />
    </ContentLayout>
  )
}
