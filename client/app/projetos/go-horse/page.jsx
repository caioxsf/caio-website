import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, FileUser } from 'lucide-react';
import Link from "next/link";
export default function go_horse() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-20">

            <div className="flex flex-col gap-2">
                <Image
                    src="/img/go-horse.png"
                    width={900}
                    height={600}
                    alt="Landing page script-doesp"
                    className="shadow-2xl rounded-lg"
                    priority
                />
                <div className="flex flex-row justify items-center gap-5">
                    <h1 className="mt-8 text-4xl max-sm:text-xl font-extrabold text-white text-start">
                        go-horse
                    </h1>

                    <div className="flex gap-4 mt-8 ">
                        <Link
                            href="https://github.com/caioxsf/go-horse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-800 transition"
                        >
                            <Github size={20} className='text-teal-400' />
                            <span className="font-medium">github.com/go-horse</span>
                        </Link>

                    </div>
                </div>

                <Separator className="bg-zinc-800 mb-5 mt-2" />
            </div>

            <div className="min-h-screen max-sm:w-100 max-sm:text-justify text-white py-12 px-4 sm:px-6 lg:px-8 ">

                <div className=" flex flex-row items-center gap-5 mb-5">
                    <div className="w-2 h-10 bg-teal-400"><></></div>
                    <h1 className="max-sm:text-xl text-4xl font-extrabold">
                        <span>📰 </span>
                        Sistema para classificados on-line.
                    </h1>
                </div>

                <div className="max-w-4xl mx-auto leading-relaxed">
                    {/* Header */}
                    <header className="mb-10">
                        <p className="text-gray-300 max-sm:">
                            Este projeto tem como objetivo oferecer uma plataforma onde usuários possam publicar e visualizar anúncios de produtos, similar a plataformas como{' '}
                            <span className="font-semibold text-indigo-400">OLX, Facebook Marketplace e Webmotors</span>. O sistema é dividido em duas áreas principais:{' '}
                            <span className="font-semibold text-green-400">funcionalidades públicas</span> (acessíveis a todos os visitantes) e{' '}
                            <span className="font-semibold text-yellow-400">funcionalidades restritas</span> (disponíveis apenas para usuários autenticados).
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
                                    <span className="font-semibold text-white">👤 Registro de Novos Usuários:</span><br />
                                    Visitantes podem criar uma conta fornecendo nome, e-mail e senha. O sistema valida os dados e cria um perfil único para cada usuário.
                                </li>
                                <li>
                                    <span className="font-semibold text-white">🔐 Autenticação:</span><br />
                                    Usuários cadastrados podem acessar sua conta através de login com e-mail e senha. O sistema verifica as credenciais e concede acesso às funcionalidades restritas.
                                </li>
                                <li>
                                    <span className="font-semibold text-white">👀 Visualização de Classificados:</span>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Listagem de anúncios com:
                                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                                <li>🖼️ Imagens em miniatura</li>
                                                <li>📝 Título</li>
                                                <li>💰 Preço</li>
                                                <li>📍 Localização</li>
                                            </ul>
                                        </li>
                                        <li>Sistema de filtros para refinar a busca por:
                                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                                <li>🏙️ Cidade/localização</li>
                                                <li>🏷️ Tipo de classificado (item, imóvel, veículo)</li>
                                                <li>⭐ Condição do produto (novo, usado)</li>
                                                <li>📊 Ordenação por data de publicação ou preço</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-white">🔍 Detalhes do Classificado:</span><br />
                                    Qualquer visitante pode acessar a página de detalhes de um anúncio, que exibe:
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>🖼️ Múltiplas imagens do produto</li>
                                        <li>📋 Título completo</li>
                                        <li>📄 Descrição detalhada</li>
                                        <li>💵 Valor/preço</li>
                                        <li>👤 Informações do vendedor</li>
                                        <li>📍 Localização</li>
                                        <li>📅 Data de publicação</li>
                                    </ul>
                                </li>
                            </ul>

                            <div className="mt-4 p-4 bg-neutral-900 rounded-lg border-l-4 border-yellow-500">
                                <p className="text-yellow-200">
                                    <span className="font-semibold">⚠️ Nota:</span> Visitantes não autenticados podem visualizar os anúncios, mas não podem enviar mensagens ao vendedor ou salvar classificados.
                                </p>
                            </div>
                        </div>

                        {/* Restricted Features */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Funcionalidades Restritas</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-300">
                                <li>
                                    <span className="font-semibold text-white">➕ Criação de Classificados:</span><br />
                                    Usuários autenticados podem criar anúncios fornecendo:
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>📝 Título</li>
                                        <li>📄 Descrição detalhada</li>
                                        <li>🏷️ Tipo</li>
                                        <li>💰 Valor</li>
                                        <li>⭐ Condição do produto</li>
                                        <li>📍 Localização</li>
                                        <li>📸 Upload de múltiplas imagens</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-white">⚙️ Gerenciamento de Classificados:</span><br />
                                    Usuários podem:
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>👁️ Visualizar seus anúncios ativos e inativos</li>
                                        <li>✏️ Editar informações dos anúncios</li>
                                        <li>🗑️ Excluir anúncios</li>
                                        <li>🔄 Alterar a situação (ativo/inativo)</li>
                                        <li>📊 Ver estatísticas de visualizações</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-white">💬 Sistema de Mensagens:</span>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>📤 Enviar mensagens aos vendedores diretamente pela página de detalhes do classificado</li>
                                        <li>⚡ Receber e enviar mensagens em tempo real utilizando WebSocket</li>
                                        <li>💬 Acessar uma página de mensageria com todas as conversas organizadas</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-white">💾 Salvar Classificados:</span>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>❤️ Salvar anúncios de interesse para visualização posterior</li>
                                        <li>📋 Acessar uma página com todos os classificados salvos</li>
                                        <li>❌ Remover itens da lista de salvos</li>
                                    </ul>
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
                            <li><span className="text-white font-semibold">Frontend 🎨:</span> Interface responsiva e amigável utilizando <span className="font-semibold text-blue-400">Next.js</span>.</li>
                            <li><span className="text-white font-semibold">Backend ⚙️:</span> API RESTful para operações principais utilizando <span className="font-semibold text-green-400">Express</span>.</li>
                            <li><span className="text-white font-semibold">WebSocket ⚡:</span> Comunicação em tempo real para troca de mensagens.</li>
                            <li><span className="text-white font-semibold">Banco de Dados 🗄️:</span> Armazenamento de informações de usuários, classificados e mensagens.</li>
                            <li><span className="text-white font-semibold">Sistema de Autenticação 🔐:</span> Controle de acesso às funcionalidades restritas com <span className="font-semibold text-purple-400">tokens JWT</span>.</li>
                            <li><span className="text-white font-semibold">Upload de Imagens 📸:</span> Sistema para armazenamento e otimização das imagens dos classificados.</li>
                        </ul>
                    </section>
                </div>
            </div>

        </div>


    );
}