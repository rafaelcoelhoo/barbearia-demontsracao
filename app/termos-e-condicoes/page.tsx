import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Termos e Condições',
  description: `Termos de utilização, identificação do prestador, resolução alternativa de litígios e Livro de Reclamações da ${site.name}.`,
}

export default function TermsPage() {
  return (
    <LegalPage title="Termos e Condições">
      <p>
        Os presentes termos regulam a utilização deste site e as condições gerais dos serviços
        prestados pela {site.name}. Ao utilizar o site, aceita estes termos.
      </p>

      <h2>1. Identificação do prestador</h2>
      <p>
        Em cumprimento do artigo 10.º do Decreto-Lei n.º 7/2004, de 7 de janeiro (comércio
        eletrónico), e do artigo 171.º do Código das Sociedades Comerciais:
      </p>
      <ul>
        <li>
          <strong>Firma:</strong> {site.legalName}
        </li>
        <li>
          <strong>Nome comercial:</strong> {site.name}
        </li>
        <li>
          <strong>Sede e estabelecimento:</strong> {site.address.street}, {site.address.postalCode}{' '}
          {site.address.city}
        </li>
        <li>
          <strong>NIPC / Matrícula:</strong> {site.nipc}, na {site.registry}
        </li>
        <li>
          <strong>Capital social:</strong> {site.shareCapital}
        </li>
        <li>
          <strong>CAE:</strong> {site.cae}
        </li>
        <li>
          <strong>Contactos:</strong> <a href={`mailto:${site.email}`}>{site.email}</a> ·{' '}
          <a href={site.phone.href}>{site.phone.display}</a> ({site.phone.costNotice})
        </li>
      </ul>

      <h2>2. Preços</h2>
      <p>
        Os preços apresentados no site são expressos em euros e incluem IVA à taxa legal em vigor,
        conforme o Decreto-Lei n.º 138/90, de 26 de abril. A tabela de preços está igualmente afixada
        no estabelecimento. Em caso de divergência, prevalece o preço afixado no local no momento da
        prestação do serviço. Os preços podem ser alterados sem aviso prévio, sem prejuízo de
        marcações já confirmadas.
      </p>

      <h2>3. Marcações, atrasos e cancelamentos</h2>
      <ul>
        <li>As marcações são feitas por telefone ou presencialmente.</li>
        <li>Pedimos que eventuais cancelamentos sejam comunicados com pelo menos 2 horas de antecedência.</li>
        <li>Atrasos superiores a 15 minutos podem implicar o reagendamento do serviço.</li>
        <li>O formulário do site destina-se a pedidos de informação e não constitui marcação confirmada.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Os textos, fotografias, logótipo e restantes conteúdos deste site são propriedade da{' '}
        {site.legalName} ou utilizados com autorização, estando protegidos pelo Código do Direito de
        Autor e dos Direitos Conexos. Não é permitida a sua reprodução sem autorização prévia.
      </p>

      <h2>5. Responsabilidade</h2>
      <p>
        Procuramos manter a informação do site correta e atualizada, mas não garantimos a ausência
        de erros ou interrupções. O site pode conter ligações para sites de terceiros, sobre cujo
        conteúdo não temos controlo nem responsabilidade.
      </p>

      <h2>6. Proteção de dados</h2>
      <p>
        O tratamento de dados pessoais é regulado pela nossa{' '}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link> e pela{' '}
        <Link href="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2 id="livro-de-reclamacoes">7. Livro de Reclamações</h2>
      <p>
        Nos termos do Decreto-Lei n.º 156/2005, de 15 de setembro, na redação dada pelo Decreto-Lei
        n.º 74/2017, de 21 de junho, dispomos de Livro de Reclamações em formato físico no
        estabelecimento e em formato eletrónico, disponível em{' '}
        <a href={site.complaintsBookUrl} target="_blank" rel="noopener noreferrer">
          www.livroreclamacoes.pt
        </a>
        .
      </p>

      <h2 id="resolucao-de-litigios">8. Resolução Alternativa de Litígios de Consumo</h2>
      <p>
        Em cumprimento da Lei n.º 144/2015, de 8 de setembro, informamos que, em caso de litígio de
        consumo, o consumidor pode recorrer à seguinte entidade de Resolução Alternativa de Litígios
        (RAL):
      </p>
      <ul>
        <li>
          <strong>{site.ral.name}</strong>
          <br />
          {site.ral.address}
          <br />
          <a href={site.ral.url} target="_blank" rel="noopener noreferrer">
            {site.ral.url.replace('https://', '')}
          </a>
        </li>
      </ul>
      <p>
        Mais informações sobre as entidades de RAL disponíveis podem ser consultadas no{' '}
        <a href={site.consumerPortalUrl} target="_blank" rel="noopener noreferrer">
          Portal do Consumidor
        </a>
        .
      </p>

      <h2>9. Lei aplicável e foro</h2>
      <p>
        Estes termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio é competente
        o foro da comarca de Lisboa, sem prejuízo das normas legais imperativas aplicáveis aos
        consumidores e do recurso às entidades de RAL indicadas acima.
      </p>
    </LegalPage>
  )
}
