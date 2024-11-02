import { api } from "@/trpc/server"
import { ContentLayout } from "../_components/content-layout"
import { ProductsTable } from "./_components/products-table"

export default async function ProductsPage() {
  const { products } = await api.product.list.query()
  console.log(products)

  return (
    <ContentLayout title="Produtos">
      <ProductsTable products={products} />
    </ContentLayout>
  )
}
