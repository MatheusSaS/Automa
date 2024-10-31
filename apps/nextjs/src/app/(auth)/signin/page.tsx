import { Suspense } from "react"

import { Button } from "@automa/ui"
import OauthSingIn from "./oauth-singin"
import Link from "next/link"
import LogoAutoma from "@/components/logo-automa"

export default function SinginPage() {
  return (
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border border-y sm:rounded-2xl sm:border sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center sm:px-16">
        <Link href="/">
          <LogoAutoma />
        </Link>
        <h3 className="text-xl font-semibold">Faça login com o Google</h3>
        <p className="text-sm">
          Teste realizado para a empresa Automa Trade para vaga de Desenvolvedor
          Next.JS
        </p>
      </div>
      <div className="flex flex-col space-y-3 bg-background px-4 py-8 sm:px-16">
        <Suspense
          fallback={
            <>
              <Button disabled={true} />
              <Button disabled={true} />
              <Button disabled={true} />
              <div className="mx-auto h-5 w-3/4 rounded-lg" />
            </>
          }
        ></Suspense>

        <OauthSingIn />
      </div>
    </div>
  )
}
