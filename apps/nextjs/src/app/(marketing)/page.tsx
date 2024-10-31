import Footer from "@/components/footer"
import { getLocaleOnServer, useTranslation as translate } from "@/i18n/server"
import { Button } from "@automa/ui"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const locale = getLocaleOnServer()

  const { t } = await translate(locale, "home")
  return (
    <>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Aplicação completa para a vaga de desenvolvedor Next.JS da{" "}
              <p className="text-primary">Automa Trade</p>
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Aplicação realizada com as tecnologias: Next.JS, Tailind CSS,
              tRPC, Shadcn, Prisma, Kysely
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </section>
          <div className="relative flex w-full justify-center">
            <Image
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="rounded-xl border shadow-sm dark:hidden"
            />
            <Image
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="hidden rounded-xl border border-zinc-600 shadow-sm dark:block dark:shadow-gray-500/5"
            />
            <Image
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="absolute bottom-0 right-0 hidden rounded-xl border dark:hidden lg:block"
            />
            <Image
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="absolute bottom-0 right-0 hidden rounded-xl border border-zinc-600 dark:lg:block"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
