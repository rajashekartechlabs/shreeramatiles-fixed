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
    icon: '02',
  },
  {
    title: 'Bulk Orders',
    description: 'We specialize in large-scale supplies for contractors and commercial projects.',
    icon: '03',
  },
  {
    title: 'Fast Delivery',
    description: 'Located in Bengaluru with efficient logistics for prompt delivery across the region.',
    icon: '04',
  },
  {
    title: 'Modern Manufacturing',
    description: 'State-of-the-art facilities using advanced manufacturing techniques and quality control.',
    icon: '05',
  },
  {
    title: 'Trusted by Contractors',
    description: 'Preferred partner for contractors and builders across residential and commercial sectors.',
    icon: '06',
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
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
            Why Choose Us
          </span>
          <h2 className="mt-3 mb-4 max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Why Shree Rama Tiles & Pavers
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-7 text-stone-300 md:text-lg">
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
                <span className="font-mono text-sm font-medium tracking-[0.14em]">{reason.icon}</span>
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">{reason.title}</h3>
              <p className="text-sm leading-6 text-stone-300 md:text-base">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
