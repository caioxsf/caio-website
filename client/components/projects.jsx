
"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Loader2 } from "lucide-react";
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

export default function Projects() {
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
    <section className="w-full min-h-screen flex flex-col md:flex-row items-start justify-center px-6 py-20 gap-25">
      <LoadingOverlay show={loading} />

      <div className="md:w-1/2 w-full flex flex-col gap-8 order-1 md:order-2">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Meu projetos.
          </h2>
          <p className="text-zinc-400 mb-6">
            Aqui estão alguns dos projetos em que trabalhei.
          </p>
          <Link
            href="/projetos"
            onClick={navigateWithLoading("/projetos")}
            className="inline-flex items-center gap-1 text-teal-400 font-semibold hover:underline transition"
          >
            Explorar mais <ArrowRight size={18} />
          </Link>
        </div>

        <Link
          href="/projetos/script-doesp"
          onClick={navigateWithLoading("/projetos/script-doesp")}
          className="group bg-zinc-950 border border-zinc-800 rounded-2xl max-w-sm w-full shadow-lg transition hover:border-teal-400 p-0"
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
      </div>

      {/* Card go-horse - aparece depois no mobile */}
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-end order-2 md:order-1">
        <Link
          href="/projetos/go-horse"
          onClick={navigateWithLoading("/projetos/go-horse")}
          className="group bg-zinc-950 border border-zinc-800 rounded-2xl max-w-sm w-full shadow-lg transition hover:border-teal-400 p-0"
        >
          <div className="overflow-hidden rounded-t-2xl">
            <Image
              src="/img/go-horse.png"
              width={400}
              height={250}
              alt="go-horse"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-white mb-2">go-horse</h3>
            <Separator className="bg-zinc-800" />
            <p className="text-zinc-400 text-base mt-2">
              Plataforma para publicar e visualizar anúncios de produtos, similar à OLX.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}