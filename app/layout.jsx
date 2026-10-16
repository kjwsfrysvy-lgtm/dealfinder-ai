import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #1e293b' }}>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>DealFinder AI</h1>
            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '500' }}>
                    Se connecter
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </header>
          <main style={{ padding: '24px' }}>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
