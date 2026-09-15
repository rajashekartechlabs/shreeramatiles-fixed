
const applications = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'From single-family homes to multi-story residential complexes, our concrete provides the foundation for quality living spaces.',
    benefits: ['Durable foundations', 'Weather-resistant', 'Cost-effective'],
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Commercial Projects',
    description: 'Office buildings, retail spaces, and commercial centers demand precision and reliability that Keen Method consistently delivers.',
    benefits: ['High load capacity', 'Long-term durability', 'Meets building codes'],
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Infrastructure & Roads',
    description: 'Highway construction, bridges, and public infrastructure require concrete that withstands heavy traffic and environmental stress.',
    benefits: ['High compressive strength', 'Freeze-thaw resistant', 'Traffic-ready'],
    icon: '🛣️',
  },
  {
    id: 4,
    title: 'Industrial Facilities',
    description: 'Manufacturing plants and warehouses need concrete capable of supporting heavy machinery and chemical exposure.',
    benefits: ['Chemical resistant', 'High durability', 'Specialized mixes'],
    icon: '🏭',
  },
  {
    id: 5,
    title: 'Water & Marine Projects',
    description: 'Dams, waterfront structures, and marine facilities require saltwater-resistant concrete formulations.',
    benefits: ['Saltwater resistant', 'Low permeability', 'Marine grade'],
    icon: '⚓',
  },
  {
    id: 6,
    title: 'Specialized Structures',
    description: 'From architectural elements to decorative surfaces, we offer custom concrete solutions for unique design requirements.',
    benefits: ['Custom colors', 'Aesthetic finish', 'Design flexibility'],
    icon: '🎨',
  },
  {
    id: 7,
    title: 'Repair & Rehabilitation',
    description: 'Expert concrete restoration and repair services for deteriorated structures, extending their lifespan.',
    benefits: ['Structural restoration', 'Quick turnaround', 'Quality assured'],
    icon: '🔧',
  },
  {
    id: 8,
    title: 'Green Construction',
    description: 'Sustainable concrete solutions for environmentally conscious projects, supporting LEED certification goals.',
    benefits: ['Eco-friendly', 'Sustainable sourcing', 'Green certified'],
    icon: '🌱',
  },
]

export function Applications() {
  return (
    <section id="applications" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-3 mb-4">
            Applications Across Industries
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From residential homes to massive infrastructure projects, Keen Method concrete is trusted by professionals across industries.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="space-y-12">
          {applications.map((app, idx) => (
            <div
              key={app.id}
              className="grid md:grid-cols-2 gap-8 items-center transition-all duration-300"
            >
              {/* Image/Icon - Alternating sides */}
              <div
                className={`h-80 bg-gradient-to-br rounded-2xl flex items-center justify-center ${
                  idx % 2 === 0
                    ? 'from-terracotta/10 to-stone-200 order-last md:order-first'
                    : 'from-terracotta/5 to-stone-100 order-last'
                }`}
              >
                <div className="text-center">
                  <div className="text-7xl mb-4">{app.icon}</div>
                  <p className="text-stone-500">{app.title} Project</p>
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? 'md:order-first' : ''}>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  {app.title}
                </h3>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {app.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-terracotta/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-terracotta font-bold text-sm">✓</span>
                      </div>
                      <span className="text-stone-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="text-terracotta font-semibold hover:text-terracotta-light transition-colors inline-flex items-center gap-2"
                >
                  Learn More
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-stone-200 text-center">
          <p className="text-stone-600 mb-6">Don't see your project type listed?</p>
          <a
            href="#contact"
            className="inline-block bg-charcoal text-white px-8 py-4 rounded-lg font-semibold hover:bg-charcoal-dark transition-colors"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}
