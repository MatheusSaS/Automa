import { Suspense } from "react"

import { Button, LogoLinx } from "@automa/ui"
import OauthSingIn from "./oauth-singin"

export default function SinginPage() {
  return (
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border border-y sm:rounded-2xl sm:border sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center sm:px-16">
        <a href="/">
          <LogoLinx className="h-10 w-10" />
        </a>
        <h3 className="text-xl font-semibold">Faça login no Linx Chat</h3>
        <p className="text-sm">
          O poder da IA na maior empresa de software do Brasil
        </p>
      </div>
      <div className="flex flex-col space-y-3 bg-background px-4 py-8 sm:px-16">
        <Suspense
          fallback={
            <>
              <Button disabled={true} type="secondary" />
              <Button disabled={true} type="secondary" />
              <Button disabled={true} type="secondary" />
              <div className="mx-auto h-5 w-3/4 rounded-lg" />
            </>
          }
        ></Suspense>

        <OauthSingIn />
      </div>
    </div>
  )
}
