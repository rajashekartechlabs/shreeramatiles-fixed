'use client'

import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    title: 'Factory Direct Pricing',
    description: 'Buy directly from the manufacturer and enjoy the best prices without middleman markups.',
    icon: '01',
  },
  {
    title: 'Premium Quality',
    description: 'High-quality concrete products manufactured with precision and tested for durability.',
    icon: '✓',
  },
  {
    title: 'Bulk Orders',
    description: 'We specialize in large-scale supplies for contractors and commercial projects.',
    icon: '02',
  },
  {
    title: 'Fast Delivery',
    description: 'Located in Bengaluru with efficient logistics for prompt delivery across the region.',
    icon: '03',
  },
  {
    title: 'Modern Manufacturing',
    description: 'State-of-the-art facilities using advanced manufacturing techniques and quality control.',
    icon: '04',
  },
  {
    title: 'Trusted by Contractors',
    description: 'Preferred partner for contractors and builders across residential and commercial sectors.',
    icon: '05',
  },
]

export function WhyChoose() {
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

  return (
    <section id="why-us" className="bg-charcoal py-24 text-white md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Why Shree Rama Tiles & Pavers
          </h2>
          <p className="text-lg text-stone-200 max-w-2xl mx-auto">
            Premium products at factory-direct prices with exceptional customer service.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`group border border-stone-700/80 bg-white/[0.04] p-7 transition-all duration-500 hover:border-terracotta hover:bg-white/[0.07] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center border border-terracotta/60 text-sm font-semibold tracking-widest text-terracotta-light">
                <span className="text-2xl">{reason.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-stone-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
