import Botao from "./Botao";
import perfil from "../assets/mussum.webp"

function HeroSection() {
    return (
        <section className="flex justify-center shadow-lg shadow-gray-300 ">
            <div className="container flex items-center heroSection">

                <div className="w-2/4 p-0">
                    <h1 className="text-4xl w-1/2 mb-2">Olá! Meu nome é <span className="text-secundary-900 font-semibold">Otavio</span> </h1>
                    <h2 className="text-3xl w-1/2 mb-8">Web-Development</h2>
                    <Botao />
                </div>

                <div className="">
                    <img src={perfil} alt="" />
                </div>

            </div>
        </section>
    )
}
export default HeroSection;