'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Products: [
      { label: 'Drainage Slabs', href: '#products' },
      { label: 'Pavers', href: '#products' },
      { label: 'Compound Walls', href: '#products' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Facility', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
    Quick: [
      { label: 'Contact', href: '#contact' },
      { label: 'Get Quote', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/919035501568' },
    ],
  }

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-12 pb-12 border-b border-stone-700">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-terracotta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SR</span>
              </div>
              <div>
                <div className="font-heading font-bold text-sm leading-tight">
                  Shree Rama
                </div>
                <div className="text-xs text-stone-400">
                  Tiles & Pavers
                </div>
              </div>
            </div>
            <p className="text-stone-400 text-sm mb-4">
              Premium concrete pavers and precast products. Factory-direct manufacturer in Bengaluru.
            </p>
            <div className="space-y-2">
              <a href="tel:+919035501568" className="block text-stone-400 hover:text-terracotta text-sm transition-colors">
                +91 90355 01568
              </a>
              <a href="https://wa.me/919035501568" target="_blank" rel="noopener noreferrer" className="block text-stone-400 hover:text-terracotta text-sm transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-white">{title}</h4>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-stone-400 hover:text-terracotta transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-sm">
            &copy; {currentYear} Shree Rama Tiles & Pavers Manufacturers. All rights reserved.
          </p>
          <p className="text-stone-400 text-sm">
            Premium Concrete Products | Bengaluru
          </p>
        </div>
      </div>
    </footer>
  )
}
