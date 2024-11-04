function Header() {
    return(
        <header className="bg-primary-900 flex justify-center py-5">
            <div className="container flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Otavin</h1>

            <nav className="font-semibold text-primary-100 ">
                <a href="#sobre" className="p-4 hover:text-white">Sobre</a>
                <a href="#portifolio" className="p-4 hover:text-white">Portfolio</a>
                <a href="#contato" className="p-4 hover:text-white transi">Contato</a>
            </nav>
            </div>
        </header>
    )
}
export default Header;