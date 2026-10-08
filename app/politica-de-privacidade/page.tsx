import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: `Como a ${site.name} trata os seus dados pessoais, nos termos do RGPD e da Lei n.º 58/2019.`,
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>
        A {site.legalName} respeita a sua privacidade e trata os seus dados pessoais em conformidade
        com o Regulamento (UE) 2016/679 — Regulamento Geral sobre a Proteção de Dados (RGPD) — e com a
        Lei n.º 58/2019, de 8 de agosto, que assegura a sua execução na ordem jurídica nacional.
      </p>

      <h2>1. Responsável pelo tratamento</h2>
      <ul>
        <li>
          <strong>Entidade:</strong> {site.legalName}
        </li>
        <li>
          <strong>NIPC:</strong> {site.nipc}
        </li>
        <li>
          <strong>Morada:</strong> {site.address.street}, {site.address.postalCode} {site.address.city}
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
        <li>
          <strong>Telefone:</strong> <a href={site.phone.href}>{site.phone.display}</a> ({site.phone.costNotice})
        </li>
      </ul>
      <p>
        Dada a sua dimensão e natureza da atividade, a {site.name} não está obrigada a designar um
        Encarregado de Proteção de Dados. Qualquer questão pode ser dirigida para os contactos acima.
      </p>

      <h2>2. Que dados recolhemos</h2>
      <p>Recolhemos apenas os dados que nos fornece voluntariamente:</p>
      <ul>
        <li>
          <strong>Formulário de pedido de informações:</strong> nome, email, telefone (opcional),
          assunto e conteúdo da mensagem.
        </li>
        <li>
          <strong>Marcações por telefone ou presenciais:</strong> nome e contacto telefónico.
        </li>
        <li>
          <strong>Faturação:</strong> nome e número de contribuinte, quando solicitado por si.
        </li>
      </ul>
      <p>Não recolhemos categorias especiais de dados (por exemplo, dados de saúde).</p>

      <h2>3. Finalidades e fundamentos de licitude</h2>
      <ul>
        <li>
          <strong>Responder a pedidos de informação</strong> — com base no seu consentimento (art.
          6.º, n.º 1, alínea a) do RGPD) e em diligências pré-contratuais a seu pedido (alínea b).
        </li>
        <li>
          <strong>Gestão de marcações</strong> — execução do contrato de prestação de serviços (alínea
          b).
        </li>
        <li>
          <strong>Emissão de faturas e cumprimento de obrigações fiscais</strong> — cumprimento de
          obrigação legal (alínea c).
        </li>
      </ul>
      <p>Não utilizamos os seus dados para marketing, criação de perfis ou decisões automatizadas.</p>

      <h2>4. Como funciona o formulário de contacto</h2>
      <p>
        O formulário deste site não guarda dados em nenhum servidor nem base de dados. Ao carregar em
        &quot;Enviar pedido&quot;, é aberto o seu programa de email com a mensagem preenchida, sendo
        enviada diretamente por si para <a href={`mailto:${site.email}`}>{site.email}</a>. Os dados
        passam a ser tratados por nós apenas quando recebemos esse email.
      </p>

      <h2>5. Prazo de conservação</h2>
      <ul>
        <li>Pedidos de informação: até 12 meses após a última comunicação.</li>
        <li>Dados de marcações: até 12 meses após o último serviço.</li>
        <li>Documentos de faturação: pelo prazo legal de 10 anos.</li>
      </ul>
      <p>Decorridos estes prazos, os dados são eliminados de forma segura.</p>

      <h2>6. Destinatários e subcontratantes</h2>
      <p>
        Os seus dados não são vendidos nem cedidos a terceiros. Podem ser tratados por
        subcontratantes que nos prestam serviços técnicos — como o fornecedor de alojamento do site e
        o fornecedor do serviço de email — que atuam apenas segundo as nossas instruções e com
        garantias adequadas de proteção. Poderão ainda ser comunicados a autoridades públicas quando
        a lei o exija.
      </p>

      <h2>7. Transferências internacionais</h2>
      <p>
        Alguns fornecedores tecnológicos podem tratar dados fora do Espaço Económico Europeu. Nesses
        casos, a transferência só ocorre com base numa decisão de adequação da Comissão Europeia (por
        exemplo, o EU-U.S. Data Privacy Framework) ou em cláusulas contratuais-tipo aprovadas.
      </p>

      <h2>8. Os seus direitos</h2>
      <p>Nos termos do RGPD, pode a qualquer momento exercer os seguintes direitos:</p>
      <ul>
        <li>Acesso aos seus dados pessoais;</li>
        <li>Retificação de dados inexatos ou incompletos;</li>
        <li>Apagamento (&quot;direito a ser esquecido&quot;);</li>
        <li>Limitação do tratamento;</li>
        <li>Portabilidade dos dados;</li>
        <li>Oposição ao tratamento;</li>
        <li>Retirada do consentimento, sem comprometer a licitude do tratamento já efetuado.</li>
      </ul>
      <p>
        Para exercer estes direitos, contacte-nos por email para{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Responderemos no prazo máximo de um mês.
      </p>
      <p>
        Tem ainda o direito de apresentar reclamação à autoridade de controlo nacional, a{' '}
        <a href="https://www.cnpd.pt/" target="_blank" rel="noopener noreferrer">
          Comissão Nacional de Proteção de Dados (CNPD)
        </a>
        , Av. D. Carlos I, 134, 1.º, 1200-651 Lisboa.
      </p>

      <h2>9. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra perda,
        acesso não autorizado ou divulgação, incluindo ligação cifrada (HTTPS) em todo o site e acesso
        restrito à caixa de correio.
      </p>

      <h2>10. Menores</h2>
      <p>
        O formulário de contacto destina-se a maiores de 13 anos, nos termos do artigo 16.º da Lei
        n.º 58/2019. Pedidos relativos a crianças devem ser feitos pelos pais ou representantes legais.
      </p>

      <h2>11. Cookies</h2>
      <p>
        Para informação sobre cookies e tecnologias semelhantes, consulte a nossa{' '}
        <Link href="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2>12. Alterações</h2>
      <p>
        Esta política pode ser atualizada. A versão em vigor é sempre a publicada nesta página, com a
        indicação da data da última atualização.
      </p>
    </LegalPage>
  )
}
