import {createThemeSessionResolver} from 'remix-themes'
import { createCookieSessionStorage } from "@remix-run/node"

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__remix-themes',
    // domain: 'remix.run',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: [process.env.SESSION_SECRET!],
    // secure: true,
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)