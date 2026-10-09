import Image from 'next/image'

const photos = [
  {
    query: 'close up of a sharp skin fade haircut on a man, barbershop',
    alt: 'Pormenor de um corte degradê acabado',
    className: 'md:row-span-2',
    image: '/images/image6.webp',
  },
  {
    query: 'vintage barber chair in a small barbershop with blue and white azulejo tiles',
    alt: 'Cadeira de barbeiro antiga em frente a parede de azulejos',
    className: '',
    image: '/images/image2.webp',
  },
  {
    query: 'barber applying hot towel on client face for traditional shave',
    alt: 'Barbeiro a colocar toalha quente no rosto de um cliente',
    className: '',
    image: '/images/image3.webp',
  },
  {
    query: 'straight razor, comb and scissors laid out on a wooden barber counter',
    alt: 'Navalha, pente e tesoura em cima de uma bancada de madeira',
    className: '',  
    image: '/images/image5.webp',
  },
  {
    query: 'young boy getting a haircut in a barbershop smiling',
    alt: 'Criança sorridente a cortar o cabelo',
    className: '',
    image: '/images/image4.webp',
  },
] as const

export function Gallery() {
  return (
    <section id="galeria" aria-labelledby="galeria-title" className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-3">
          <h2 id="galeria-title" className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Galeria
          </h2>
          <p className="max-w-lg leading-relaxed text-muted-foreground">
            Um pouco do nosso trabalho e do espaço onde o fazemos.
          </p>
        </div>

        <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4">
          {photos.map((photo, index) => (
            <li
              key={photo.alt}
              className={`relative overflow-hidden rounded-lg bg-muted ${index === 0 ? 'col-span-2 row-span-2 md:col-span-1' : ''} ${photo.className}`}
            >
              <Image
                src={photo.image + `?height=700&width=700&query=${encodeURIComponent(photo.query)}`}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
