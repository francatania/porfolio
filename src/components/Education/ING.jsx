const ING = () => {
    return (
        <article className="w-[90%] sm:w-[70%] h-[15rem] sm:h-[10rem] m-auto flex flex-row"> 
            <div className="flex flex-col items-center h-full w-1/2">
                <div className="border-2 border-whiteMag rounded-full h-[4rem] w-40 flex items-center justify-center"> 
                    <h4>2022</h4>
                </div>
                <div className="bg-whiteMag w-[2px] flex-1"></div>
            </div>
            <div className="flex flex-col w-1/2">
                <div className="mb-2"> 
                    <h3 className="text-[1.1rem] sm:text-xl">
                    FRC UTN Ingeniería en Sistemas
                    </h3> 
                </div>
                <div>
                    <p className="text-sm">
                        Estudié durante el primer año Algoritmos y Estructuras de Datos utilizando Python.
                    </p>
                </div>
            </div>
        </article>
    );
}

export default ING;
