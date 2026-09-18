'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FALLBACK_PRODUCTS, Product } from '@/lib/products-data'

export function Products() {
  const [productsList, setProductsList] = useState<Product[]>(FALLBACK_PRODUCTS)
  const [dataSource, setDataSource] = useState<'static' | 'google-sheets'>('static')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      try {
        setIsLoading(true)
        const res = await fetch('/api/products')
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        const data = await res.json()

        if (isMounted && data?.products && Array.isArray(data.products) && data.products.length > 0) {
          setProductsList(data.products)
          if (data.source === 'google-sheets') {
            setDataSource('google-sheets')
          }
        }
      } catch (err) {
        // In case of error, FALLBACK_PRODUCTS remain active smoothly
        console.warn('Could not load products from /api/products, using static fallback catalog:', err)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  const handleWhatsApp = (productName: string) => {
    const message = `Hello, I would like to request a quote for ${productName}. Please share pricing and availability.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919035501568?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="products" className="bg-stone-50 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
              Our Products
            </span>
            {dataSource === 'google-sheets' && (
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Live from Google Sheets
              </span>
            )}
          </div>
          <h2 className="mt-3 mb-4 max-w-2xl text-4xl font-heading font-bold tracking-tight text-charcoal md:text-6xl">
            Premium Concrete Pavers & Precast Products
          </h2>
          <p className="max-w-2xl text-lg leading-7 text-stone-600">
            High-quality concrete products manufactured for residential, commercial and industrial projects in Bengaluru.
          </p>
        </div>

        {/* Products Grid
            Hover states are pure CSS (Tailwind transitions) — no JS/IntersectionObserver.
            Each card: hover:-translate-y-1 hover:shadow-xl hover:border-terracotta/40
            Image: group-hover:scale-105 (700ms ease for a smooth pan feel).
            TODO (Task 5): When the Google Sheets API supports a `featured` column,
            replace the index===0 check below with product.featured === true.
        */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productsList.map((product, index) => {
            // Conservative featured treatment: first card only gets lg:col-span-2
            // and a warm bg tint to break grid monotony without altering the data model.
            const isFeatured = index === 0
            return (
              <div
                key={product.id}
                className={[
                  'group flex flex-col overflow-hidden rounded-2xl border border-stone-200 shadow-sm',
                  'transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-xl',
                  isFeatured
                    ? 'bg-stone-100 lg:col-span-2'
                    : 'bg-white',
                ].join(' ')}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden bg-stone-200 ${isFeatured ? 'aspect-[16/7]' : 'aspect-[4/3] min-h-[190px] sm:min-h-0'}`}>
                  <Image
                    src={product.image || '/images/hero-desktop.webp'}
                    alt={`${product.name} manufactured by Shree Rama Tiles and Pavers Bengaluru`}
                    fill
                    sizes={isFeatured
                      ? '(max-width: 1279px) 100vw, 66vw'
                      : '(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw'}
                    className={`${product.imageClassName ?? 'object-cover object-center'} transition-transform duration-700 group-hover:scale-105`}
                  />
                  {product.category && (
                    <span className="absolute top-3 right-3 z-10 rounded-full bg-charcoal/75 backdrop-blur-sm px-3 py-1 text-xs font-medium text-stone-100">
                      {product.category}
                    </span>
                  )}
                  {isFeatured && (
                    <span className="absolute top-3 left-3 z-10 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-white shadow">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-4 flex-grow">{product.description}</p>

                  {/* Price */}
                  <div className="mb-6 pt-4 border-t border-stone-200">
                    <span className="text-2xl font-bold text-terracotta">{product.price}</span>
                  </div>

                  {/* CTA Button — "Request Quote" replaces "GET BEST PRICE" (Task 1).
                      Old copy read like an IndiaMART/TradeIndia wholesale listing,
                      inconsistent with the "factory-direct, no middleman" positioning. */}
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="w-full rounded-lg border border-terracotta bg-transparent py-3 text-center font-semibold text-terracotta transition-colors hover:bg-terracotta hover:text-white"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-stone-200">
          <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
            Need Bulk Supply?
          </h3>
          <p className="text-stone-600 mb-8">Contact us today for factory-direct pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919035501568"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta text-white px-8 py-3 rounded-lg font-semibold hover:bg-terracotta-light transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="tel:+919035501568"
              className="border-2 border-terracotta text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-terracotta/5 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
