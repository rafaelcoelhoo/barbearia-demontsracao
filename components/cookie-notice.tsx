'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const STORAGE_KEY = 'azulejo-cookie-notice-v1'

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== 'dismissed')
    } catch {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'dismissed')
    } catch {
      // Storage may be unavailable (private mode); hiding for this visit is enough.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Aviso sobre cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-2xl flex-col gap-4 rounded-lg border border-border bg-background p-5 shadow-lg sm:flex-row sm:items-center"
    >
      <p className="text-sm leading-relaxed text-foreground">
        Este site utiliza apenas armazenamento técnico estritamente necessário ao seu funcionamento e
        não usa cookies de publicidade ou de rastreamento. Saiba mais na nossa{' '}
        <Link href="/politica-de-cookies" className="font-medium text-primary underline underline-offset-4">
          Política de Cookies
        </Link>
        .
      </p>
      <Button onClick={dismiss} className="shrink-0">
        Compreendi
      </Button>
    </div>
  )
}
