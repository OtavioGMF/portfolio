function CardPort({ name, text, btn, link }) {
    return (
        <div className="flex flex-col items-center w-1/2 p-4">
            <div className=" bg-secundary-900 text-white rounded-2xl flex flex-col items-center p-5 w-full ">
                <h1 className="text-2xl mb-3">{name}</h1>
                <p className="text-center mb-3">{text}</p>

                <a className="border-2 text-nowrap rounded-md p-1 bg-primary-100 border-primary-900 hover:bg-secundary-900 text-primary-900 hover:text-white hover:ease-out transition duration-2s" href={link} target="_blank">{btn}</a>
            </div>
        </div>
    )
}

export default CardPort