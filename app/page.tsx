import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { WhyChoose } from '@/components/why-choose'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { SectionErrorBoundary } from '@/components/error-boundary'

export default function Page() {
  return (
    <main className="bg-stone-50">
      <Header />
      <Hero />
      <SectionErrorBoundary name="Products">
        <Products />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Why Choose Us">
        <WhyChoose />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Contact & Enquiry">
        <Contact />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Footer">
        <Footer />
      </SectionErrorBoundary>
    </main>
  )
}
