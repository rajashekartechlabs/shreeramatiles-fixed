import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHREE RAMA TILES AND PAVERS MANUFACTURERS - Premium Concrete Products',
  description: 'Factory-direct manufacturer of concrete pavers, drainage slabs, parking tiles, compound walls and precast concrete products in Bengaluru. Premium quality at competitive prices.',
  generator: 'v0.app',
  icons: {
    icon: '/images/shree-rama-logo.webp',
    apple: '/images/shree-rama-logo.webp',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#B45309',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-stone-50">
      <body className="antialiased bg-stone-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
