'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-3 mb-4">
            Contact Shree Rama
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Get in touch with us for quotes, bulk orders, or to discuss your requirements.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
          {/* Contact Info Cards */}
          <div>
            <h3 className="text-2xl font-semibold text-charcoal mb-6">Contact Information</h3>
            
            {/* Phone Numbers */}
            <div className="mb-8">
              <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-2xl">📞</span> Phone Numbers
              </h4>
              <div className="space-y-2">
                <a href="tel:+919035501568" className="text-terracotta hover:text-terracotta-light font-semibold">
                  +91 90355 01568
                </a>
                <a href="tel:+917892679116" className="block text-terracotta hover:text-terracotta-light font-semibold">
                  +91 78926 79116
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-8">
              <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span> WhatsApp
              </h4>
              <a 
                href="https://wa.me/919035501568" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terracotta hover:text-terracotta-light font-semibold"
              >
                +91 90355 01568
              </a>
            </div>

            {/* Address */}
            <div className="mb-8">
              <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span> Address
              </h4>
              <address className="not-italic text-stone-600 leading-relaxed">
                Sy No. 35/1,<br />
                Near Byrapura Village,<br />
                Arakere Village,<br />
                Hesaraghatta Hobli,<br />
                Yelahanka Taluk,<br />
                Bengaluru,<br />
                Karnataka – 562157
              </address>
            </div>

            {/* Business Hours */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <h4 className="font-semibold text-charcoal mb-3">Business Hours</h4>
              <p className="text-stone-600 text-sm mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p className="text-stone-600 text-sm mb-2"><strong>Saturday:</strong> 10:00 AM - 3:00 PM</p>
              <p className="text-stone-600 text-sm"><strong>Sunday:</strong> Closed</p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-stone-100 rounded-xl overflow-hidden h-96 border border-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7846647689945!2d77.41842742346914!3d13.196836513202928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1827d8b8b8b9%3A0x1d8b8b8b8b8b8b8b!2sArakere%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-charcoal mb-6 text-center">Send us an Enquiry</h3>

          {submitted ? (
            <div className="flex items-center justify-center h-64 text-center">
              <div>
                <div className="text-6xl mb-4">✓</div>
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
                  placeholder="+91-90355 01568"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-terracotta resize-none"
                  placeholder="Tell us about your requirements..."
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
      </div>
    </section>
  )
}
