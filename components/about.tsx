'use client'

import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="h-96 rounded-2xl overflow-hidden shadow-xl relative">
            <Image
              src="/images/manufacturing-facility.webp"
              alt="Keen Method manufacturing facility with modern equipment"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="transition-all duration-300">
            <div className="mb-6">
              <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
                About Keen Method
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-3 mb-6">
                Committed to Excellence in Every Pour
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                With over 25 years of industry experience, Keen Method has established itself as a trusted provider of premium concrete solutions. Our commitment to quality, consistency, and customer satisfaction sets us apart.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">ISO Certified Quality</h3>
                  <p className="text-stone-600 text-sm">All products meet international quality standards and rigorous testing protocols.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">On-Time Delivery</h3>
                  <p className="text-stone-600 text-sm">Reliable logistics network ensuring concrete arrives ready to use when you need it.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Expert Support</h3>
                  <p className="text-stone-600 text-sm">Dedicated technical team available for consultations and project specifications.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Sustainable Practices</h3>
                  <p className="text-stone-600 text-sm">Eco-friendly production methods minimizing environmental impact.</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-stone-200">
              <div>
                <div className="text-4xl font-bold text-terracotta mb-1">10M+</div>
                <p className="text-stone-600 text-sm">Cubic Meters Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-terracotta mb-1">1000+</div>
                <p className="text-stone-600 text-sm">Active Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
