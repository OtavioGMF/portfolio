import CardPort from "./CardPort"

function PortfolioSection() {
    return (
        <section id="sobre" className="flex flex-col items-center  py-12 h-screen shadow-lg shadow-gray-300">           

            <div className="container py-16 flex items-center justify-center flex-col">

                <h1 className="mb-4 font text-4xl">Portfolio</h1>
                
                <div className="flex flex-wrap">
                   <CardPort name="Projeto" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." btn="Ver Repositório" link=""/>
                   <CardPort name="Projeto" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." btn="Ver Repositório" link=""/>
                   
                    
                </div>
            </div>


        </section>
    )
}
export default PortfolioSection