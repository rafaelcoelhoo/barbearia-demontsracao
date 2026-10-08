'use client'

import Link from 'next/link'
import { Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks, site } from '@/lib/site'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — página inicial`}>
      <span aria-hidden="true" className="barber-pole h-9 w-3 rounded-full ring-1 ring-foreground/20" />
      <span className="font-serif text-xl font-bold leading-none tracking-tight">
        Barbearia <span className="text-primary">Azulejo</span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href={site.phone.href}>
              <Phone aria-hidden="true" />
              Marcar: {site.phone.display}
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8 bg-background p-6">
              <div className="flex flex-col gap-1">
                <SheetTitle className="font-serif text-2xl">Menu</SheetTitle>
                <SheetDescription>Navegue pelas secções do site.</SheetDescription>
              </div>
              <nav aria-label="Menu móvel">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block rounded-md px-2 py-3 font-serif text-xl font-medium hover:bg-muted"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-1">
                <Button asChild size="lg">
                  <a href={site.phone.href}>
                    <Phone aria-hidden="true" />
                    Ligar {site.phone.display}
                  </a>
                </Button>
                <p className="text-center text-xs text-muted-foreground">({site.phone.costNotice})</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
