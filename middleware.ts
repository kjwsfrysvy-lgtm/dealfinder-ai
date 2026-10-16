import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Définir les routes publiques (accessibles sans connexion)
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Ignorer les fichiers internes de Next.js et les fichiers statiques
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Toujours exécuter pour les routes d'API
    '/(api|trpc)(.*)',
  ],
}
