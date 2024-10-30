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
      <div className="flex space-x-2">
        <Button
          type="outline"
          size={"lg"}
          className="w-full p-2 shadow"
          loading={isLoading === "apple"}
          icon={<Icons.GitHub />}
          onClick={() => oauthSignIn("apple")}
        ></Button>
        <Button
          type="outline"
          size={"lg"}
          className="w-full shadow"
          loading={isLoading === "google"}
          icon={<Icons.Google />}
          onClick={() => oauthSignIn("google")}
        ></Button>
      </div>
    </>
  )
}
