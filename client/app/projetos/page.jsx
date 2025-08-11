"use client";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Loader2} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

function LoadingOverlay({ show }) {
    if (!show) return null;
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-zinc-200">
                <Loader2 className="h-6 w-6 animate-spin text-teal-400" />
                <span>Carregando...</span>
            </div>
        </div>
    );
}

export default function Projetos() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    // Navegação com estado de carregamento
    const navigateWithLoading = (href) => (e) => {
        e.preventDefault(); // evita navegação imediata do Link
        setLoading(true);
        // Inicia a navegação; o unmount da página removerá o overlay
        router.push(href);
        // Dica: não resetar loading aqui; a troca de rota desmonta o componente
    };
    return (
        <div className="mt-20 text-center flex justify-center flex-col">
            <LoadingOverlay show={loading} />
            <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-2">
                    Meu projetos.
                </h2>
                <p className="text-zinc-400 mb-6">
                    Aqui estão alguns dos projetos em que trabalhei.
                </p>
                <Link
                    href="https://github.com/caioxsf/"
                    className="inline-flex items-center gap-1 text-teal-400 font-semibold hover:underline transition"
                >
                    Explorar mais <ArrowRight size={18} />
                </Link>
            </div>

            {/* Grid responsivo: 1 col no mobile, 2 no sm, 3 no lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center px-4">
                {/* Card 1 */}
                <Link
                    className="h-85 w-400 group bg-zinc-950 border border-zinc-800 rounded-2xl max-w-sm shadow-lg transition hover:border-teal-400 p-0"
                    href="/projetos/script-doesp"
                    onClick={navigateWithLoading("/projetos/script-doesp")}
                >
                    <div className="overflow-hidden rounded-t-2xl">
                        <Image
                            src="/img/script-doesp.png"
                            width={400}
                            height={250}
                            alt="script-doesp"
                            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-white mb-2">script-doesp</h3>
                        <Separator className="bg-zinc-800" />
                        <p className="text-zinc-400 text-base mt-2">
                            Ferramenta que automatiza a extração de informações do Diário Oficial do Estado de SP, gera um PDF com os dados e envia por e-mail.
                        </p>
                    </div>
                </Link>

                {/* Card 2 */}
                <Link
                    className="group h-85 w-400 bg-zinc-950 border border-zinc-800 rounded-2xl max-w-sm shadow-lg transition hover:border-teal-400 p-0"
                    href="/projetos/go-horse"
                    onClick={navigateWithLoading("/projetos/go-horse")}
                >
                    <div className="overflow-hidden rounded-t-2xl">
                        <Image
                            src="/img/go-horse.png"
                            width={400}
                            height={250}
                            alt="script-doesp"
                            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-white mb-2">go-horse</h3>
                        <Separator className="bg-zinc-800" />
                        <p className="text-gray-300">
                            Plataforma para publicar e visualizar anúncios de produtos, similar à OLX.
                        </p>
                    </div>
                </Link>

                {/* Card 3 */}
                <Link
                    className="group h-85 w-400 bg-zinc-950 border border-zinc-800 rounded-2xl max-w-sm shadow-lg transition hover:border-teal-400 p-0"
                    href="/projetos/api-lucinete-loja"
                    onClick={navigateWithLoading("/projetos/api-lucinete-loja")}
                >
                    <div className="overflow-hidden rounded-t-2xl">
                        <Image
                            src="/img/api-lucinete-loja.png"
                            width={400}
                            height={250}
                            alt="api-lucinete-loja"
                            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-white mb-2">api-lucinete-loja</h3>
                        <Separator className="bg-zinc-800" />
                        <p className="text-zinc-300 text-base mt-2">
                            API de um e-commerce com funcionalidade de checkout implementada.
                        </p>
                    </div>
                </Link>

            </div>
        </div>
    );
}