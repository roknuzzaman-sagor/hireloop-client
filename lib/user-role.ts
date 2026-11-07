export const USER_ROLES = [
  "seeker",
  "recruiter",
  "admin",
] as const

export type UserRole = (typeof USER_ROLES)[number]

export const USER_ROLE_FIELD = {
  type: [...USER_ROLES],
  input: true,
  defaultValue: "seeker",
}
