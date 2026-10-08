import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Preciso de marcação?',
    a: 'Recomendamos marcação por telefone, sobretudo ao sábado. Durante a semana, se houver uma cadeira livre, atendemos sem marcação.',
  },
  {
    q: 'E se me atrasar ou precisar de cancelar?',
    a: 'Pedimos que nos avise com pelo menos 2 horas de antecedência. Atrasos superiores a 15 minutos podem obrigar a remarcar, para não prejudicar o cliente seguinte.',
  },
  {
    q: 'Que formas de pagamento aceitam?',
    a: 'Numerário, Multibanco e MB WAY. Emitimos sempre fatura, com ou sem número de contribuinte.',
  },
  {
    q: 'Cortam o cabelo a crianças?',
    a: 'Sim, com todo o gosto. Para os mais pequenos, sugerimos marcar a meio da manhã, quando a barbearia está mais calma.',
  },
  {
    q: 'O espaço é acessível?',
    a: 'A entrada tem um pequeno degrau. Temos uma rampa portátil — basta avisar ao marcar e teremos tudo preparado.',
  },
] as const

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:px-6 md:py-24">
        <h2 id="faq-title" className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="font-serif text-lg font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
