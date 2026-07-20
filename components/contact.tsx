'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      title: 'Phone',
      value: '+91-9876543210',
      icon: '📞',
      link: 'tel:+919876543210',
    },
    {
      title: 'Email',
      value: 'info@keenmethod.com',
      icon: '📧',
      link: 'mailto:info@keenmethod.com',
    },
    {
      title: 'Address',
      value: '123 Industrial Park, City Name',
      icon: '📍',
      link: '#',
    },
    {
      title: 'WhatsApp',
      value: 'Quick Inquiries',
      icon: '💬',
      link: 'https://wa.me/919876543210',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-3 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Contact our team today for quotes, consultations, or to discuss your concrete needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-terracotta transition-all"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="font-semibold text-charcoal mb-2">{info.title}</h3>
              <p className="text-stone-600">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Form */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">Send us a Message</h3>

            {submitted ? (
              <div className="flex items-center justify-center h-96 text-center">
                <div>
                  <div className="text-5xl mb-4">✓</div>
                  <p className="text-lg font-semibold text-charcoal mb-2">Thank you!</p>
                  <p className="text-stone-600">We&apos;ll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-terracotta"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-terracotta"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-terracotta"
                    placeholder="+91-9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-terracotta"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="industrial">Industrial</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-terracotta resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta text-white py-3 rounded-lg font-semibold hover:bg-terracotta-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Why Contact Us?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-stone-600"><strong>Free Consultation:</strong> Expert advice tailored to your project needs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-stone-600"><strong>Competitive Quotes:</strong> Transparent pricing with no hidden charges.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-stone-600"><strong>Fast Response:</strong> Our team typically responds within 2 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-stone-600"><strong>Custom Solutions:</strong> Special formulations for unique requirements.</span>
                </li>
              </ul>
            </div>

            {/* Quick WhatsApp Button */}
            <a
              href="https://wa.me/919876543210?text=Hi, I'm interested in your concrete products and services."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-terracotta to-terracotta-light text-white p-6 rounded-xl text-center font-semibold hover:shadow-lg transition-shadow"
            >
              💬 Chat on WhatsApp
            </a>

            {/* Business Hours */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <h4 className="font-semibold text-charcoal mb-3">Business Hours</h4>
              <p className="text-stone-600 text-sm mb-2"><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
              <p className="text-stone-600 text-sm mb-2"><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
              <p className="text-stone-600 text-sm"><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
