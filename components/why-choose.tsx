'use client'

import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    title: 'Factory Direct Pricing',
    description: 'Buy directly from the manufacturer and enjoy the best prices without middleman markups.',
    icon: '💳',
  },
  {
    title: 'Premium Quality',
    description: 'High-quality concrete products manufactured with precision and tested for durability.',
    icon: '✓',
  },
  {
    title: 'Bulk Orders',
    description: 'We specialize in large-scale supplies for contractors and commercial projects.',
    icon: '📦',
  },
  {
    title: 'Fast Delivery',
    description: 'Located in Bengaluru with efficient logistics for prompt delivery across the region.',
    icon: '🚚',
  },
  {
    title: 'Modern Manufacturing',
    description: 'State-of-the-art facilities using advanced manufacturing techniques and quality control.',
    icon: '🏭',
  },
  {
    title: 'Trusted by Contractors',
    description: 'Preferred partner for contractors and builders across residential and commercial sectors.',
    icon: '🤝',
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
    <section id="why-us" className="py-20 md:py-28 bg-charcoal text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`bg-white/5 backdrop-blur-sm border border-stone-700 rounded-xl p-8 hover:border-terracotta transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              <div className="w-14 h-14 bg-terracotta/20 rounded-lg flex items-center justify-center mb-6">
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
