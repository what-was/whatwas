export {}

declare global {
  interface CustomJwtSessionClaims {
    fullName?: string
    primaryEmail?: string
    imageUrl?: string
  }
}