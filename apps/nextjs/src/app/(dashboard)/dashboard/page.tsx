import { Card, CardContent, CardHeader, CardTitle } from "@automa/ui"
import { ContentLayout } from "../_components/content-layout"
import { ProductsAreaChart } from "./_components/products-area-chart"
import { CategoriesPieChart } from "./_components/categories-pie-chart"

export default async function DashPage() {
  return (
    <ContentLayout title="Dashboard">
      <div className="space-y-2">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Produtos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Categorias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 min-h-64">
            <ProductsAreaChart />
          </div>
          <div className="col-span-1 min-h-64">
            <CategoriesPieChart />
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
