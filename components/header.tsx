'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-white shadow-md py-3'
          : 'bg-white py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-terracotta rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SR</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-bold text-charcoal text-sm leading-tight">
              Shree Rama
            </span>
            <span className="text-xs text-stone-600">Tiles & Pavers</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-charcoal hover:text-terracotta transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-terracotta text-white px-6 py-2.5 rounded-lg font-medium hover:bg-terracotta-light transition-colors text-sm"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-charcoal transition-all ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-charcoal transition-all ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-charcoal transition-all ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 py-4 px-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-charcoal hover:text-terracotta transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-terracotta text-white px-6 py-2.5 rounded-lg font-medium hover:bg-terracotta-light transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
