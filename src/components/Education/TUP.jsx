const TUP = () => {
    return (
        <article className="w-[90%] sm:w-[70%] h-[40rem] sm:h-[35rem] m-auto flex flex-row"> 
            <div className="flex flex-col items-center h-full w-1/2">
                <div className="border-2 border-whiteMag rounded-full h-[4rem] w-40 flex items-center justify-center"> 
                    <h4>2024 - Actualidad</h4>
                </div>
                <div className="bg-whiteMag w-[2px] flex-1"></div>
            </div>
            <div className="flex flex-col w-1/2">
                <div className="mb-2"> 
                    <h3 className="text-[1.1rem] sm:text-xl">
                    FRC UTN Tecnicatura Universitaria en Programación
                    </h3> 
                </div>
                <div>
                    <p className="text-sm">
                        <ul className="list-disc ml-5">
                            <h4>BACKEND:</h4>
                            <li>.NET con C#</li>
                            <li>API</li>
                            <li>Entity Framework</li>
                            <li>LINQ</li>
                        </ul>
                        <br />
                        <ul className="list-disc ml-5">
                            <h4>FRONTEND:</h4>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                        </ul>
                        <br />
                        <ul className="list-disc ml-5">
                            <h4>SQL Server:</h4>
                            <li>Normalización de BD</li>
                            <li>DDL</li>
                            <li>DML</li>
                            <li>Funciones de agregación</li>
                            <li>Procedimientos almacenados</li>
                            <li>Triggers</li>
                            <li>Programación en SQL</li>
                            <li>Manejo de errores</li>
                        </ul>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default TUP;
