import type { ColumnType } from "kysely"
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

import type { AgentModelName } from "./enums"

export type Account = {
  id: Generated<string>
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}
export type Agents = {
  id: string
  userId: string
  name: string
  description: string | null
  promptSystem: string | null
  modelName: Generated<AgentModelName>
  temperature: Generated<number>
  createdAt: Generated<Timestamp>
}
export type Session = {
  id: Generated<string>
  sessionToken: string
  userId: string
  expires: Timestamp
}
export type User = {
  id: Generated<string>
  name: string | null
  email: string | null
  emailVerified: Timestamp | null
  image: string | null
}
export type VerificationToken = {
  id: Generated<string>
  identifier: string
  token: string
  expires: Timestamp
}
export type DB = {
  Account: Account
  Agents: Agents
  Session: Session
  User: User
  VerificationToken: VerificationToken
}
