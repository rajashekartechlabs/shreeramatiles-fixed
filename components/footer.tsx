'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Products: [
      { label: 'Ready-Mix Concrete', href: '#products' },
      { label: 'Specialty Mixes', href: '#products' },
      { label: 'Custom Formulations', href: '#contact' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#' },
    ],
    Resources: [
      { label: 'Technical Specs', href: '#' },
      { label: 'Case Studies', href: '#gallery' },
      { label: 'Blog', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact', href: '#contact' },
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
                <span className="text-white font-bold">KM</span>
              </div>
              <span className="font-heading font-bold text-lg">Keen Method</span>
            </div>
            <p className="text-stone-400 text-sm mb-6">
              Premium concrete solutions for every project, built on 25+ years of expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-terracotta transition-colors">
                f
              </a>
              <a href="#" className="text-stone-400 hover:text-terracotta transition-colors">
                in
              </a>
              <a href="#" className="text-stone-400 hover:text-terracotta transition-colors">
                tw
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
            &copy; {currentYear} Keen Method Concrete. All rights reserved.
          </p>
          <p className="text-stone-400 text-sm">
            Building excellence, one foundation at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
