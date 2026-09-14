'use client'

import Image from 'next/image'

const highlights = [
  { mark: '▦', label: 'Direct', detail: 'Manufacturing' },
  { mark: '◇', label: 'Consistent', detail: 'Quality' },
  { mark: '▱', label: 'On-Time', detail: 'Supply' },
  { mark: '⌁', label: 'Sustainable', detail: '& Durable' },
]

export function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-charcoal-dark pt-24 text-white md:min-h-screen md:pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,20,21,0.88)_0%,rgba(19,20,21,0.68)_48%,rgba(19,20,21,0.32)_100%)] md:bg-[linear-gradient(90deg,rgba(19,20,21,0.99)_0%,rgba(19,20,21,0.98)_40%,rgba(19,20,21,0.45)_72%,rgba(19,20,21,0.18)_100%)]" />
      <div className="absolute inset-0">
        <Image
          src="/images/hero-products-extended.webp"
          alt="Concrete pavers and precast drainage products displayed in a manufacturing yard"
          fill
          className="object-cover object-[70%_center] md:object-center"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[rgba(23,21,19,0.34)] md:bg-[linear-gradient(90deg,rgba(19,20,21,0.22)_0%,rgba(19,20,21,0.1)_40%,transparent_68%)]" />

      <div className="relative flex min-h-[620px] w-full items-center px-5 py-10 sm:px-8 sm:py-16 lg:px-16 xl:px-24">
        <div className="w-full max-w-2xl md:w-[50%] md:pr-10 lg:pr-16">
          <div className="mb-6 inline-flex rounded-full border border-terracotta-light bg-terracotta px-4 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(224,120,67,0.28)]">
            Factory Direct Manufacturer
          </div>
          <h1 className="max-w-[32rem] text-balance text-[3.25rem] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:max-w-xl sm:text-6xl lg:text-[4.35rem]">
            Premium Concrete Pavers &amp; Precast Solutions
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-stone-200 sm:text-lg">
            Factory-direct manufacturer of concrete pavers, drainage slabs, parking tiles, compound walls and precast concrete products in Bengaluru.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/919035501568" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-terracotta px-8 py-4 text-center font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-terracotta-light sm:w-auto">
              Get Quote
            </a>
            <a href="tel:+919035501568" className="w-full rounded-lg border border-stone-400 px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
              Call Now
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-5 gap-y-6 sm:mt-12 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-0">
            {highlights.map((item, index) => (
              <div key={item.label} className={`flex items-start gap-3 sm:border-stone-500/60 sm:pl-4 ${index > 0 ? 'sm:border-l' : ''}`}>
                <span aria-hidden="true" className="pt-0.5 text-2xl text-terracotta-light">{item.mark}</span>
                <span className="text-sm leading-5 text-stone-200"><strong className="block font-medium text-white">{item.label}</strong>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-8 top-28 hidden items-center gap-4 text-[10px] font-medium uppercase tracking-[0.35em] text-stone-300 md:flex lg:right-16">
        <span>Built for a stronger tomorrow</span><span className="h-px w-16 bg-terracotta-light" />
      </div>
    </section>
  )
}
