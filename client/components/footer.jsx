import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-15 px-4 text-zinc-400">
            <Separator className="bg-zinc-800" />

            <div className="mx-auto max-w-6xl py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 ">
                <div className="text-center md:text-left text-sm">
                    <p className="text-zinc-300">
                        Desenvolvido por <span className="text-teal-400">Caio Nóbile</span>
                    </p>
                    <p>© {new Date().getFullYear()} NOBILE DEV SOLUTIONS</p>
                    <p>CNPJ 60.956.050/0001-79 • Presidente Prudente/SP</p>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="mailto:caio.nobile@hotmail.com"
                        aria-label="Enviar e-mail"
                        className="hover:text-teal-400 transition"
                    >
                        <Mail size={18} />
                    </Link>
                    <Link
                        href="https://github.com/caioxsf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-teal-400 transition"
                    >
                        <Github size={18} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/nobilecaio"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-teal-400 transition"
                    >
                        <Linkedin size={18} />
                    </Link>
                </div>
            </div>

        </footer>
    );
}