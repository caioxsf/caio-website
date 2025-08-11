'use client';

import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Quando a rota mudar, desligue o loading
  useEffect(() => {
    if (loading) setLoading(false);
  }, [pathname]); // sempre que o pathname mudar, some o overlay

  const goToProjetos = () => {
    setOpen(false);
    setLoading(true);
    router.push("/projetos");
  };

  return (
    <div className="text-gray-100">
      <div className="fixed top-0 inset-x-0 z-50 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="flex justify-between items-center gap-20 p-5 px-20 max-sm:px-5">
          <Link href="/">
            <span className="text-lg font-semibold">
              <span className="text-teal-400">&lt;/</span>
              <span className="text-gray-100">caio nobile</span>
              <span className="text-teal-400">&gt;</span>
            </span>
          </Link>

          {/* Menu desktop */}
          <ul className="hidden sm:flex gap-10 font-semibold">
            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full">
              <Link href="#inicio">Início</Link>
            </li>
            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full">
              <Link
                href="/projetos"
                onClick={(e) => {
                  e.preventDefault();
                  goToProjetos();
                }}
              >
                Projetos
              </Link>
            </li>
            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full">
              <Link href="#contato">Contato</Link>
            </li>
          </ul>

          {/* Botão hambúrguer (mobile) */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2 focus:ring-offset-black transition"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <Separator className="bg-zinc-900 px-10 max-sm:px-5" />

      {/* Drawer lateral mobile */}
      <div className="sm:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Painel deslizante */}
        <nav
          id="mobile-menu"
          aria-label="Menu móvel"
          className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85%] bg-black/95 border-l border-zinc-900 p-6 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-semibold">
              <span className="text-teal-400">&lt;/</span>
              <span className="text-gray-100">caio nobile</span>
              <span className="text-teal-400">&gt;</span>
            </span>
            <button
              type="button"
              aria-label="Fechar menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2 focus:ring-offset-black transition"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <ul className="flex flex-col gap-4 font-semibold">
            <li className="relative cursor-pointer py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-10">
              <Link href="/" onClick={() => setOpen(false)}>Início</Link>
            </li>
            <li className="relative cursor-pointer py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-10">
              <Link
                href="/projetos"
                onClick={(e) => {
                  e.preventDefault();
                  goToProjetos();
                }}
              >
                Projetos
              </Link>
            </li>
            <li className="relative cursor-pointer py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-10">
              <Link href="#contato" onClick={() => setOpen(false)}>Contato</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay de carregamento */}
      {loading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <svg className="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" />
            </svg>
            <span className="text-white font-semibold">Carregando…</span>
          </div>
        </div>
      )}
    </div>
  );
}