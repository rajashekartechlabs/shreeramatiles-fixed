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
                <span className="text-terracotta text-sm font-semibold">Factory Direct Manufacturer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-4">
                Premium Concrete Pavers & Precast Solutions
              </h1>
              <p className="text-lg text-stone-200 max-w-lg">
                Factory-direct manufacturer of concrete pavers, drainage slabs, parking tiles, compound walls and precast concrete products in Bengaluru.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919035501568"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-light transition-colors text-center"
              >
                Get Quote
              </a>
              <a
                href="tel:+919035501568"
                className="border-2 border-stone-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-colors text-center"
              >
                Call Now
              </a>
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
