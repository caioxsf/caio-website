import Link from 'next/link';
import Social from "@/components/social"
import { Github } from 'lucide-react';


export default function Inicio() {
    return (
        <div className="flex px-20 pt-20 max-sm:px-4 max-sm:pt-10 max-sm:mt-12" id='inicio'>
            <div className="text-teal-400 w-full">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 max-sm:text-2xl">
                    Olá, eu sou o
                </h2>

                <h1 className="text-gray-300 pattern-diagonal-lines-md text-pattern bg-white scroll-m-20 text-start text-9xl font-extrabold tracking-tight text-balance max-sm:text-5xl">
                    Caio Nóbile.
                </h1>
                
                <h3 className="text-gray-400 scroll-m-20 text-xl font-semibold tracking-tight max-sm:text-xl">
                    <span className="text-teal-400">Desenvolvedor de Software </span>
                     e 
                    <span className="text-teal-400"> Analista de Dados.</span>
                </h3>

                <h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-gray-400 max-sm:text-lg'>
                    🚀 Atualmente especializado em desenvolvimento Full Stack.
                </h4>

                <h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-gray-400 max-sm:text-lg'>
                    ⚡ Desenvolvedor de Software na <Link className='text-teal-400' href="https://www.bevioficial.com.br/">Bevi.</Link>
                </h4>

                <div className="max-sm:mt-4">
                  <Social></Social>
                </div>
            </div>
            
        </div>
    )
}