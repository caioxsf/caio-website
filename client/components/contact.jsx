import Social from "./social";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center mb-10" id="contato">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-5">Mantenha contato comigo!</h1>
                <span className="text-xl font-medium text-zinc-400 mb-8">Sinta-se à vontade para entrar em contato e conversar mais sobre seus projetos!</span>
            </div>
            <Social/>
        </div>
    )
}