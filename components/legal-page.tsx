import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/lib/site'

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar à página inicial
        </Link>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última atualização: {site.legalUpdatedAt}</p>
        <div className="legal-prose mt-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  )
}
