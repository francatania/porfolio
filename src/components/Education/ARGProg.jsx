const ARGProg = () => {
    return (
        <article className="w-[90%] sm:w-[70%] h-[15rem] sm:h-[10rem] m-auto flex flex-row"> 
            <div className="flex flex-col items-center h-full w-1/2">
                <div className="border-2 border-whiteMag rounded-full h-[4rem] w-40 flex items-center justify-center"> 
                    <h4>2021</h4>
                </div>
                
            </div>
            <div className="flex flex-col w-1/2">
                <div className="mb-2"> 
                    <h3 className="text-[1rem] sm:text-xl">
                    Argentina Programa 
                    </h3> 
                </div>
                <div>
                    <p className="text-sm">
                        Mi primera interacción con la programación. Estudié una introducción a la programación orientada a objetos a través de una plataforma llamada "Mumuki".
                    </p>
                </div>
            </div>
        </article>
    );
}

export default ARGProg;
