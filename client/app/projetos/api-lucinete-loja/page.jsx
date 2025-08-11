import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, FileUser } from 'lucide-react';
import Link from "next/link";
export default function api_lucinete_loja() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-20">

            <div className="flex flex-col gap-2">
                <Image
                    src="/img/api-lucinete-loja.png"
                    width={900}
                    height={600}
                    alt="Landing page script-doesp"
                    className="shadow-2xl rounded-lg"
                    priority
                />
                <div className="flex flex-row justify items-center gap-5">
                    <h1 className="mt-8 text-4xl max-sm:text-xl font-extrabold text-white text-start">
                        api-lucinete-loja
                    </h1>

                    <div className="flex gap-4 mt-8 ">
                        <Link
                            href="https://github.com/caioxsf/api-lucinete-loja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-800 transition"
                        >
                            <Github size={20} className='text-teal-400' />
                            <span className="font-medium">github.com/api-lucinete-loja</span>
                        </Link>

                    </div>
                </div>

                <Separator className="bg-zinc-800 mb-5 mt-2" />
            </div>

            <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">

                <div className=" flex flex-row items-center gap-5 mb-5">
                    <div className="w-2 h-10 bg-teal-400"><></></div>
                    <h1 className="max-sm:text-xl text-4xl font-extrabold tracking-tight">
                        <span>🛍️ </span>
                        API para E-commerce — Lojinha da Lucinete
                    </h1>
                </div>

                <div className="max-w-4xl mx-auto leading-relaxed">
                    {/* Header */}
                    <header className="mb-10">
                        <p className="text-gray-300 max-sm:text-justify">
                            Esta API RESTful oferece os recursos essenciais para um e-commerce completo da{" "}
                            <span className="font-semibold text-indigo-400">Lojinha da Lucinete</span>, incluindo gerenciamento de{" "}
                            <span className="font-semibold text-green-400">usuários, produtos, categorias, carrinho e vendas</span>.
                            Possui autenticação via <span className="font-semibold text-purple-400">JWT</span>,
                            documentação <span className="font-semibold text-blue-400">Swagger</span> e configuração simples com <span className="font-semibold text-emerald-400">Docker</span>.
                        </p>
                    </header>

                    <div className="bg-zinc-800 h-px mb-10"></div>

                    {/* Features */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>✨</span>
                            Funcionalidades
                        </h2>

                        {/* Public Features */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-green-400">Funcionalidades Públicas</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-300">
                                <li>
                                    <span className="font-semibold text-white">👀 Listagem e busca de produtos:</span><br />
                                    Consultar catálogo com filtros por categoria, nome e ordenação por preço/data.
                                </li>
                                <li>
                                    <span className="font-semibold text-white">📂 Visualização de categorias:</span><br />
                                    Obter categorias para facilitar a navegação do catálogo.
                                </li>
                                <li>
                                    <span className="font-semibold text-white">🧾 Detalhes do produto:</span><br />
                                    Acessar informações completas como nome, descrição, preço e disponibilidade.
                                </li>
                                <li>
                                    <span className="font-semibold text-white">📚 Documentação interativa:</span><br />
                                    Explorar e testar endpoints via Swagger em <span className="font-mono text-gray-200">/docs</span>.
                                </li>
                            </ul>

                            <div className="mt-4 p-4 bg-neutral-900 rounded-lg border-l-4 border-yellow-500">
                                <p className="text-yellow-200">
                                    <span className="font-semibold">⚠️ Nota:</span> A navegação é pública, porém ações sensíveis como gerenciar carrinho, criar venda ou administrar catálogo exigem autenticação.
                                </p>
                            </div>
                        </div>

                        {/* Restricted Features */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Funcionalidades Restritas</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-300">
                                <li>
                                    <span className="font-semibold text-white">🔐 Autenticação & Perfil:</span><br />
                                    Registro e login (JWT). Acesso a dados do usuário e operações autenticadas.
                                </li>
                                <li>
                                    <span className="font-semibold text-white">🛒 Carrinho de Compras:</span>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>➕ Adicionar/atualizar/remover itens do carrinho</li>
                                        <li>🧮 Cálculo de totais</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-white">💳 Vendas/Checkout:</span><br />
                                    Registrar venda a partir do carrinho e consultar históricos do usuário.
                                </li>
                                <li>
                                    <span className="font-semibold text-white">📦 Catálogo (Admin):</span>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>CRUD de produtos e categorias</li>
                                        <li>Controle de estoque/preço</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-white">📊 Relatórios (Admin):</span><br />
                                    Consultas agregadas de vendas e itens, auxiliando na gestão.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="bg-zinc-800 h-px mb-10"></div>

                    {/* Technical Aspects */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>🛠️</span>
                            Aspectos Técnicos
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>
                                <span className="text-white font-semibold">Framework ⚙️:</span>
                                Node.js com Express, CORS e <span className="font-semibold text-blue-400">Swagger</span> para documentação.
                            </li>
                            <li>
                                <span className="text-white font-semibold">Banco de Dados 🗄️:</span>
                                MySQL (<span className="font-mono text-gray-200">mysql2</span>) com repositórios dedicados.
                            </li>
                            <li>
                                <span className="text-white font-semibold">Autenticação 🔐:</span>
                                JWT (<span className="font-mono text-gray-200">jsonwebtoken</span>) e senhas com <span className="font-mono text-gray-200">bcryptjs</span>.
                            </li>
                            <li>
                                <span className="text-white font-semibold">Infra 🐳:</span>
                                Dockerfile para conteinerização; variáveis via <span className="font-mono text-gray-200">dotenv</span>.
                            </li>
                            <li>
                                <span className="text-white font-semibold">E-mails ✉️:</span>
                                Suporte com <span className="font-mono text-gray-200">Nodemailer</span> (SMTP).
                            </li>
                            <li>
                                <span className="text-white font-semibold">Docs 📚:</span>
                                Swagger UI disponível em <span className="font-mono text-gray-200">/docs</span>.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>

        </div>


    );
}