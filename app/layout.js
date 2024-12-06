export const metadata = {
  title: 'Application Next',
  description: 'Ma premiere application Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
