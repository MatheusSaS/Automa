"use server"
import { signOut } from "@automa/auth"

export async function SignOut() {
  signOut()
}
