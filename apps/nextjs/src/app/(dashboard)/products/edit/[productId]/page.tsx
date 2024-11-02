import { ContentLayout } from "@/app/(dashboard)/_components/content-layout"
import { api } from "@/trpc/server"
import CreateEditProductForm from "../../_components/create-edit-product-form"

export default async function EditProduct({
  params,
}: {
  params: { productId: string }
}) {
  console.log(params.productId)

  const { categories } = await api.categorie.list.query()
  const { product } = await api.product.byId.query({ id: params.productId })
  console.log(product)

  return (
    <ContentLayout title="Editr Produto">
      <CreateEditProductForm categories={categories} product={product} />
    </ContentLayout>
  )
}
