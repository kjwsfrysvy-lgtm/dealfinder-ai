export const metadata = {
  title: 'DealFinder AI',
  description: 'Plateforme M&A Intelligence',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a' }}>
        {children}
      </body>
    </html>
  );
}
