import type { Metadata, Viewport } from 'next'
import { Inter, Zilla_Slab } from 'next/font/google'
import { CookieNotice } from '@/components/cookie-notice'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const zilla = Zilla_Slab({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-zilla',
})

export const metadata: Metadata = {
  title: {
    default: 'Barbearia Azulejo — Cortes de cabelo e barba na Baixa de Lisboa',
    template: '%s | Barbearia Azulejo',
  },
  description:
    'Barbearia de bairro na Rua dos Fanqueiros, Lisboa. Cortes de cabelo, barba com toalha quente e cortes para crianças. Marcações por telefone.',
  generator: 'v0.app',
  openGraph: {
    title: 'Barbearia Azulejo',
    description: 'Cortes de cabelo e barba na Baixa de Lisboa.',
    locale: 'pt_PT',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1d3e9e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${zilla.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Saltar para o conteúdo
        </a>
        {children}
        <CookieNotice />
      </body>
    </html>
  )
}
