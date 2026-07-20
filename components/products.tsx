'use client'

import { useEffect, useRef, useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Standard Ready-Mix Concrete',
    description: 'Our most popular grade for general construction. 28-day strength: 30 MPa',
    applications: 'Foundations, slabs, general structures',
    price: '₹3,500 - 4,200/m³',
    specs: ['28-day: 30 MPa', 'Slump: 100-150mm', 'Delivery time: 2-4 hours'],
  },
  {
    id: 2,
    name: 'High-Strength Concrete',
    description: 'Premium grade for demanding applications. 28-day strength: 50 MPa',
    applications: 'High-rise buildings, bridges, heavy loads',
    price: '₹4,800 - 5,500/m³',
    specs: ['28-day: 50 MPa', 'Slump: 75-125mm', 'Delivery time: 2-4 hours'],
  },
  {
    id: 3,
    name: 'Self-Consolidating Concrete',
    description: 'Advanced formulation for complex shapes. Flows without vibration.',
    applications: 'Intricate designs, confined spaces',
    price: '₹5,200 - 6,000/m³',
    specs: ['28-day: 40 MPa', 'Self-flowing', 'Delivery time: 2-4 hours'],
  },
  {
    id: 4,
    name: 'Reinforced Concrete',
    description: 'Pre-designed mix with reinforcement specifications optimized.',
    applications: 'Beams, columns, slabs with rebar',
    price: '₹4,000 - 4,800/m³',
    specs: ['Customizable strength', 'Rebar compatible', 'Delivery time: 2-4 hours'],
  },
  {
    id: 5,
    name: 'Fiber-Reinforced Concrete',
    description: 'Enhanced durability with synthetic fiber reinforcement.',
    applications: 'Roads, industrial floors, waterfront structures',
    price: '₹5,000 - 5,800/m³',
    specs: ['Enhanced durability', 'Fiber reinforced', 'Delivery time: 2-4 hours'],
  },
  {
    id: 6,
    name: 'Air-Entrained Concrete',
    description: 'Improved freeze-thaw resistance for harsh climates.',
    applications: 'Outdoor structures, cold weather regions',
    price: '₹4,200 - 4,900/m³',
    specs: ['Freeze-thaw resistant', 'Air-entrained', 'Delivery time: 2-4 hours'],
  },
  {
    id: 7,
    name: 'Lightweight Concrete',
    description: 'Reduced density for weight-sensitive applications.',
    applications: 'Roofing, lightweight structural elements',
    price: '₹5,500 - 6,300/m³',
    specs: ['Lightweight', '28-day: 20 MPa', 'Delivery time: 2-4 hours'],
  },
  {
    id: 8,
    name: 'Permeable Concrete',
    description: 'Eco-friendly drainage solution for sustainable construction.',
    applications: 'Parking lots, driveways, green infrastructure',
    price: '₹4,600 - 5,400/m³',
    specs: ['Water permeable', 'Eco-friendly', 'Delivery time: 2-4 hours'],
  },
  {
    id: 9,
    name: 'Colored Concrete',
    description: 'Customizable colors for aesthetic architectural elements.',
    applications: 'Decorative surfaces, feature walls',
    price: '₹4,800 - 5,600/m³',
    specs: ['Custom colors', 'Decorative finish', 'Delivery time: 2-4 hours'],
  },
  {
    id: 10,
    name: 'Marine Grade Concrete',
    description: 'High-durability formulation resistant to saltwater and corrosion.',
    applications: 'Harbors, coastal structures, marine projects',
    price: '₹6,000 - 7,000/m³',
    specs: ['Saltwater resistant', 'High durability', 'Delivery time: 2-4 hours'],
  },
  {
    id: 11,
    name: 'Rapid-Set Concrete',
    description: 'Accelerated curing for time-sensitive projects.',
    applications: 'Emergency repairs, fast-track construction',
    price: '₹5,800 - 6,800/m³',
    specs: ['24-hour strength', 'Rapid curing', 'Delivery time: 1-3 hours'],
  },
  {
    id: 12,
    name: 'Thermal Mass Concrete',
    description: 'Enhanced thermal properties for energy-efficient buildings.',
    applications: 'Green buildings, sustainable construction',
    price: '₹5,200 - 6,000/m³',
    specs: ['Thermal mass', 'Energy efficient', 'Delivery time: 2-4 hours'],
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

  return (
    <section id="products" className="py-20 md:py-28 bg-stone-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-3 mb-4">
            Premium Concrete Products
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Each product is engineered for specific applications, guaranteeing optimal performance for your project needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`group bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-500 border border-stone-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{product.name}</h3>
                <p className="text-stone-600">{product.description}</p>
              </div>

              {/* Specs */}
              <div className="mb-6 pb-6 border-b border-stone-200">
                <p className="text-sm font-medium text-charcoal mb-3">Specifications:</p>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                      <span className="text-terracotta mt-1">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <p className="text-sm mb-6">
                <span className="font-medium text-charcoal">Applications: </span>
                <span className="text-stone-600">{product.applications}</span>
              </p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-terracotta">{product.price}</span>
                <a
                  href={`https://wa.me/?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-terracotta-light font-semibold text-sm transition-colors"
                >
                  Inquire →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-stone-200">
          <p className="text-stone-600 mb-6">Need a custom formulation?</p>
          <a
            href="#contact"
            className="inline-block bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-light transition-colors"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
