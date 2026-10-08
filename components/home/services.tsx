const serviceGroups = [
  {
    title: 'Cabelo',
    items: [
      { name: 'Corte de cabelo', detail: 'Tesoura e/ou máquina, lavagem incluída', duration: '30 min', price: '15 €' },
      { name: 'Degradê', detail: 'Fade à navalha com acabamento', duration: '40 min', price: '17 €' },
      { name: 'Corte à máquina', detail: 'Um só pente, cabeça inteira', duration: '15 min', price: '10 €' },
      { name: 'Corte criança', detail: 'Até aos 12 anos', duration: '25 min', price: '12 €' },
      { name: 'Risca / desenho', detail: 'Complemento ao corte', duration: '5 min', price: '3 €' },
    ],
  },
  {
    title: 'Barba',
    items: [
      { name: 'Aparar barba', detail: 'Contorno e acerto à máquina', duration: '15 min', price: '10 €' },
      { name: 'Barba clássica', detail: 'Toalha quente, navalha e bálsamo', duration: '30 min', price: '14 €' },
      { name: 'Corte + barba', detail: 'O serviço completo', duration: '50 min', price: '24 €' },
    ],
  },
] as const

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 id="servicos-title" className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Serviços e preços
            </h2>
            <p className="max-w-lg leading-relaxed text-primary-foreground/80">
              Preços simples, sem surpresas. Todos os valores incluem IVA à taxa legal em vigor.
            </p>
          </div>
          <p className="text-sm text-primary-foreground/80">Pagamento: numerário, Multibanco e MB WAY</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {serviceGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <h3 className="border-b border-primary-foreground/30 pb-3 font-serif text-2xl font-bold">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-6">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-xl font-medium">{item.name}</span>
                      <span
                        aria-hidden="true"
                        className="flex-1 translate-y-[-4px] border-b-2 border-dotted border-primary-foreground/40"
                      />
                      <span className="font-serif text-xl font-bold tabular-nums">{item.price}</span>
                    </div>
                    <p className="text-sm text-primary-foreground/75">
                      {item.detail} <span aria-hidden="true">·</span>{' '}
                      <span className="sr-only">Duração aproximada: </span>
                      {item.duration}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
