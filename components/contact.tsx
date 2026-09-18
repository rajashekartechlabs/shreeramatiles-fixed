'use client'

import { useState } from 'react'
import { Clock3, ExternalLink, MapPin, MessageCircle, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const GOOGLE_APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_ENQUIRY_API_URL ||
  'https://script.google.com/macros/s/AKfycbyAiiVXDhoqhaj-lfoWTV4M3fVDEi9OuF_X27K8PtXAR2kAwz4uq3i8VLf2Wd6-jNwdrQ/exec'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      // Use no-cors mode as a reliable fallback for Google Apps Script redirects
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      })

      // In no-cors mode, the browser reaches the endpoint and triggers doPost
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err: any) {
      console.error('Enquiry submission error:', err)
      setStatus('error')
      setErrorMessage('Could not send message. Please reach out to us via WhatsApp or Phone directly.')
    }
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
                <h4 className="mb-2 flex items-center gap-2 font-semibold text-charcoal"><MapPin className="h-4 w-4 text-terracotta" /> Factory Address</h4>
                <a href="https://maps.app.goo.gl/2jkHVXqMAik5rZ5z7?g_st=aw" target="_blank" rel="noopener noreferrer" className="block pl-6 text-sm leading-6 text-stone-600 transition-colors hover:text-terracotta">
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
              <a href="https://maps.app.goo.gl/2jkHVXqMAik5rZ5z7?g_st=aw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-terracotta px-5 py-3 font-semibold text-terracotta transition-colors hover:bg-terracotta/5"><ExternalLink className="h-4 w-4" /> Get Directions</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
            <div className="h-[280px] md:h-[320px]">
              <iframe
                src="https://maps.google.com/maps?q=Shree+Rama+Tiles+and+Pavers+Manufacturers+Sy+no+35/1+Near+byrapura+village+Arakere+village+Hesaraghatta+Hobli+Yelahanka+Bengaluru+Karnataka+562157&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Rama Tiles and Pavers Manufacturers Location"
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-stone-200 bg-white px-5 py-4">
              <div>
                <p className="font-semibold text-charcoal">Hesaraghatta, Yelahanka, Bengaluru</p>
                <p className="text-sm text-stone-500">Visit our manufacturing facility</p>
              </div>
              <a href="https://maps.app.goo.gl/2jkHVXqMAik5rZ5z7?g_st=aw" target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-semibold text-terracotta hover:text-terracotta-light">Open in Maps</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-charcoal mb-2 text-center">Send us an Enquiry</h3>
          <p className="text-sm text-stone-600 mb-6 text-center">Fill out the form below and we will get back to you within 1 business day with product details and quotes.</p>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-emerald-600 mb-4" />
              <h4 className="text-2xl font-heading font-bold text-charcoal mb-2">Thank You!</h4>
              <p className="text-stone-600 max-w-md mb-6">
                Your enquiry has been received. Our team will review your requirements and get back to you within 1 business day.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-sm font-semibold text-terracotta hover:text-terracotta-light underline underline-offset-4"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-terracotta transition-colors disabled:opacity-60"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-terracotta transition-colors disabled:opacity-60"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-terracotta transition-colors disabled:opacity-60"
                    placeholder="+91-90355 01568"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Message / Requirement *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-terracotta resize-none transition-colors disabled:opacity-60"
                  placeholder="Tell us about your requirements (products, approximate quantity, delivery location)..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-terracotta text-white py-3.5 rounded-lg font-semibold hover:bg-terracotta-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending Enquiry...
                  </>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
