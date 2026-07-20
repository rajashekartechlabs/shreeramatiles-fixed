import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { WhyChoose } from '@/components/why-choose'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-stone-50">
      <Header />
      <Hero />
      <Products />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  )
}
