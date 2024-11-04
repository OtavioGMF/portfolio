function CardTech({ img, name }) {
    return (
        <div className="flex flex-col items-center w-1/4 p-4">
            <div className="bg-primary-100 hover:bg-primary-300 hover:cursor-pointer hover:ease-out transition duration-2s text-white hover:text-secundary-900 rounded-2xl w-full flex flex-col items-center p-4 ">
                <i className={img + " text-9xl"}></i>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default CardTech