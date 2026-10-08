'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/lib/site'

const subjects = [
  'Informações gerais',
  'Marcações e disponibilidade',
  'Serviços para noivos e eventos',
  'Vale-oferta',
  'Outro assunto',
] as const

type FieldName = 'name' | 'email' | 'phone' | 'message' | 'consent'
type Errors = Partial<Record<FieldName, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_PATTERN = /^(\+?\d[\d\s]{8,15})$/

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [subject, setSubject] = useState<string>(subjects[0])
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const nextErrors: Errors = {}
    if (name.length < 2) nextErrors.name = 'Indique o seu nome.'
    if (!EMAIL_PATTERN.test(email)) nextErrors.email = 'Indique um endereço de email válido.'
    if (phone && !PHONE_PATTERN.test(phone)) nextErrors.phone = 'Indique um número de telefone válido.'
    if (message.length < 10) nextErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.'
    if (!consent) nextErrors.consent = 'É necessário aceitar a Política de Privacidade para enviar o pedido.'

    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0] as FieldName | undefined
    if (firstInvalid) {
      const target = form.querySelector<HTMLElement>(`#contact-${firstInvalid}`)
      target?.focus()
      return
    }

    const body = [
      `Nome: ${name}`,
      `Email: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      `Assunto: ${subject}`,
      '',
      message,
      '',
      '— Enviado através do formulário do site. O remetente aceitou a Política de Privacidade.',
    ]
      .filter((line) => line !== null)
      .join('\n')

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`[Site] ${subject}`)}&body=${encodeURIComponent(body)}`

    form.reset()
    setSubject(subjects[0])
    setConsent(false)
    setSent(true)
  }

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-5">
          <h2 id="contacto-title" className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Pedir mais informações
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Tem alguma dúvida, quer saber disponibilidade para um grupo ou oferecer um vale? Deixe-nos
            uma mensagem e respondemos no prazo de um dia útil.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Para marcações no próprio dia, é mais rápido ligar para o{' '}
            <a href={site.phone.href} className="font-medium text-foreground underline underline-offset-4">
              {site.phone.display}
            </a>{' '}
            <span className="text-sm">({site.phone.costNotice})</span>.
          </p>
        </div>

        <div className="rounded-lg border border-border p-6 md:p-8">
          {sent ? (
            <div role="status" className="flex flex-col items-start gap-4">
              <CheckCircle2 className="size-8 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-bold">Quase lá!</h3>
              <p className="leading-relaxed text-muted-foreground">
                Abrimos o seu programa de email com a mensagem já preenchida. Basta carregar em
                &quot;Enviar&quot; para a recebermos. Se nada abriu, escreva-nos diretamente para{' '}
                <a href={`mailto:${site.email}`} className="font-medium text-primary underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
              <Button variant="outline" onClick={() => setSent(false)}>
                Escrever outra mensagem
              </Button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-describedby="contact-required-note">
              <FieldGroup className="gap-6">
                <p id="contact-required-note" className="text-sm text-muted-foreground">
                  Os campos assinalados com <span aria-hidden="true">*</span>
                  <span className="sr-only">asterisco</span> são obrigatórios.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel htmlFor="contact-name">
                      Nome <span aria-hidden="true">*</span>
                    </FieldLabel>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                    {errors.name && <FieldError id="contact-name-error">{errors.name}</FieldError>}
                  </Field>

                  <Field data-invalid={!!errors.phone}>
                    <FieldLabel htmlFor="contact-phone">Telefone</FieldLabel>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    />
                    {errors.phone && <FieldError id="contact-phone-error">{errors.phone}</FieldError>}
                  </Field>
                </div>

                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="contact-email">
                    Email <span aria-hidden="true">*</span>
                  </FieldLabel>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && <FieldError id="contact-email-error">{errors.email}</FieldError>}
                </Field>

                <Field>
                  <FieldLabel htmlFor="contact-subject">Assunto</FieldLabel>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="contact-subject" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field data-invalid={!!errors.message}>
                  <FieldLabel htmlFor="contact-message">
                    Mensagem <span aria-hidden="true">*</span>
                  </FieldLabel>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && <FieldError id="contact-message-error">{errors.message}</FieldError>}
                </Field>

                <Field orientation="horizontal" data-invalid={!!errors.consent} className="items-start">
                  <Checkbox
                    id="contact-consent"
                    checked={consent}
                    onCheckedChange={(value) => setConsent(value === true)}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                    className="mt-0.5"
                  />
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel htmlFor="contact-consent" className="font-normal leading-relaxed">
                      <span>
                        Li e aceito a{' '}
                        <Link href="/politica-de-privacidade" className="font-medium text-primary underline underline-offset-4">
                          Política de Privacidade
                        </Link>{' '}
                        e autorizo o tratamento dos meus dados para responder a este pedido.{' '}
                        <span aria-hidden="true">*</span>
                      </span>
                    </FieldLabel>
                    {errors.consent && <FieldError id="contact-consent-error">{errors.consent}</FieldError>}
                  </div>
                </Field>

                <FieldDescription>
                  Os seus dados são usados apenas para responder ao seu pedido e não são partilhados
                  com terceiros para fins de marketing.
                </FieldDescription>

                <Button type="submit" size="lg" className="h-12 w-full text-base sm:w-fit">
                  <Send aria-hidden="true" />
                  Enviar pedido
                </Button>
              </FieldGroup>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
