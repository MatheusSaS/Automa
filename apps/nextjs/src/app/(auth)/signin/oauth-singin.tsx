"use client"

import React from "react"

import { Button } from "@automa/ui"
import * as Icons from "@automa/ui"
import { signInOauthAction } from "./action-oauth-signin"

export default function OauthSingIn() {
  const [isLoading, setIsLoading] = React.useState<"google" | "apple" | null>(
    null,
  )

  const oauthSignIn = async (provider: "google" | "apple") => {
    try {
      setIsLoading(provider)
      await signInOauthAction(provider)
    } catch (cause) {
      setIsLoading(null)
      console.error(cause)
    }
  }
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        {isLoading ? (
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Button
            size={"lg"}
            variant={"outline"}
            className="w-full shadow"
            onClick={() => oauthSignIn("google")}
          >
            <Icons.Google />
          </Button>
        )}
      </div>
    </>
  )
}
