import Link from 'next/link'
import { BookOpen, ExternalLink } from 'lucide-react'
import { Logo } from '@/components/site-header'
import { legalLinks, navLinks, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="w-fit rounded-md bg-background px-3 py-2 text-foreground">
            <Logo />
          </div>
          <address className="flex flex-col gap-1 text-sm not-italic leading-relaxed text-background/80">
            <span>
              {site.address.street}, {site.address.postalCode} {site.address.city}
            </span>
            <span>
              Tel.{' '}
              <a href={site.phone.href} className="underline-offset-4 hover:underline">
                {site.phone.display}
              </a>{' '}
              ({site.phone.costNotice})
            </span>
            <span>
              Tlm.{' '}
              <a href={site.mobile.href} className="underline-offset-4 hover:underline">
                {site.mobile.display}
              </a>{' '}
              ({site.mobile.costNotice})
            </span>
            <a href={`mailto:${site.email}`} className="w-fit underline-offset-4 hover:underline">
              {site.email}
            </a>
          </address>

          <a
            href={site.complaintsBookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-fit items-center gap-3 rounded-md border-2 border-background px-4 py-3 font-semibold transition-colors hover:bg-background hover:text-foreground"
          >
            <BookOpen className="size-6" aria-hidden="true" />
            <span className="flex flex-col leading-tight">
              <span>Livro de Reclamações</span>
              <span className="text-xs font-normal opacity-80">Formato eletrónico</span>
            </span>
            <ExternalLink className="size-4" aria-hidden="true" />
            <span className="sr-only">(abre numa nova janela)</span>
          </a>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <h2 className="font-serif text-lg font-bold">Navegação</h2>
          <ul className="flex flex-col gap-2 text-sm text-background/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-background hover:underline underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informação legal" className="flex flex-col gap-3">
          <h2 className="font-serif text-lg font-bold">Informação legal</h2>
          <ul className="flex flex-col gap-2 text-sm text-background/80">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-background hover:underline underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.consumerPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background hover:underline underline-offset-4"
              >
                Portal do Consumidor
                <span className="sr-only"> (abre numa nova janela)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs leading-relaxed text-background/70 md:px-6">
          <p>
            {site.legalName} · NIPC {site.nipc} · Capital social {site.shareCapital} · Matriculada na{' '}
            {site.registry} · CAE {site.cae}
          </p>
          <p>
            Em caso de litígio de consumo, o consumidor pode recorrer ao{' '}
            <a href={site.ral.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              {site.ral.name}
              <span className="sr-only"> (abre numa nova janela)</span>
            </a>
            . Mais informações no{' '}
            <a href={site.consumerPortalUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Portal do Consumidor
              <span className="sr-only"> (abre numa nova janela)</span>
            </a>
            .
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
