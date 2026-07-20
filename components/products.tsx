'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Drainage Slab',
    price: '₹80 / Sq.ft',
    description: 'Heavy-duty drainage slabs for residential and commercial drainage systems.',
    image: '/images/drainage-slabs.png',
  },
  {
    id: 2,
    name: 'Readymade Compound Wall',
    price: '₹90 / Sq.ft',
    description: 'Strong precast compound wall panels with quick installation.',
    image: '/images/compound-walls.png',
  },
  {
    id: 3,
    name: 'Parking Tile',
    price: '₹30 / Sq.ft',
    description: 'Durable concrete parking tiles.',
    image: '/images/parking-tiles.png',
  },
  {
    id: 4,
    name: 'I Shape Paver (60 mm)',
    price: '₹40 / Sq.ft',
    description: 'Premium I-shaped concrete paver tiles for modern designs.',
    image: '/images/paver-tiles.png',
  },
  {
    id: 5,
    name: 'Zig Zag Paver (60 mm)',
    price: '₹40 / Sq.ft',
    description: 'Decorative zig zag paver tiles for attractive patterns.',
    image: '/images/paver-tiles.png',
  },
  {
    id: 6,
    name: 'Zig Zag Paver (80 mm)',
    price: '₹50 / Sq.ft',
    description: 'Heavy-duty zig zag paver tiles with enhanced thickness.',
    image: '/images/paver-tiles.png',
  },
  {
    id: 7,
    name: 'Square Paver (8×8, 60 mm)',
    price: '₹45 / Sq.ft',
    description: 'Classic square paver tiles for versatile applications.',
    image: '/images/square-paver.png',
  },
  {
    id: 8,
    name: 'Rectangle Paver (4×8, 60 mm)',
    price: '₹48 / Sq.ft',
    description: 'Rectangular paver tiles for linear designs and driveways.',
    image: '/images/rectangle-paver.png',
  },
  {
    id: 9,
    name: 'Grass Paver (60 mm)',
    price: '₹60 / Sq.ft',
    description: 'Eco-friendly grass paver tiles for green parking and landscaping.',
    image: '/images/grass-paver-full.png',
  },
  {
    id: 10,
    name: 'Grass Paver (80 mm)',
    price: '₹70 / Sq.ft',
    description: 'Heavy-duty grass paver tiles for high-traffic areas.',
    image: '/images/grass-paver-full.png',
  },
  {
    id: 11,
    name: 'Cover Block',
    price: '₹140 / 100 Pieces',
    description: 'Protective cover blocks for various construction applications.',
    image: '/images/cover-blocks.png',
  },
  {
    id: 12,
    name: 'Curb',
    price: '₹170 / Piece',
    description: 'Precast concrete curb elements for landscaping and boundaries.',
    image: '/images/curbs.png',
  },
  {
    id: 13,
    name: 'Curb Saucer Drain',
    price: '₹170 / Piece',
    description: 'Integrated curb and drainage solution for efficient water management.',
    image: '/images/curbs.png',
  },
]

export function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsApp = (productName) => {
    const message = `Hello, I am interested in the ${productName}. Please share your best price.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919035501568?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="products" className="py-20 md:py-28 bg-stone-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-3 mb-4">
            Premium Concrete Pavers & Precast Products
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            High-quality concrete products manufactured for residential, commercial and industrial projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-stone-200 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-stone-200 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-charcoal mb-2">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-4 flex-grow">{product.description}</p>
                
                {/* Price */}
                <div className="mb-6 pt-4 border-t border-stone-200">
                  <span className="text-2xl font-bold text-terracotta">{product.price}</span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="w-full bg-terracotta text-white py-3 rounded-lg font-semibold hover:bg-terracotta-light transition-colors text-center"
                >
                  GET BEST PRICE
                </button>
              </div>
            </div>
          ))}
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
