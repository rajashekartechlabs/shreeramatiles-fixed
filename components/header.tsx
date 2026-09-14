'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
      className={`fixed left-0 right-0 top-0 z-50 border-b border-stone-200/80 transition-all duration-300 ${
          isSticky
          ? 'bg-white/95 shadow-md py-3 backdrop-blur'
          : 'bg-white py-4'
      }`}
    >
      <nav className="flex w-full items-center justify-between px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/shree-rama-logo.webp"
            alt="SHREE RAMA TILES AND PAVERS MANUFACTURERS logo"
            width={52}
            height={52}
            className="h-[3.3rem] w-[3.3rem] rounded-full object-cover ring-2 ring-terracotta/30 sm:h-12 sm:w-12"
            priority
          />
          <span className="block max-w-[190px] font-heading text-[10px] font-bold uppercase leading-[1.15] tracking-wide text-charcoal sm:max-w-[230px] sm:text-sm">
            SHREE RAMA TILES AND PAVERS MANUFACTURERS
          </span>
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
