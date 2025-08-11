import Image from "next/image"

export default function About() {
    return (
        <div className="flex items-start md:items-center flex-col md:flex-row gap-5 m-20 max-sm:m-6 max-sm:mt-30 text-gray-400">
            <div className="w-full md:w-1/2">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
                    ⚡ Sobre mim
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-5 text-lg font-medium text-justify">
                    Tenho 20 anos e curso <span className="text-teal-400">Análise e Desenvolvimento de Sistemas </span>
                    pela Universidade do Oeste Paulista (Unoeste), atualmente no quinto termo.
                    Busco constantemente aprimorar minhas habilidades em desenvolvimento, trabalhando
                    com as principais tecnologias e boas práticas do mercado.
                    Sou apaixonado tanto pela área do <span className="text-teal-400">Front-end</span> quanto do <span className="text-teal-400">Back-end. </span>
                    Gosto de jogar <span className="text-teal-400">futebol, jogos on-line e programar 😎</span>
                </p>
            </div>


            <div className="w-full md:w-1/2 max-sm:mt-10 flex justify-center">
                <Image
                    src="/img/caio.jpeg"
                    width={300}
                    height={300}
                    alt="Foto do Caio"
                    className="w-[300px] h-[300px] rounded-full object-cover border-4 border-teal-950 shadow-lg"
                />
            </div>
        </div>
    )
}