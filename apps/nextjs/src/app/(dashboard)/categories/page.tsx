import { api } from "@/trpc/server"
import { ContentLayout } from "../_components/content-layout"
import { CategoriesTable } from "./_components/categories-table"

export default async function CategoriesPage() {
  const { categories } = await api.categorie.list.query()

  return (
    <ContentLayout title="Dashboard">
      <CategoriesTable categories={categories} />
    </ContentLayout>
  )
}
