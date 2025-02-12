import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'


export default clerkMiddleware()


const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export const onRequest = clerkMiddleware((auth, context) => {
  const { redirectToSignIn, userId } = auth()


  if (!userId && isProtectedRoute(context.request.url)) {
    return redirectToSignIn()
  }

  
  return context.next()
})

export const config = {
  matcher: [
   
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    
    '/(api|trpc)(.*)',
  ],
}
