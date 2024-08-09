const TUP = () => {
    return (
        <article className="w-[90%] sm:w-[70%] h-[35rem] sm:h-[30rem] m-auto flex flex-row"> 
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
                        Actualmente estudiando .NET con C# y SQL Server.
                        <br />
                        <br />
                        <ul className="list-disc ml-5">
                            <h4>.NET:</h4>
                            <li>POO</li>
                            <li>Windows Forms</li>
                            <li>ADO.NET</li>
                            <li>Creación de ABMC utilizando una BD propia en SQL Server</li>
                        </ul>
                        <br />
                        <ul className="list-disc ml-5">
                            <h4>SQL Server:</h4>
                            <li>Normalización de BD</li>
                            <li>DDL</li>
                            <li>DML</li>
                            <li>Funciones de agregación</li>
                            <li>Procedimientos almacenados</li>
                        </ul>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default TUP;
