'use client'

import { useState } from 'react'
import { Clock3, ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react'

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
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Get in Touch
          </span>
          <h2 className="mt-3 mb-3 font-heading text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            Contact Shree Rama
          </h2>
          <p className="text-base leading-7 text-stone-600 md:text-lg">
            Get in touch with us for quotes, bulk orders, or to discuss your requirements.
          </p>
        </div>

        <div className="mb-12 grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-charcoal">Contact Information</h3>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
              <div>
                <h4 className="mb-2 flex items-center gap-2 font-semibold text-charcoal"><Phone className="h-4 w-4 text-terracotta" /> Phone Numbers</h4>
                <div className="space-y-1 pl-6">
                  <a href="tel:+919035501568" className="block font-semibold text-terracotta hover:text-terracotta-light">+91 90355 01568</a>
                  <a href="tel:+917892679116" className="block font-semibold text-terracotta hover:text-terracotta-light">+91 78926 79116</a>
                </div>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 font-semibold text-charcoal"><MessageCircle className="h-4 w-4 text-terracotta" /> WhatsApp</h4>
                <a href="https://wa.me/919035501568" target="_blank" rel="noopener noreferrer" className="pl-6 font-semibold text-terracotta hover:text-terracotta-light">+91 90355 01568</a>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 font-semibold text-charcoal"><MapPin className="h-4 w-4 text-terracotta" /> Address</h4>
                <a href="https://www.google.com/maps/search/?api=1&query=Arakere%2C%20Bengaluru" target="_blank" rel="noopener noreferrer" className="block pl-6 text-sm leading-6 text-stone-600 transition-colors hover:text-terracotta">
                  <address className="not-italic">
                    Sy No. 35/1,<br />Near Byrapura Village,<br />Arakere Village,<br />Hesaraghatta Hobli,<br />Yelahanka Taluk,<br />Bengaluru,<br />Karnataka – 562157
                  </address>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-charcoal"><Clock3 className="h-4 w-4 text-terracotta" /> Business Hours</h4>
              <div className="space-y-1 pl-6 text-sm leading-6 text-stone-600">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 3:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a href="https://wa.me/919035501568" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-5 py-3 font-semibold text-white transition-colors hover:bg-terracotta-light"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Arakere%2C%20Bengaluru" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-terracotta px-5 py-3 font-semibold text-terracotta transition-colors hover:bg-terracotta/5"><ExternalLink className="h-4 w-4" /> Get Directions</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
            <div className="h-[280px] md:h-[320px]">
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
            <div className="flex items-center justify-between gap-4 border-t border-stone-200 bg-white px-5 py-4">
              <div><p className="font-semibold text-charcoal">Arakere, Bengaluru</p><p className="text-sm text-stone-500">Visit our manufacturing facility</p></div>
              <a href="https://www.google.com/maps/search/?api=1&query=Arakere%2C%20Bengaluru" target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-semibold text-terracotta hover:text-terracotta-light">Open in Maps</a>
            </div>
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
