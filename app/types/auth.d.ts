export {}

declare global {
  interface CustomJwtSessionClaims {
    username?: string
    firstName?: string
    lastName?: string
    imageUrl?: string
    primaryEmail?: string
  }
}