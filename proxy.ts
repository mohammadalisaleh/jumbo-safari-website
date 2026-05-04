import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Only intercept the root path and explicit locale-prefixed paths.
  // This prevents the middleware from interfering with root-level pages
  // like /national-parks/*, /itineraries/*, /about, /contact, etc.
  matcher: [
    "/",
    "/(en|pl|cs)/:path*",
  ],
}
