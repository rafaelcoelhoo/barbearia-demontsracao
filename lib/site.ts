export const site = {
  name: 'Barbearia Azulejo',
  legalName: 'Azulejo Barbearia, Unipessoal Lda.',
  nipc: '515 123 456',
  shareCapital: '5.000,00 €',
  registry: 'Conservatória do Registo Comercial de Lisboa',
  cae: '96021 – Salões de cabeleireiro',
  address: {
    street: 'Rua dos Fanqueiros, 120',
    postalCode: '1100-232',
    city: 'Lisboa',
  },
  phone: {
    href: 'tel:+351213456789',
    display: '213 456 789',
    costNotice: 'Chamada para a rede fixa nacional',
  },
  mobile: {
    href: 'tel:+351912345678',
    display: '912 345 678',
    costNotice: 'Chamada para a rede móvel nacional',
  },
  email: 'ola@barbeariaazulejo.pt',
  mapsUrl: 'https://www.openstreetmap.org/?mlat=38.7108&mlon=-9.1363#map=18/38.7108/-9.1363',
  mapEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=-9.1393%2C38.7093%2C-9.1333%2C38.7123&layer=mapnik&marker=38.7108%2C-9.1363',
  hours: [
    { day: 'Segunda-feira', time: 'Encerrado' },
    { day: 'Terça a sexta', time: '09:30 – 19:30' },
    { day: 'Sábado', time: '09:00 – 18:00' },
    { day: 'Domingo e feriados', time: 'Encerrado' },
  ],
  complaintsBookUrl: 'https://www.livroreclamacoes.pt/Inicio/',
  consumerPortalUrl: 'https://www.consumidor.gov.pt/',
  ral: {
    name: 'CACCL – Centro de Arbitragem de Conflitos de Consumo de Lisboa',
    url: 'https://www.centroarbitragemlisboa.pt/',
    address: 'Rua dos Douradores, 116, 2.º, 1100-207 Lisboa',
  },
  legalUpdatedAt: '28 de setembro de 2026',
} as const

export const navLinks = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#sobre', label: 'Sobre nós' },
  { href: '/#galeria', label: 'Galeria' },
  { href: '/#horario', label: 'Horário' },
  { href: '/#contacto', label: 'Contacto' },
] as const

export const legalLinks = [
  { href: '/politica-de-privacidade', label: 'Política de Privacidade' },
  { href: '/politica-de-cookies', label: 'Política de Cookies' },
  { href: '/termos-e-condicoes', label: 'Termos e Condições' },
  { href: '/termos-e-condicoes#resolucao-de-litigios', label: 'Resolução Alternativa de Litígios' },
] as const
