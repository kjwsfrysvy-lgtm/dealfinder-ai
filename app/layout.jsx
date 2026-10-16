import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a', color: '#ffffff' }}>
          <header className="flex justify-between items-center p-4 border-b border-gray-800">
            <h1 className="text-xl font-bold">DealFinder AI</h1>
            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                    Se connecter
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
