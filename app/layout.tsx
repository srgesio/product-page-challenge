import { ProductProvider } from './contexts/ProductPageContext'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ProductProvider>
          {children}
        </ProductProvider>
      </body>
    </html>
  )
}
