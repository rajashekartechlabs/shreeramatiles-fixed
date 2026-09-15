'use client'

import { useState } from 'react'

const galleryImages = [
  { id: 1, title: 'Modern Office Complex', category: 'Commercial' },
  { id: 2, title: 'Residential Complex', category: 'Residential' },
  { id: 3, title: 'Highway Bridge', category: 'Infrastructure' },
  { id: 4, title: 'Industrial Warehouse', category: 'Industrial' },
  { id: 5, title: 'Shopping Mall', category: 'Commercial' },
  { id: 6, title: 'Multi-Story Residential', category: 'Residential' },
  { id: 7, title: 'Parking Structure', category: 'Infrastructure' },
  { id: 8, title: 'Manufacturing Plant', category: 'Industrial' },
  { id: 9, title: 'Decorative Concrete', category: 'Specialty' },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
            Project Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-3 mb-4">
            Our Work Speaks Volumes
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across diverse industries and applications.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              className={`group relative bg-gradient-to-br from-terracotta/20 to-stone-300 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                idx % 5 === 0 ? 'lg:col-span-2 lg:row-span-2 h-96' : 'h-64'
              }`}
              onClick={() => setSelectedImage(img.id)}
            >
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-5xl mb-3">📷</div>
                  <p className="text-stone-600 font-medium">{img.title}</p>
                  <p className="text-stone-500 text-sm mt-1">{img.category}</p>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="font-semibold mb-2">{img.title}</p>
                    <p className="text-sm text-stone-200">{img.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-terracotta transition-colors z-10"
                aria-label="Close"
              >
                <span className="text-4xl">×</span>
              </button>

              <div className="bg-gradient-to-br from-stone-300 to-stone-400 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                {galleryImages.find((img) => img.id === selectedImage) && (
                  <div className="text-center">
                    <div className="text-7xl mb-4">🏗️</div>
                    <p className="text-white font-semibold text-2xl">
                      {galleryImages.find((img) => img.id === selectedImage)?.title}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-between items-center text-white">
                <p className="text-sm">
                  {galleryImages.find((img) => img.id === selectedImage)?.category} Project
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-2 bg-terracotta hover:bg-terracotta-light rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-stone-200 text-center">
          <p className="text-stone-600 mb-6">Interested in seeing more or discussing your project?</p>
          <a
            href="#contact"
            className="inline-block bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-light transition-colors"
          >
            Schedule a Site Visit
          </a>
        </div>
      </div>
    </section>
  )
}
