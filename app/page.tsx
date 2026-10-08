import { About } from '@/components/home/about'
import { ContactForm } from '@/components/home/contact-form'
import { Faq } from '@/components/home/faq'
import { Gallery } from '@/components/home/gallery'
import { Hero } from '@/components/home/hero'
import { HoursLocation } from '@/components/home/hours-location'
import { Services } from '@/components/home/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <HoursLocation />
        <Faq />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  )
}
