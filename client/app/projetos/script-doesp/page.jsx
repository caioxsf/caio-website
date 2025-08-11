import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { Github } from "lucide-react";

export default function script_doesp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-20">

      <div className="flex flex-col gap-2">
        <Image
          src="/img/script-doesp.png"
          width={900}
          height={600}
          alt="Landing page script-doesp"
          className="shadow-2xl rounded-lg"
          priority
        />
        <div className="flex flex-row justify items-center gap-5">
          <h1 className="mt-8 text-4xl max-sm:text-xl font-extrabold text-white text-start">
            script-doesp
          </h1>

          <div className="flex gap-4 mt-8 ">
            <Link
              href="https://github.com/caioxsf/script-doesp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-800 transition"
            >
              <Github size={20} className='text-teal-400' />
              <span className="font-medium">github.com/script-doesp</span>
            </Link>

          </div>
        </div>
        <Separator className="bg-zinc-800 mb-5 mt-2" />
      </div>

      <div className="max-sm:w-100 min-h-screen max-sm:text-justify text-white py-12 px-4 sm:px-6 lg:px-8">

        <div className=" flex flex-row items-center gap-5 mb-5">
          <div className="w-2 h-10 bg-teal-400"><></></div>
          <h1 className="text-4xl max-sm:text-xl font-extrabold ">
            <span>📰 </span>
            DOE-SP Scraper and PDF Generator
          </h1>
        </div>

        <div className="max-w-4xl mx-auto leading-relaxed">
          {/* Header */}
          <header className="mb-10 max-sm:text-justify">

            <p className="text-gray-300">
              Este projeto é um web scraper para extrair informações relevantes do{' '}
              <span className="font-semibold text-indigo-400">Diário Oficial do Estado de São Paulo (DOE-SP)</span>,
              gerar um relatório em PDF com o conteúdo extraído e enviar o relatório por e-mail. Ele automatiza o
              processo de monitoramento e arquivamento de conteúdos importantes do DOE-SP.
            </p>
          </header>

          <Separator className="bg-zinc-800 mb-10" />

          {/* Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>✨</span>
              Recursos
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-white">🔍 Web Scraping:</span> Navega automaticamente no site do DOE-SP e extrai
                conteúdo com base em seções e palavras-chave pré-definidas.
              </li>
              <li>
                <span className="font-semibold text-white">🖨️ Geração de PDF:</span> Cria um relatório PDF bem estruturado com os dados extraídos.
              </li>
              <li>
                <span className="font-semibold text-white">📧 Integração com E-mail:</span> Envia o PDF gerado para um destinatário especificado via SMTP.
              </li>
              <li>
                <span className="font-semibold text-white">⚙️ Tratamento de Erros:</span> Robusto tratamento de exceções para scraping, geração de arquivos e envio de e-mails.
              </li>
              <li>
                <span className="font-semibold text-white">🔒 Configuração por Ambiente:</span> Usa variáveis de ambiente para credenciais e parâmetros do scraping.
              </li>
              <li>
                <span className="font-semibold text-white">🐳 Suporte a Docker:</span> Execução em ambiente containerizado para fácil deploy.
              </li>
            </ul>
          </section>

          <Separator className="bg-zinc-800 mb-10" />

          {/* Technologies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🚀</span>
              Tecnologias Utilizadas
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="text-white font-semibold">Python 🐍:</span> Linguagem principal do projeto.</li>
              <li><span className="text-white font-semibold">Selenium 🌐:</span> Automação de navegação e scraping.</li>
              <li><span className="text-white font-semibold">ReportLab 🖨️:</span> Geração de relatórios em PDF.</li>
              <li><span className="text-white font-semibold">smtplib ✉️:</span> Envio de e-mails via SMTP.</li>
              <li><span className="text-white font-semibold">dotenv 🔒:</span> Gerenciamento de variáveis de ambiente.</li>
              <li><span className="text-white font-semibold">ZoneInfo 🌍:</span> Gerenciamento de fuso horário.</li>
              <li><span className="text-white font-semibold">Docker 🐳:</span> Containerização para deploy.</li>
            </ul>
          </section>

          <Separator className="bg-zinc-800 mb-10" />

          {/* Environment Variables */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🔑</span>
              Variáveis de Ambiente
            </h2>
            <p className="text-gray-300 mb-4">
              Configure as seguintes variáveis em um arquivo <code className="px-2 py-0.5 bg-neutral-900 rounded text-sm text-indigo-300">.env</code>:
            </p>
            <div className="overflow-x-auto rounded-lg border border-neutral-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-900 text-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Variável</th>
                    <th className="px-4 py-3 font-semibold">Descrição</th>
                    <th className="px-4 py-3 font-semibold">Exemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr>
                    <td className="px-4 py-3 font-mono text-indigo-300">EMAIL</td>
                    <td className="px-4 py-3 text-gray-300">Endereço de e-mail do remetente</td>
                    <td className="px-4 py-3 font-mono text-gray-400">your-email@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-indigo-300">PASSWORD</td>
                    <td className="px-4 py-3 text-gray-300">Senha do e-mail do remetente</td>
                    <td className="px-4 py-3 font-mono text-gray-400">your-email-password</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-indigo-300">DESTINATARIO</td>
                    <td className="px-4 py-3 text-gray-300">Endereço de e-mail do destinatário</td>
                    <td className="px-4 py-3 font-mono text-gray-400">recipient-email@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-indigo-300">DATA</td>
                    <td className="px-4 py-3 text-gray-300">Palavras-chave para filtrar conteúdo</td>
                    <td className="px-4 py-3 font-mono text-gray-400">keyword1,keyword2,keyword3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <Separator className="bg-zinc-800 mb-10" />

          {/* Installation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📦</span>
              Instalação
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-300">
              <li>
                Clone o repositório:
                <pre className="mt-2 bg-neutral-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <code>git clone https://github.com/caioxsf/script-doesp.git{'\n'}cd script-doesp</code>
                </pre>
              </li>
              <li>
                Construa o container:
                <pre className="mt-2 bg-neutral-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <code>docker compose build</code>
                </pre>
              </li>
              <li>
                Rode o container:
                <pre className="mt-2 bg-neutral-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <code>docker compose run</code>
                </pre>
              </li>
            </ol>
          </section>

          
        </div>
      </div>

    </div>


  );
}