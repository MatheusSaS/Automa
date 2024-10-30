"use server"

import { signIn } from "@automa/auth"

export async function signInOauthAction(provider: "google" | "apple") {
  await signIn(provider)
}
