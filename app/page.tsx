import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Applications } from '@/components/applications'
import { WhyChoose } from '@/components/why-choose'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-stone-50">
      <Header />
      <Hero />
      <About />
      <Products />
      <Applications />
      <WhyChoose />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
