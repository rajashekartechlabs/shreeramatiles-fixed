'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen bg-charcoal text-white pt-24 md:pt-0 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-terracotta/20 rounded-full">
                <span className="text-terracotta text-sm font-semibold">Premium Quality Assured</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-4">
                Premium Concrete Solutions for Every Project
              </h1>
              <p className="text-lg text-stone-200 max-w-lg">
                We deliver high-quality ready-mix concrete and construction materials designed to exceed standards. From residential to industrial projects, trust Keen Method for consistency and reliability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-light transition-colors text-center"
              >
                Request Quote
              </a>
              <a
                href="#products"
                className="border-2 border-stone-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-colors text-center"
              >
                Explore Products
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-700">
              <div>
                <div className="text-3xl font-bold text-terracotta mb-1">500+</div>
                <p className="text-stone-300 text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-terracotta mb-1">25+</div>
                <p className="text-stone-300 text-sm">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-terracotta mb-1">98%</div>
                <p className="text-stone-300 text-sm">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full rounded-xl overflow-hidden hidden md:block shadow-2xl">
            <Image
              src="/images/hero-construction.png"
              alt="Modern construction site with concrete being poured"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
