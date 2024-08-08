export function Navbar(){

    return (
    <nav className="bg-oceanBlue w-full h-[3rem] mb-[-1px]">
        <div className="flex justify-around w-[70%] h-full m-auto text-whiteMag">
            <div className="flex items-center">
                <h3>Inicio</h3>
            </div>
            <div className="flex items-center">
                <h3>Tecnologías</h3>
            </div>
            <div className="flex items-center">
                <h3>Proyectos</h3>
            </div>
            <div className="flex items-center">
                <h3>Contacto</h3>
            </div>
        </div>
    </nav>)
}