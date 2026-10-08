import Image from 'next/image'

const team = [
  {
    name: 'Rui Martins',
    role: 'Fundador e barbeiro',
    bio: 'Aprendeu o ofício com o avô, no Porto. Especialista em cortes clássicos e barba à navalha.',
    image:
      '/images/rui.jpg?height=600&width=600&query=portrait%20of%20a%20friendly%20portuguese%20barber%20in%20his%2040s%20with%20a%20beard%20wearing%20a%20dark%20apron',
  },
  {
    name: 'Inês Carvalho',
    role: 'Barbeira',
    bio: 'Chegou em 2019 e trouxe os degradês e os cortes modernos. Tem mão leve para os mais novos.',
    image:
      '/images/ines.jpg?height=600&width=600&query=portrait%20of%20a%20young%20portuguese%20female%20barber%20with%20short%20hair%20holding%20clippers%20in%20a%20barbershop',
  },
] as const

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-5">
          <h2 id="sobre-title" className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Uma barbearia pequena, de propósito.
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Abrimos portas em 2014 numa antiga retrosaria da Rua dos Fanqueiros. Mantivemos os
              azulejos originais, o chão de mosaico e a vontade de fazer as coisas devagar.
            </p>
            <p>
              Somos duas pessoas e duas cadeiras. Não há pressas nem linhas de montagem: cada corte
              começa com uma conversa sobre o que procura e termina quando estiver satisfeito.
            </p>
          </div>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <li key={member.name} className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={`Retrato de ${member.name}`}
                  fill
                  sizes="(min-width: 768px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
