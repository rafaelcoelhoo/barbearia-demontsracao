import Image from 'next/image'
import { Clock, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.1fr_1fr] md:gap-14 md:px-6 md:py-20">
        <div className="flex flex-col gap-7">
          <p className="w-fit rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary">
            Barbearia de bairro na Baixa de Lisboa
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl"
          >
            Cabelo e barba, feitos com calma e navalha.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Uma cadeira, uma conversa e um corte bem feito. Somos uma barbearia pequena, onde cada
            cliente tem o tempo que merece — seja para um corte clássico, um degradê ou a barba com
            toalha quente.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <div className="flex flex-col gap-1">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href={site.phone.href}>
                  <Phone aria-hidden="true" />
                  Ligar para marcar
                </a>
              </Button>
              <span className="text-xs text-muted-foreground">({site.phone.costNotice})</span>
            </div>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <a href="#contacto">Pedir informações</a>
            </Button>
          </div>

          <ul className="flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:gap-8">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {site.address.street}, {site.address.city}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Ter–Sáb, a partir das 09:00
            </li>
          </ul>
        </div>

        <div className="flex items-stretch gap-4">
          <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-lg bg-muted">
            <Image
              src="/placeholder.svg?height=1000&width=800&query=barber%20trimming%20a%20man%27s%20hair%20in%20a%20small%20lisbon%20barbershop%20with%20blue%20and%20white%20azulejo%20tiles%20on%20the%20wall%2C%20warm%20natural%20light"
              alt="Barbeiro a cortar o cabelo de um cliente, com azulejos azuis e brancos na parede"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="barber-pole w-6 shrink-0 rounded-full ring-1 ring-foreground/15 md:w-8"
          />
        </div>
      </div>
    </section>
  )
}
