import CardTech from "./CardTech"

function AbautSection() {
    return (
        <section id="sobre" className="flex flex-col items-center  py-12 h-screen">
            <div className="container  items-center ">
                <h1 className="mb-4 font text-4xl">Sobre</h1>
                <div className="flex">
                    <pre className="text-secundary-900 font-semibold">--- </pre>
                    <p className="">Olá! Sou João, um apaixonado desenvolvedor de sistemas em constante evolução. Desde pequeno, sempre fui fascinado por tecnologia e como ela pode transformar o mundo. Formado em Ciência da Computação, atualmente trabalho em uma startup inovadora, onde contribuo para o desenvolvimento de aplicações web que facilitam a vida dos usuários. Minha experiência abrange linguagens como JavaScript e Python, e estou sempre explorando novas ferramentas e frameworks. Acredito que a colaboração e a troca de ideias são essenciais para a inovação, e adoro participar de hackathons para desafiar meus limites. Meu objetivo é criar soluções que realmente impactem positivamente as pessoas e a sociedade. Bem-vindo ao meu espaço!</p>
                </div>
            </div>

            <div className="container py-16 flex items-center justify-center flex-col">

                <h1 className="mb-4 font text-4xl">Minhas Skills</h1>
                
                <div className="flex flex-wrap">
                    <CardTech img="devicon-html5-plain" name="Html" />
                    <CardTech img="devicon-css3-plain" name="Css" />
                    <CardTech img="devicon-javascript-plain" name="Java-Script" />
                    <CardTech img="devicon-react-original" name="React" />
                    <CardTech img="devicon-java-plain" name="Java" />
                    <CardTech img="devicon-php-plain" name="PhP" />
                    <CardTech img="devicon-mysql-original" name="MySql" />
                    <CardTech img="devicon-nodejs-plain-wordmark" name="NodeJs" />

                </div>
            </div>


        </section>
    )
}

export default AbautSection