import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shreeramatiles-fixed.vercel.app'),
  title: 'Shree Rama Tiles and Pavers Manufacturers | Bengaluru',
  description:
    'Shree Rama Tiles and Pavers Manufacturers is a factory-direct concrete products manufacturer in Bengaluru. We manufacture premium concrete pavers, drainage slabs, parking tiles, compound walls, grass pavers, and precast concrete solutions.',
  keywords: [
    'shree rama tiles',
    'shree rama pavers',
    'shree rama tiles and pavers',
    'shree rama tiles and pavers manufacturers',
    'concrete pavers bengaluru',
    'paver blocks manufacturer bangalore',
    'drainage slab manufacturer bangalore',
    'precast compound wall bengaluru',
    'parking tiles bangalore',
    'grass pavers bangalore',
    'curb stones bangalore',
    'concrete products factory direct bengaluru',
  ],
  authors: [{ name: 'Shree Rama Tiles and Pavers Manufacturers' }],
  creator: 'Shree Rama Tiles and Pavers Manufacturers',
  publisher: 'Shree Rama Tiles and Pavers Manufacturers',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: '/images/shree-rama-logo.webp',
    apple: '/images/shree-rama-logo.webp',
  },
  openGraph: {
    title: 'Shree Rama Tiles and Pavers Manufacturers | Bengaluru',
    description:
      'Factory-direct manufacturer of concrete pavers, drainage slabs, parking tiles, compound walls, and precast concrete solutions in Bengaluru.',
    url: 'https://shreeramatiles-fixed.vercel.app',
    siteName: 'Shree Rama Tiles and Pavers Manufacturers',
    images: [
      {
        url: '/images/hero-desktop.webp',
        width: 1200,
        height: 630,
        alt: 'Shree Rama Tiles and Pavers manufacturing yard and concrete products in Bengaluru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Rama Tiles and Pavers Manufacturers | Bengaluru',
    description:
      'Factory-direct concrete pavers, drainage slabs, parking tiles, and precast products in Bengaluru.',
    images: ['/images/hero-desktop.webp'],
  },
  alternates: {
    canonical: 'https://shreeramatiles-fixed.vercel.app',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#B45309',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Shree Rama Tiles and Pavers Manufacturers',
  alternateName: ['Shree Rama Tiles', 'Shree Rama Pavers', 'Shree Rama Concrete Products'],
  description:
    'Factory-direct manufacturer of concrete pavers, drainage slabs, parking tiles, compound walls, cover blocks, curbs, and custom precast concrete products in Bengaluru.',
  url: 'https://shreeramatiles-fixed.vercel.app',
  telephone: ['+91-9035501568', '+91-7892679116'],
  image: 'https://shreeramatiles-fixed.vercel.app/images/hero-desktop.webp',
  logo: 'https://shreeramatiles-fixed.vercel.app/images/shree-rama-logo.webp',
  priceRange: '₹30 - ₹170',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sy No. 35/1, Near Byrapura Village, Arakere Village, Hesaraghatta Hobli, Yelahanka Taluk',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '562157',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.1968,
    longitude: 77.4184,
  },
  hasMap: 'https://maps.app.goo.gl/2jkHVXqMAik5rZ5z7?g_st=aw',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Bengaluru',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Karnataka',
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Concrete Paver Blocks',
        description: 'I Shape, Zig Zag, Square, and Rectangle Paver Tiles for residential and commercial paving.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Heavy Duty Precast Drainage Slabs',
        description: 'Precast concrete drainage slabs for commercial and residential stormwater management.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Readymade Precast Compound Wall',
        description: 'Quick-installation durable precast compound boundary wall panels.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-stone-50">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="antialiased bg-stone-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
