'use client'

import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    title: 'Quality Assurance',
    description: 'Every batch undergoes rigorous testing to ensure it meets or exceeds industry standards and customer requirements.',
    icon: '✓',
  },
  {
    title: 'Reliable Delivery',
    description: 'Strategic warehouse locations and modern fleet ensure on-time delivery, every time. Same-day delivery available.',
    icon: '🚚',
  },
  {
    title: 'Expert Team',
    description: 'Our experienced engineers and technical staff are available to consult on project specifications and challenges.',
    icon: '👨‍💼',
  },
  {
    title: 'Competitive Pricing',
    description: 'Premium quality at market-competitive rates. Volume discounts and long-term partnerships available.',
    icon: '💰',
  },
  {
    title: 'Environmental Commitment',
    description: 'We employ sustainable manufacturing practices and offer eco-friendly concrete options for green projects.',
    icon: '🌍',
  },
  {
    title: 'Technical Support',
    description: 'From design consultation to pouring day, our team is here to ensure project success at every stage.',
    icon: '💡',
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
    <section className="py-20 md:py-28 bg-charcoal text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Why Choose Keen Method
          </h2>
          <p className="text-lg text-stone-200 max-w-2xl mx-auto">
            Industry-leading expertise, unwavering quality, and commitment to customer success.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-terracotta/10 to-transparent border border-terracotta/30 rounded-2xl p-12 text-center">
          <p className="text-2xl md:text-3xl font-heading italic mb-6">
            "Building trust, one concrete foundation at a time."
          </p>
          <p className="text-stone-300">Keen Method - Your Concrete Partner for 25+ Years</p>
        </div>
      </div>
    </section>
  )
}
