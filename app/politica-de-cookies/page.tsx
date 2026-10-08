import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: `Informação sobre cookies e tecnologias semelhantes utilizadas no site da ${site.name}.`,
}

const storageItems = [
  {
    name: 'azulejo-cookie-notice-v1',
    type: 'Armazenamento local (localStorage)',
    purpose: 'Memorizar que fechou o aviso de cookies, para não o voltar a mostrar.',
    duration: 'Até ser apagado no navegador',
    category: 'Estritamente necessário',
  },
] as const

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Política de Cookies">
      <p>
        Esta política explica como o site da {site.name} utiliza cookies e tecnologias semelhantes,
        em conformidade com a Lei n.º 41/2004, de 18 de agosto (na redação dada pela Lei n.º 46/2012)
        e com o RGPD.
      </p>

      <h2>1. O que são cookies?</h2>
      <p>
        Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um site.
        Tecnologias semelhantes, como o armazenamento local do navegador (localStorage), funcionam de
        forma parecida.
      </p>

      <h2>2. Que cookies utilizamos?</h2>
      <p>
        Este site <strong>não utiliza cookies de publicidade, de marketing ou de rastreamento</strong>
        , nem partilha informação da sua navegação com redes sociais ou anunciantes. Utilizamos
        apenas o seguinte armazenamento técnico, estritamente necessário, que dispensa consentimento
        nos termos do artigo 5.º, n.º 2 da Lei n.º 41/2004:
      </p>

      <div className="mb-6 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Nome</th>
              <th scope="col" className="px-4 py-3 font-semibold">Tipo</th>
              <th scope="col" className="px-4 py-3 font-semibold">Finalidade</th>
              <th scope="col" className="px-4 py-3 font-semibold">Duração</th>
            </tr>
          </thead>
          <tbody>
            {storageItems.map((item) => (
              <tr key={item.name} className="border-t border-border align-top">
                <td className="px-4 py-3 font-mono text-xs">{item.name}</td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3">
                  {item.purpose} <em>({item.category})</em>
                </td>
                <td className="px-4 py-3">{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Conteúdos de terceiros</h3>
      <p>
        A secção &quot;Horário e localização&quot; apresenta um mapa do{' '}
        <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">
          OpenStreetMap
        </a>
        . Ao carregar o mapa, o seu navegador liga-se aos servidores da OpenStreetMap Foundation, que
        poderá registar dados técnicos como o endereço IP, de acordo com a{' '}
        <a
          href="https://osmfoundation.org/wiki/Privacy_Policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidade da OpenStreetMap Foundation
        </a>
        .
      </p>

      <h2>3. Como gerir ou apagar cookies</h2>
      <p>
        Pode apagar ou bloquear cookies e dados de armazenamento local nas definições do seu
        navegador. Consulte as instruções do seu navegador:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647?hl=pt" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/pt-PT/kb/limpar-cookies-e-dados-de-sites-no-firefox"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/pt-pt/microsoft-edge/eliminar-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>O bloqueio do armazenamento técnico não impede a utilização do site.</p>

      <h2>4. Mais informação</h2>
      <p>
        Para saber como tratamos os seus dados pessoais, consulte a{' '}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Para qualquer questão,
        contacte-nos através de <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  )
}
