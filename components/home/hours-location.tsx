import { ExternalLink, Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function HoursLocation() {
  return (
    <section id="horario" aria-labelledby="horario-title" className="border-b border-border bg-muted">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 id="horario-title" className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Horário e localização
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Atendemos por marcação e, sempre que há vaga, sem marcação.
            </p>
          </div>

          <table className="w-full text-left">
            <caption className="sr-only">Horário de funcionamento</caption>
            <tbody>
              {site.hours.map((row) => (
                <tr key={row.day} className="border-b border-border last:border-0">
                  <th scope="row" className="py-3 font-medium">
                    {row.day}
                  </th>
                  <td
                    className={`py-3 text-right font-serif text-lg tabular-nums ${row.time === 'Encerrado' ? 'text-muted-foreground' : 'font-bold'}`}
                  >
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <address className="flex flex-col gap-4 not-italic">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <a href={site.phone.href} className="font-medium underline-offset-4 hover:underline">
                  {site.phone.display}
                </a>{' '}
                <span className="text-sm text-muted-foreground">({site.phone.costNotice})</span>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Smartphone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <a href={site.mobile.href} className="font-medium underline-offset-4 hover:underline">
                  {site.mobile.display}
                </a>{' '}
                <span className="text-sm text-muted-foreground">({site.mobile.costNotice})</span>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="font-medium underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-background md:aspect-auto md:flex-1">
            <iframe
              title={`Mapa com a localização da ${site.name}`}
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full"
            />
          </div>
          <Button asChild variant="outline" className="w-fit bg-background">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              Obter direções
              <ExternalLink aria-hidden="true" />
              <span className="sr-only">(abre numa nova janela)</span>
            </a>
          </Button>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A 3 minutos a pé do metro Baixa-Chiado e da Praça da Figueira. Estacionamento mais próximo
            no parque da Praça da Figueira.
          </p>
        </div>
      </div>
    </section>
  )
}
