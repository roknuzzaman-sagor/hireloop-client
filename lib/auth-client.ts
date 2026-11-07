import { createAuthClient } from "better-auth/react"
import type { BetterAuthClientPlugin } from "better-auth/client"
import { USER_ROLE_FIELD } from "@/lib/user-role"

const userRoleTypes = {
  id: "user-role-types",
  $InferServerPlugin: {
    schema: {
      user: {
        fields: {
          role: USER_ROLE_FIELD,
        },
      },
    },
  },
} satisfies BetterAuthClientPlugin

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [userRoleTypes],
})

export const { signIn, signUp, useSession } = authClient